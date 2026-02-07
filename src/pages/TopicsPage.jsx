import { useState } from 'react'
import { useProgress } from '../hooks/useProgress'
import { topics } from '../data/topics'
import { ResourceFinderInline } from '../components/ResourceFinder'
import QuestionDetail from '../components/QuestionDetail'
import './TopicsPage.css'

function TopicsPage() {
    const { toggleTopic, getTopicStatus, topicsProgress, toggleQuestion, getQuestionStatus } = useProgress()
    const [expandedTopic, setExpandedTopic] = useState(null)
    const [showQuestions, setShowQuestions] = useState({})
    const [selectedQuestion, setSelectedQuestion] = useState(null)

    const getTopicProgress = (topic) => {
        const topicData = topicsProgress[topic.id] || {}
        const completed = Object.values(topicData).filter(Boolean).length
        return {
            completed,
            total: topic.subtopics.length,
            percentage: Math.round((completed / topic.subtopics.length) * 100)
        }
    }

    const getQuestionsProgress = (topic) => {
        if (!topic.questions) return { completed: 0, total: 0, percentage: 0 }
        const completed = topic.questions.filter(q => getQuestionStatus(`topic-${q.id}`) === 'mastered').length
        return {
            completed,
            total: topic.questions.length,
            percentage: Math.round((completed / topic.questions.length) * 100)
        }
    }

    const toggleTopicQuestions = (topicId) => {
        setShowQuestions(prev => ({
            ...prev,
            [topicId]: !prev[topicId]
        }))
    }

    const handleQuestionClick = (question, topic) => {
        setSelectedQuestion({
            ...question,
            categoryTitle: topic.title,
            categoryId: topic.id
        })
    }

    return (
        <div className="topics-page">
            <header className="page-header">
                <div>
                    <h1 className="page-title">Learning Topics 📚</h1>
                    <p className="page-subtitle">Master these core CS concepts for your interviews</p>
                </div>
                <div className="header-stats">
                    <div className="stat-pill">
                        <span className="stat-icon">📝</span>
                        <span>{topics.reduce((sum, t) => sum + (t.questions?.length || 0), 0)} Interview Questions</span>
                    </div>
                </div>
            </header>

            <div className="topics-list">
                {topics.map(topic => {
                    const progress = getTopicProgress(topic)
                    const qProgress = getQuestionsProgress(topic)
                    const isShowingQuestions = showQuestions[topic.id]

                    return (
                        <div
                            key={topic.id}
                            className="topic-card glass-card"
                            style={{ '--topic-color': topic.color }}
                        >
                            <div className="topic-header">
                                <div className="topic-icon-wrapper" style={{ background: topic.color }}>
                                    {topic.icon}
                                </div>
                                <div className="topic-info">
                                    <h2>{topic.title}</h2>
                                    <p>{topic.description}</p>
                                </div>
                                <div className="topic-progress-ring">
                                    <svg width="60" height="60">
                                        <circle
                                            cx="30" cy="30" r="26"
                                            fill="none"
                                            stroke="rgba(255,255,255,0.1)"
                                            strokeWidth="4"
                                        />
                                        <circle
                                            cx="30" cy="30" r="26"
                                            fill="none"
                                            stroke={topic.color}
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeDasharray={`${2 * Math.PI * 26}`}
                                            strokeDashoffset={`${2 * Math.PI * 26 * (1 - progress.percentage / 100)}`}
                                            style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                                        />
                                    </svg>
                                    <span className="progress-value">{progress.percentage}%</span>
                                </div>
                            </div>

                            <div className="subtopics-grid">
                                {topic.subtopics.map(subtopic => {
                                    const isComplete = getTopicStatus(topic.id, subtopic.id)
                                    return (
                                        <div
                                            key={subtopic.id}
                                            className={`subtopic-item ${isComplete ? 'completed' : ''}`}
                                            onClick={() => toggleTopic(topic.id, subtopic.id)}
                                        >
                                            <div className={`checkbox ${isComplete ? 'checked' : ''}`}>
                                                {isComplete && '✓'}
                                            </div>
                                            <span className="subtopic-text">{subtopic.title}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Interview Questions Section */}
                            {topic.questions && topic.questions.length > 0 && (
                                <div className="topic-questions-section">
                                    <div
                                        className="questions-toggle"
                                        onClick={() => toggleTopicQuestions(topic.id)}
                                    >
                                        <div className="questions-toggle-info">
                                            <span className="questions-icon">🎯</span>
                                            <span className="questions-label">Interview Questions</span>
                                            <span className="questions-count">{qProgress.completed}/{qProgress.total}</span>
                                        </div>
                                        <div className="questions-toggle-right">
                                            <div className="mini-progress-bar">
                                                <div
                                                    className="mini-progress-fill"
                                                    style={{ width: `${qProgress.percentage}%`, background: topic.color }}
                                                />
                                            </div>
                                            <span className={`toggle-arrow ${isShowingQuestions ? 'open' : ''}`}>▼</span>
                                        </div>
                                    </div>

                                    {isShowingQuestions && (
                                        <div className="topic-questions-list">
                                            {topic.questions.map(question => {
                                                const status = getQuestionStatus(`topic-${question.id}`)
                                                return (
                                                    <div
                                                        key={question.id}
                                                        className={`topic-question-item ${status}`}
                                                        onClick={() => handleQuestionClick(question, topic)}
                                                    >
                                                        <div
                                                            className={`checkbox ${status === 'mastered' ? 'checked' : ''}`}
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                toggleQuestion(`topic-${question.id}`)
                                                            }}
                                                        >
                                                            {status === 'mastered' && '✓'}
                                                        </div>
                                                        <div className="question-content">
                                                            <span className="question-text">{question.text}</span>
                                                            {question.description && (
                                                                <span className="has-ai-badge">🎤 AI</span>
                                                            )}
                                                        </div>
                                                        <ResourceFinderInline text={question.text} context={topic.id} />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="topic-footer">
                                <div className="topic-resources">
                                    <span className="resources-label">📚 Resources:</span>
                                    <div className="resources-links">
                                        {topic.resources.map((res, i) => (
                                            <a
                                                key={i}
                                                href={res.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="resource-link"
                                            >
                                                {res.title}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="topic-stats">
                                    <span>{progress.completed}/{progress.total} completed</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Goal Cards */}
            <div className="goal-cards">
                <div className="goal-card glass-card">
                    <span className="goal-icon">🎯</span>
                    <h3>Interview Ready</h3>
                    <p>Complete all topics to be fully prepared for technical interviews</p>
                </div>
                <div className="goal-card glass-card">
                    <span className="goal-icon">💡</span>
                    <h3>Deep Understanding</h3>
                    <p>Master fundamentals to solve any problem thrown at you</p>
                </div>
                <div className="goal-card glass-card">
                    <span className="goal-icon">🚀</span>
                    <h3>Build Projects</h3>
                    <p>Apply these concepts while building your portfolio projects</p>
                </div>
            </div>

            {/* Question Detail Modal */}
            {selectedQuestion && (
                <QuestionDetail
                    question={selectedQuestion}
                    onClose={() => setSelectedQuestion(null)}
                    onMastered={() => toggleQuestion(`topic-${selectedQuestion.id}`)}
                    isMastered={getQuestionStatus(`topic-${selectedQuestion.id}`) === 'mastered'}
                />
            )}
        </div>
    )
}

export default TopicsPage
