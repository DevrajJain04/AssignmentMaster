import { useState, useRef, useEffect } from 'react'
import { getResourceLinks, searchProviders, generateSearchQuery } from '../utils/resourceFinder'
import './ResourceFinder.css'

function ResourceFinder({ questionText, categoryId, milestoneText, projectTech, onClose }) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    const text = questionText || milestoneText || ''
    const context = categoryId || (projectTech?.join(' ') || '')

    const resources = getResourceLinks(text, context)

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleOpen = (e) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    return (
        <div className="resource-finder" ref={dropdownRef}>
            <button
                className="resource-finder__trigger"
                onClick={handleOpen}
                title="Find learning resources"
            >
                <span className="icon">🔍</span>
                <span className="label">Learn</span>
            </button>

            {isOpen && (
                <div className="resource-finder__dropdown">
                    <div className="dropdown-header">
                        <span className="header-icon">📚</span>
                        <span className="header-title">Find Resources</span>
                    </div>

                    <div className="dropdown-search-query">
                        <span className="query-label">Searching for:</span>
                        <span className="query-text">"{text}"</span>
                    </div>

                    <div className="dropdown-providers">
                        {resources.map(resource => (
                            <a
                                key={resource.providerId}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="provider-link"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span className="provider-icon">{resource.icon}</span>
                                <span className="provider-name">{resource.name}</span>
                                <span className="provider-arrow">→</span>
                            </a>
                        ))}
                    </div>

                    <div className="dropdown-footer">
                        <span className="footer-tip">💡 YouTube often has the best explanations!</span>
                    </div>
                </div>
            )}
        </div>
    )
}

// Inline version for list items
export function ResourceFinderInline({ text, context }) {
    const query = generateSearchQuery(text, context)

    const quickLinks = [
        { id: 'youtube', icon: '📺', name: 'Video', url: searchProviders.youtube.getUrl(query) },
        { id: 'google', icon: '🔍', name: 'Search', url: searchProviders.google.getUrl(query) },
        { id: 'stackoverflow', icon: '📚', name: 'SO', url: searchProviders.stackoverflow.getUrl(query) },
    ]

    return (
        <div className="resource-finder-inline">
            {quickLinks.map(link => (
                <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-link"
                    title={`Find on ${link.name}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    )
}

export default ResourceFinder
