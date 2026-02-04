import { NavLink, useLocation } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import './Sidebar.css'

function Sidebar() {
    const location = useLocation()
    const { getOverallProgress, getStreak } = useProgress()
    const progress = getOverallProgress()
    const streak = getStreak()

    const navItems = [
        { path: '/', icon: '🏠', label: 'Dashboard' },
        { path: '/questions', icon: '❓', label: '500 Questions' },
        { path: '/projects', icon: '🚀', label: 'Projects' },
        { path: '/topics', icon: '📚', label: 'Topics' },
    ]

    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__logo">
                    <span className="logo-icon">🎯</span>
                    <div className="logo-text">
                        <span className="logo-title">AssignmentMaster</span>
                        <span className="logo-subtitle">Crack that 10+ LPA</span>
                    </div>
                </div>
            </div>

            <div className="sidebar__progress">
                <div className="progress-overview">
                    <div className="progress-circle-wrapper">
                        <svg className="progress-ring" width="80" height="80">
                            <defs>
                                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#8b5cf6" />
                                    <stop offset="100%" stopColor="#06b6d4" />
                                </linearGradient>
                            </defs>
                            <circle
                                className="progress-ring__bg"
                                stroke="rgba(255,255,255,0.1)"
                                strokeWidth="6"
                                fill="transparent"
                                r="34"
                                cx="40"
                                cy="40"
                            />
                            <circle
                                className="progress-ring__fill"
                                stroke="url(#progressGradient)"
                                strokeWidth="6"
                                strokeLinecap="round"
                                fill="transparent"
                                r="34"
                                cx="40"
                                cy="40"
                                style={{
                                    strokeDasharray: `${2 * Math.PI * 34}`,
                                    strokeDashoffset: `${2 * Math.PI * 34 * (1 - progress / 100)}`,
                                }}
                            />
                        </svg>
                        <span className="progress-value">{Math.round(progress)}%</span>
                    </div>
                    <div className="progress-info">
                        <span className="progress-label">Overall Progress</span>
                        {streak > 0 && (
                            <span className="streak-badge">
                                <span className="fire">🔥</span> {streak} day streak
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <nav className="sidebar__nav">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `nav-item ${isActive ? 'active' : ''}`
                        }
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar__footer">
                <div className="motivation-quote">
                    <span className="quote-icon">💪</span>
                    <p>"You're one commit away from greatness"</p>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
