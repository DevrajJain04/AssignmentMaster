import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { getTimeBasedQuote } from '../data/quotes'
import { questionBlocks, getTotalQuestions } from '../data/questions'
import { projects, getTotalMilestones } from '../data/projects'
import { topics } from '../data/topics'
import './Dashboard.css'

function Dashboard() {
    const { getQuestionsStats, getProjectStats, getOverallProgress, getStreak } = useProgress()
    const [quote, setQuote] = useState(getTimeBasedQuote())
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000)
        return () => clearInterval(timer)
    }, [])

    const questionStats = getQuestionsStats(getTotalQuestions())
    const overallProgress = getOverallProgress()
    const streak = getStreak()

    // Calculate project stats
    const projectStats = projects.map(project => ({
        ...project,
        stats: getProjectStats(project.id, getTotalMilestones(project.id))
    }))

    const totalProjectMilestones = projects.reduce((sum, p) => sum + getTotalMilestones(p.id), 0)
    const completedProjectMilestones = projectStats.reduce((sum, p) => sum + p.stats.completed, 0)

    const greeting = () => {
        const hour = currentTime.getHours()
        if (hour < 12) return 'Good morning'
        if (hour < 18) return 'Good afternoon'
        return 'Good evening'
    }

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="dashboard-header">
                <div className="header-content">
                    <h1 className="greeting">{greeting()}, <span className="text-gradient">Champion</span> 🚀</h1>
                    <p className="header-subtitle">Your journey to 10+ LPA starts here. Let's crush it today!</p>
                </div>
                {streak > 0 && (
                    <div className="streak-display animate-glow">
                        <span className="streak-fire">🔥</span>
                        <div className="streak-info">
                            <span className="streak-count">{streak}</span>
                            <span className="streak-label">Day Streak</span>
                        </div>
                    </div>
                )}
            </header>

            {/* Motivation Banner */}
            <div className="motivation-banner glass-card glass-card--accent animate-fade-in">
                <div className="quote-content">
                    <span className="quote-icon">💡</span>
                    <blockquote>
                        <p>"{quote.text}"</p>
                        <footer>— {quote.author}</footer>
                    </blockquote>
                </div>
                <button className="btn btn--ghost" onClick={() => setQuote(getTimeBasedQuote())}>
                    New Quote ↻
                </button>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                <div className="stat-card glass-card stagger-item">
                    <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }}>📊</div>
                    <div className="stat-content">
                        <span className="stat-value">{Math.round(overallProgress)}%</span>
                        <span className="stat-label">Overall Progress</span>
                    </div>
                    <div className="stat-bar">
                        <div className="stat-bar-fill" style={{ width: `${overallProgress}%` }}></div>
                    </div>
                </div>

                <div className="stat-card glass-card stagger-item">
                    <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>✅</div>
                    <div className="stat-content">
                        <span className="stat-value">{questionStats.mastered}</span>
                        <span className="stat-label">Questions Mastered</span>
                    </div>
                    <div className="stat-bar progress-bar--success">
                        <div className="stat-bar-fill" style={{ width: `${questionStats.percentage}%`, background: 'var(--gradient-success)' }}></div>
                    </div>
                </div>

                <div className="stat-card glass-card stagger-item">
                    <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}>🚀</div>
                    <div className="stat-content">
                        <span className="stat-value">{completedProjectMilestones}/{totalProjectMilestones}</span>
                        <span className="stat-label">Project Milestones</span>
                    </div>
                    <div className="stat-bar">
                        <div className="stat-bar-fill" style={{ width: `${(completedProjectMilestones / totalProjectMilestones) * 100}%`, background: 'var(--gradient-warm)' }}></div>
                    </div>
                </div>

                <div className="stat-card glass-card stagger-item">
                    <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>📚</div>
                    <div className="stat-content">
                        <span className="stat-value">{getTotalQuestions()}</span>
                        <span className="stat-label">Total Questions</span>
                    </div>
                    <div className="stat-sublabel">{projects.length} Projects to Build</div>
                </div>
            </div>

            {/* Quick Actions */}
            <section className="dashboard-section">
                <div className="section-header">
                    <h2 className="section-title"><span className="icon">⚡</span> Quick Actions</h2>
                </div>
                <div className="quick-actions">
                    <Link to="/questions" className="action-card glass-card">
                        <span className="action-icon">❓</span>
                        <div className="action-content">
                            <h3>Practice Questions</h3>
                            <p>500 interview questions across 5 blocks</p>
                        </div>
                        <span className="action-arrow">→</span>
                    </Link>
                    <Link to="/projects" className="action-card glass-card">
                        <span className="action-icon">🔨</span>
                        <div className="action-content">
                            <h3>Build Projects</h3>
                            <p>PROBE CLI, Search Engine, Flowchart, Mini-S3</p>
                        </div>
                        <span className="action-arrow">→</span>
                    </Link>
                    <Link to="/topics" className="action-card glass-card">
                        <span className="action-icon">📖</span>
                        <div className="action-content">
                            <h3>Study Topics</h3>
                            <p>DSA, OOP, DBMS, OS, CN, Web Dev</p>
                        </div>
                        <span className="action-arrow">→</span>
                    </Link>
                </div>
            </section>

            {/* Question Blocks Overview */}
            <section className="dashboard-section">
                <div className="section-header">
                    <h2 className="section-title"><span className="icon">📝</span> Question Blocks</h2>
                    <Link to="/questions" className="btn btn--ghost">View All →</Link>
                </div>
                <div className="blocks-grid">
                    {questionBlocks.map((block, index) => (
                        <Link
                            to="/questions"
                            key={block.id}
                            className="block-card glass-card stagger-item"
                            style={{ '--block-color': block.color }}
                        >
                            <div className="block-icon">{block.icon}</div>
                            <div className="block-info">
                                <h3>{block.title}</h3>
                                <p>{block.categories.reduce((sum, cat) => sum + cat.questions.length, 0)} questions</p>
                            </div>
                            <div className="block-badge" style={{ background: block.color }}>
                                Block {index + 1}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Projects Overview */}
            <section className="dashboard-section">
                <div className="section-header">
                    <h2 className="section-title"><span className="icon">🚀</span> Portfolio Projects</h2>
                    <Link to="/projects" className="btn btn--ghost">View All →</Link>
                </div>
                <div className="projects-grid">
                    {projectStats.map((project) => (
                        <Link
                            to="/projects"
                            key={project.id}
                            className="project-card glass-card stagger-item"
                        >
                            <div className="project-header">
                                <span className="project-icon" style={{ background: project.color }}>{project.icon}</span>
                                <div className="project-title">
                                    <h3>{project.title}</h3>
                                    <p>{project.techStack.join(' • ')}</p>
                                </div>
                            </div>
                            <div className="project-progress">
                                <div className="progress-bar">
                                    <div
                                        className="progress-bar__fill"
                                        style={{ width: `${project.stats.percentage}%`, background: project.color }}
                                    ></div>
                                </div>
                                <span className="progress-text">{project.stats.completed}/{getTotalMilestones(project.id)} milestones</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Topics Overview */}
            <section className="dashboard-section">
                <div className="section-header">
                    <h2 className="section-title"><span className="icon">📚</span> Core Topics</h2>
                    <Link to="/topics" className="btn btn--ghost">View All →</Link>
                </div>
                <div className="topics-chips">
                    {topics.map((topic) => (
                        <Link
                            to="/topics"
                            key={topic.id}
                            className="topic-chip"
                            style={{ '--topic-color': topic.color }}
                        >
                            <span className="topic-icon">{topic.icon}</span>
                            <span>{topic.title}</span>
                            <span className="topic-count">{topic.subtopics.length}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Goal Reminder */}
            <div className="goal-reminder glass-card glass-card--accent">
                <div className="goal-content">
                    <h3>🎯 Your Goal</h3>
                    <p className="goal-text">Crack a <strong>10+ LPA off-campus fresher job</strong></p>
                    <p className="goal-subtext">Master DSA, build killer projects, ace interviews</p>
                </div>
                <div className="goal-decoration">
                    <span className="money-emoji">💰</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
