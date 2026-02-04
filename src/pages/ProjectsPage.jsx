import { useState } from 'react'
import { useProgress } from '../hooks/useProgress'
import { projects, getTotalMilestones } from '../data/projects'
import { ResourceFinderInline } from '../components/ResourceFinder'
import './ProjectsPage.css'

function ProjectsPage() {
    const { toggleMilestone, getMilestoneStatus, getProjectStats } = useProgress()
    const [selectedProject, setSelectedProject] = useState(null)

    const currentProject = projects.find(p => p.id === selectedProject)

    return (
        <div className="projects-page">
            <header className="page-header">
                <div>
                    <h1 className="page-title">Portfolio Projects 🚀</h1>
                    <p className="page-subtitle">Build these to showcase your skills and land that 10+ LPA job</p>
                </div>
            </header>

            {/* Project Cards */}
            {!selectedProject && (
                <div className="projects-cards-grid">
                    {projects.map(project => {
                        const stats = getProjectStats(project.id, getTotalMilestones(project.id))
                        return (
                            <div
                                key={project.id}
                                className="project-main-card glass-card"
                                onClick={() => setSelectedProject(project.id)}
                                style={{ '--project-color': project.color }}
                            >
                                <div className="project-card-header">
                                    <div className="project-card-icon" style={{ background: project.color }}>
                                        {project.icon}
                                    </div>
                                    <div className="project-card-badge">
                                        {stats.percentage}%
                                    </div>
                                </div>

                                <h2>{project.title}</h2>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tech-stack">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-card-progress">
                                    <div className="progress-bar">
                                        <div
                                            className="progress-bar__fill"
                                            style={{ width: `${stats.percentage}%`, background: project.color }}
                                        ></div>
                                    </div>
                                    <span className="progress-label">{stats.completed} / {getTotalMilestones(project.id)} milestones</span>
                                </div>

                                <div className="project-resume">
                                    <span className="resume-label">📝 Resume Statement:</span>
                                    <p>{project.resumeStatement}</p>
                                </div>

                                <button className="btn btn--primary project-cta">
                                    Start Building →
                                </button>
                            </div>
                        )
                    })}
                </div>
            )}

            {/* Project Detail View */}
            {selectedProject && currentProject && (
                <div className="project-detail">
                    <button
                        className="back-button"
                        onClick={() => setSelectedProject(null)}
                    >
                        ← Back to Projects
                    </button>

                    <div className="project-detail-header glass-card" style={{ '--project-color': currentProject.color }}>
                        <div className="project-icon-large" style={{ background: currentProject.color }}>
                            {currentProject.icon}
                        </div>
                        <div className="project-detail-info">
                            <h2>{currentProject.title}</h2>
                            <p>{currentProject.description}</p>
                            <div className="project-tech-stack">
                                {currentProject.techStack.map(tech => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="project-detail-progress">
                            {(() => {
                                const stats = getProjectStats(currentProject.id, getTotalMilestones(currentProject.id))
                                return (
                                    <>
                                        <div className="progress-circle-large">
                                            <svg width="100" height="100">
                                                <circle
                                                    cx="50" cy="50" r="45"
                                                    fill="none"
                                                    stroke="rgba(255,255,255,0.1)"
                                                    strokeWidth="8"
                                                />
                                                <circle
                                                    cx="50" cy="50" r="45"
                                                    fill="none"
                                                    stroke={currentProject.color}
                                                    strokeWidth="8"
                                                    strokeLinecap="round"
                                                    strokeDasharray={`${2 * Math.PI * 45}`}
                                                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - stats.percentage / 100)}`}
                                                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                                                />
                                            </svg>
                                            <span className="progress-value-large">{stats.percentage}%</span>
                                        </div>
                                        <span className="progress-text">{stats.completed}/{getTotalMilestones(currentProject.id)}</span>
                                    </>
                                )
                            })()}
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="project-resources glass-card">
                        <h3>📚 Resources</h3>
                        <div className="resources-list">
                            {currentProject.resources.map((res, i) => (
                                <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="resource-card">
                                    <span className="resource-icon">🔗</span>
                                    <span>{res.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Phases */}
                    <div className="phases-list">
                        {currentProject.phases.map(phase => {
                            const phaseCompleted = phase.milestones.filter(m =>
                                getMilestoneStatus(currentProject.id, m.id)
                            ).length
                            return (
                                <div key={phase.id} className="phase-card glass-card">
                                    <div className="phase-header">
                                        <h3>{phase.title}</h3>
                                        <span className="phase-progress">
                                            {phaseCompleted}/{phase.milestones.length} completed
                                        </span>
                                    </div>
                                    <div className="milestones-list">
                                        {phase.milestones.map(milestone => {
                                            const isComplete = getMilestoneStatus(currentProject.id, milestone.id)
                                            return (
                                                <div
                                                    key={milestone.id}
                                                    className={`milestone-item ${isComplete ? 'completed' : ''}`}
                                                    onClick={() => toggleMilestone(currentProject.id, milestone.id)}
                                                >
                                                    <div className={`checkbox ${isComplete ? 'checked' : ''}`}>
                                                        {isComplete && '✓'}
                                                    </div>
                                                    <span className="milestone-text">{milestone.text}</span>
                                                    <ResourceFinderInline text={milestone.text} context={currentProject.techStack.join(' ')} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Resume Statement */}
                    <div className="resume-statement-card glass-card glass-card--accent">
                        <h3>📝 Add to Your Resume</h3>
                        <p className="resume-text">{currentProject.resumeStatement}</p>
                        <button
                            className="btn btn--secondary"
                            onClick={() => navigator.clipboard.writeText(currentProject.resumeStatement)}
                        >
                            Copy to Clipboard 📋
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectsPage
