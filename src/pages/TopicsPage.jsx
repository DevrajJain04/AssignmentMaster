import { useProgress } from '../hooks/useProgress'
import { topics } from '../data/topics'
import './TopicsPage.css'

function TopicsPage() {
    const { toggleTopic, getTopicStatus, topicsProgress } = useProgress()

    const getTopicProgress = (topic) => {
        const topicData = topicsProgress[topic.id] || {}
        const completed = Object.values(topicData).filter(Boolean).length
        return {
            completed,
            total: topic.subtopics.length,
            percentage: Math.round((completed / topic.subtopics.length) * 100)
        }
    }

    return (
        <div className="topics-page">
            <header className="page-header">
                <div>
                    <h1 className="page-title">Learning Topics 📚</h1>
                    <p className="page-subtitle">Master these core CS concepts for your interviews</p>
                </div>
            </header>

            <div className="topics-list">
                {topics.map(topic => {
                    const progress = getTopicProgress(topic)
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
                    <span className="goal-icon">💰</span>
                    <h3>10+ LPA Target</h3>
                    <p>These skills will help you land high-paying off-campus offers</p>
                </div>
                <div className="goal-card glass-card">
                    <span className="goal-icon">🚀</span>
                    <h3>Build Projects</h3>
                    <p>Apply these concepts while building your portfolio projects</p>
                </div>
            </div>
        </div>
    )
}

export default TopicsPage
