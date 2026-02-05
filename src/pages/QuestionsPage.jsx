import { useState, useMemo } from 'react'
import { useProgress } from '../hooks/useProgress'
import { questionBlocks, getAllQuestions } from '../data/questions'
import { ResourceFinderInline } from '../components/ResourceFinder'
import QuestionDetail from '../components/QuestionDetail'
import './QuestionsPage.css'

function QuestionsPage() {
    const { toggleQuestion, getQuestionStatus, getQuestionsStats } = useProgress()
    const [selectedBlock, setSelectedBlock] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [filterStatus, setFilterStatus] = useState('all')
    const [selectedQuestion, setSelectedQuestion] = useState(null)

    const allQuestions = useMemo(() => getAllQuestions(), [])

    const stats = getQuestionsStats(allQuestions.length)

    const filteredQuestions = useMemo(() => {
        let questions = allQuestions

        if (selectedBlock) {
            questions = questions.filter(q => q.blockId === selectedBlock)
        }
        if (selectedCategory) {
            questions = questions.filter(q => q.categoryId === selectedCategory)
        }
        if (searchQuery) {
            questions = questions.filter(q =>
                q.text.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }
        if (filterStatus !== 'all') {
            questions = questions.filter(q => getQuestionStatus(q.id) === filterStatus)
        }

        return questions
    }, [allQuestions, selectedBlock, selectedCategory, searchQuery, filterStatus, getQuestionStatus])

    const currentBlock = questionBlocks.find(b => b.id === selectedBlock)
    const currentCategory = currentBlock?.categories.find(c => c.id === selectedCategory)

    return (
        <div className="questions-page">
            <header className="page-header">
                <div>
                    <h1 className="page-title">500 Interview Questions 📝</h1>
                    <p className="page-subtitle">Master these to crack any SDE interview</p>
                </div>
                <div className="header-stats">
                    <div className="stat-pill stat-pill--success">
                        <span className="stat-icon">✅</span>
                        <span>{stats.mastered} Mastered</span>
                    </div>
                    <div className="stat-pill">
                        <span className="stat-icon">📊</span>
                        <span>{stats.percentage}% Complete</span>
                    </div>
                </div>
            </header>

            {/* Search and Filter */}
            <div className="search-filter-bar">
                <div className="search-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search questions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="filter-tabs">
                    {[
                        { id: 'all', label: 'All' },
                        { id: 'not_started', label: 'Not Started' },
                        { id: 'mastered', label: 'Mastered' },
                    ].map(filter => (
                        <button
                            key={filter.id}
                            className={`filter-tab ${filterStatus === filter.id ? 'active' : ''}`}
                            onClick={() => setFilterStatus(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Breadcrumb */}
            {(selectedBlock || selectedCategory) && (
                <div className="breadcrumb">
                    <button onClick={() => { setSelectedBlock(null); setSelectedCategory(null); }}>
                        All Blocks
                    </button>
                    {selectedBlock && (
                        <>
                            <span className="breadcrumb-sep">→</span>
                            <button onClick={() => setSelectedCategory(null)}>
                                {currentBlock?.title}
                            </button>
                        </>
                    )}
                    {selectedCategory && (
                        <>
                            <span className="breadcrumb-sep">→</span>
                            <span className="breadcrumb-current">{currentCategory?.title}</span>
                        </>
                    )}
                </div>
            )}

            {/* Block Selection */}
            {!selectedBlock && !searchQuery && (
                <div className="blocks-selection">
                    {questionBlocks.map((block, index) => (
                        <div
                            key={block.id}
                            className="block-selection-card glass-card"
                            onClick={() => setSelectedBlock(block.id)}
                            style={{ '--block-color': block.color }}
                        >
                            <div className="block-number">Block {index + 1}</div>
                            <div className="block-sel-icon">{block.icon}</div>
                            <h3>{block.title}</h3>
                            <p>{block.description}</p>
                            <div className="block-meta">
                                <span>{block.categories.length} categories</span>
                                <span>{block.categories.reduce((sum, c) => sum + c.questions.length, 0)} questions</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Category Selection */}
            {selectedBlock && !selectedCategory && !searchQuery && (
                <div className="categories-grid">
                    {currentBlock?.categories.map(category => {
                        const catQuestions = allQuestions.filter(q => q.categoryId === category.id)
                        const masteredCount = catQuestions.filter(q => getQuestionStatus(q.id) === 'mastered').length
                        return (
                            <div
                                key={category.id}
                                className="category-card glass-card"
                                onClick={() => setSelectedCategory(category.id)}
                                style={{ '--cat-color': category.color }}
                            >
                                <div className="category-icon">{category.icon}</div>
                                <h3>{category.title}</h3>
                                <div className="category-progress">
                                    <div className="progress-bar">
                                        <div
                                            className="progress-bar__fill"
                                            style={{ width: `${(masteredCount / category.questions.length) * 100}%`, background: category.color }}
                                        ></div>
                                    </div>
                                    <span>{masteredCount}/{category.questions.length}</span>
                                </div>
                                {category.resources && (
                                    <div className="category-resources">
                                        {category.resources.map((res, i) => (
                                            <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="resource-link" onClick={e => e.stopPropagation()}>
                                                📚 {res.title}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}

            {/* Questions List */}
            {(selectedCategory || searchQuery) && (
                <div className="questions-list">
                    {filteredQuestions.length === 0 ? (
                        <div className="empty-state">
                            <span className="icon">🔍</span>
                            <p>No questions found</p>
                        </div>
                    ) : (
                        filteredQuestions.map(question => {
                            const status = getQuestionStatus(question.id)
                            return (
                                <div
                                    key={question.id}
                                    className={`question-item glass-card ${status}`}
                                    onClick={() => setSelectedQuestion(question)}
                                >
                                    <div
                                        className={`checkbox ${status === 'mastered' ? 'checked' : ''}`}
                                        onClick={(e) => { e.stopPropagation(); toggleQuestion(question.id) }}
                                    >
                                        {status === 'mastered' && '✓'}
                                    </div>
                                    <div className="question-content">
                                        <span className="question-number">Q{question.id}</span>
                                        <span className="question-text">{question.text}</span>
                                        {question.description && (
                                            <span className="has-ai-badge">🎤 AI</span>
                                        )}
                                    </div>
                                    <ResourceFinderInline text={question.text} context={question.categoryId} />
                                    <div className="question-meta">
                                        <span className="question-category" style={{ background: `rgba(139, 92, 246, 0.2)` }}>
                                            {question.categoryTitle}
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
            )}

            {/* Progress Summary */}
            <div className="progress-summary glass-card">
                <div className="summary-item">
                    <span className="summary-value">{stats.mastered}</span>
                    <span className="summary-label">Mastered</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-item">
                    <span className="summary-value">{stats.notStarted}</span>
                    <span className="summary-label">Remaining</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-item">
                    <span className="summary-value">{stats.percentage}%</span>
                    <span className="summary-label">Complete</span>
                </div>
            </div>

            {/* Question Detail Modal */}
            {selectedQuestion && (
                <QuestionDetail
                    question={selectedQuestion}
                    onClose={() => setSelectedQuestion(null)}
                    onMastered={() => toggleQuestion(selectedQuestion.id)}
                    isMastered={getQuestionStatus(selectedQuestion.id) === 'mastered'}
                />
            )}
        </div>
    )
}

export default QuestionsPage
