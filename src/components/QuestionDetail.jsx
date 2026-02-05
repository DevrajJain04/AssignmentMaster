import { useState, useEffect } from 'react'
import VoiceAnswer from './VoiceAnswer'
import { evaluateAnswer, hasApiKey } from '../utils/groqService'
import { ResourceFinderInline } from './ResourceFinder'
import { saveAnswerAttempt, getQuestionHistory } from '../utils/answerHistory'
import './QuestionDetail.css'

function QuestionDetail({ question, onClose, onMastered, isMastered }) {
    const [mode, setMode] = useState('view') // view, voice, text, evaluating, feedback, history
    const [textAnswer, setTextAnswer] = useState('')
    const [transcription, setTranscription] = useState('')
    const [feedback, setFeedback] = useState(null)
    const [error, setError] = useState(null)
    const [savedHistory, setSavedHistory] = useState(null)

    const hasDescription = question.description && question.keyPoints
    const canUseVoice = hasApiKey() && hasDescription

    // Load saved history on mount
    useEffect(() => {
        const history = getQuestionHistory(question.id)
        setSavedHistory(history)
    }, [question.id])

    const handleTranscription = (text) => {
        setTranscription(text)
        evaluateUserAnswer(text)
    }

    const handleTextSubmit = () => {
        if (textAnswer.trim()) {
            setTranscription(textAnswer)
            evaluateUserAnswer(textAnswer)
        }
    }

    const evaluateUserAnswer = async (answer) => {
        if (!hasDescription) {
            setError('This question does not have AI evaluation enabled yet.')
            return
        }

        setMode('evaluating')
        setError(null)

        try {
            const result = await evaluateAnswer(
                question.text,
                question.description,
                answer,
                question.keyPoints
            )

            // Save to history
            const updatedHistory = saveAnswerAttempt(question.id, {
                userAnswer: answer,
                score: result.score,
                verdict: result.verdict,
                feedback: result.feedback,
                missedPoints: result.missedPoints,
                modelAnswer: result.modelAnswer
            })
            setSavedHistory(updatedHistory)

            setFeedback(result)
            setMode('feedback')
        } catch (err) {
            setError(err.message)
            setMode('view')
        }
    }

    const getVerdictColor = (verdict) => {
        switch (verdict) {
            case 'correct': return '#10b981'
            case 'partial': return '#f59e0b'
            case 'incorrect': return '#ef4444'
            default: return '#8b5cf6'
        }
    }

    const getVerdictIcon = (verdict) => {
        switch (verdict) {
            case 'correct': return '✅'
            case 'partial': return '⚠️'
            case 'incorrect': return '❌'
            default: return '🤔'
        }
    }

    const formatDate = (timestamp) => {
        return new Date(timestamp).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <div className="question-detail-overlay" onClick={onClose}>
            <div className="question-detail-modal" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>✕</button>

                {/* Question Header */}
                <div className="question-header">
                    <span className="question-id">Question #{question.id}</span>
                    <div className="header-badges">
                        {savedHistory && (
                            <span className={`history-badge score-${savedHistory.bestScore >= 70 ? 'good' : savedHistory.bestScore >= 40 ? 'partial' : 'low'}`}>
                                Best: {savedHistory.bestScore}/100
                            </span>
                        )}
                        <span className={`mastery-badge ${isMastered ? 'mastered' : ''}`}>
                            {isMastered ? '✅ Mastered' : '📝 Not Mastered'}
                        </span>
                    </div>
                </div>

                {/* Question Text */}
                <h2 className="question-text">{question.text}</h2>

                {/* Interviewer Context */}
                {question.description && (
                    <div className="interviewer-context">
                        <span className="context-label">🎤 How an interviewer would ask:</span>
                        <p>{question.description}</p>
                    </div>
                )}

                {/* Saved Model Answer - Quick Revision */}
                {savedHistory?.modelAnswer && mode === 'view' && (
                    <div className="saved-revision">
                        <div className="revision-header">
                            <span className="revision-label">📚 Saved Model Answer (Quick Revision)</span>
                            <button
                                className="toggle-history-btn"
                                onClick={() => setMode(mode === 'history' ? 'view' : 'history')}
                            >
                                {savedHistory.attempts?.length || 0} past attempts
                            </button>
                        </div>
                        <p className="saved-model-answer">{savedHistory.modelAnswer}</p>
                    </div>
                )}

                {/* Past Attempts History */}
                {mode === 'history' && savedHistory?.attempts && (
                    <div className="attempts-history">
                        <div className="history-header">
                            <span>📊 Your Past Attempts</span>
                            <button className="back-btn" onClick={() => setMode('view')}>← Back</button>
                        </div>
                        {savedHistory.attempts.map((attempt, i) => (
                            <div key={i} className={`attempt-card ${attempt.verdict}`}>
                                <div className="attempt-meta">
                                    <span className="attempt-date">{formatDate(attempt.timestamp)}</span>
                                    <span className="attempt-score" style={{ color: getVerdictColor(attempt.verdict) }}>
                                        {getVerdictIcon(attempt.verdict)} {attempt.score}/100
                                    </span>
                                </div>
                                <p className="attempt-answer">"{attempt.userAnswer}"</p>
                                <p className="attempt-feedback">{attempt.feedback}</p>
                                {attempt.missedPoints?.length > 0 && (
                                    <ul className="attempt-missed">
                                        {attempt.missedPoints.map((point, j) => (
                                            <li key={j}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Key Points (hidden until feedback) */}
                {question.keyPoints && mode === 'feedback' && (
                    <div className="key-points">
                        <span className="points-label">Expected Key Points:</span>
                        <ul>
                            {question.keyPoints.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Resources */}
                {mode !== 'history' && (
                    <div className="question-resources">
                        <span className="resources-label">Find Resources:</span>
                        <ResourceFinderInline text={question.text} context={question.categoryId} />
                    </div>
                )}

                {/* Answer Section */}
                <div className="answer-section">
                    {mode === 'view' && (
                        <>
                            {!hasApiKey() && (
                                <div className="api-key-prompt">
                                    <p>🔑 Add your Groq API key in Settings to enable voice answers</p>
                                    <a href="https://console.groq.com" target="_blank" rel="noopener noreferrer">
                                        Get free API key →
                                    </a>
                                </div>
                            )}

                            {!hasDescription && (
                                <div className="no-desc-notice">
                                    <p>📝 AI evaluation coming soon for this question</p>
                                </div>
                            )}

                            <div className="answer-options">
                                {canUseVoice && (
                                    <button className="answer-btn voice-btn" onClick={() => setMode('voice')}>
                                        🎤 Answer with Voice
                                    </button>
                                )}
                                {hasDescription && hasApiKey() && (
                                    <button className="answer-btn text-btn" onClick={() => setMode('text')}>
                                        ⌨️ Type Answer
                                    </button>
                                )}
                                {savedHistory?.attempts?.length > 0 && (
                                    <button className="answer-btn history-btn" onClick={() => setMode('history')}>
                                        📊 View History
                                    </button>
                                )}
                                <button
                                    className={`answer-btn mastery-btn ${isMastered ? 'unmaster' : ''}`}
                                    onClick={onMastered}
                                >
                                    {isMastered ? '↩️ Unmark Mastered' : '✅ Mark as Mastered'}
                                </button>
                            </div>
                        </>
                    )}

                    {mode === 'voice' && (
                        <VoiceAnswer
                            onTranscription={handleTranscription}
                            onCancel={() => setMode('view')}
                        />
                    )}

                    {mode === 'text' && (
                        <div className="text-answer-form">
                            <textarea
                                value={textAnswer}
                                onChange={(e) => setTextAnswer(e.target.value)}
                                placeholder="Type your answer here..."
                                rows={5}
                            />
                            <div className="text-answer-actions">
                                <button className="submit-btn" onClick={handleTextSubmit} disabled={!textAnswer.trim()}>
                                    Submit for Evaluation
                                </button>
                                <button className="cancel-btn" onClick={() => setMode('view')}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}

                    {mode === 'evaluating' && (
                        <div className="evaluating">
                            <div className="spinner"></div>
                            <p>AI is evaluating your answer...</p>
                        </div>
                    )}

                    {mode === 'feedback' && feedback && (
                        <div className="feedback-section">
                            {/* Score & Verdict */}
                            <div className="feedback-header" style={{ borderColor: getVerdictColor(feedback.verdict) }}>
                                <span className="verdict-icon">{getVerdictIcon(feedback.verdict)}</span>
                                <div className="verdict-details">
                                    <span className="verdict-text" style={{ color: getVerdictColor(feedback.verdict) }}>
                                        {feedback.verdict.charAt(0).toUpperCase() + feedback.verdict.slice(1)}
                                    </span>
                                    <span className="score">{feedback.score}/100</span>
                                </div>
                            </div>

                            {/* Your Answer */}
                            {transcription && (
                                <div className="your-answer">
                                    <span className="label">Your Answer:</span>
                                    <p>"{transcription}"</p>
                                </div>
                            )}

                            {/* Feedback */}
                            <div className="ai-feedback">
                                <span className="label">AI Feedback:</span>
                                <p>{feedback.feedback}</p>
                            </div>

                            {/* Missed Points */}
                            {feedback.missedPoints?.length > 0 && (
                                <div className="missed-points">
                                    <span className="label">Points to improve:</span>
                                    <ul>
                                        {feedback.missedPoints.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Model Answer */}
                            <div className="model-answer">
                                <span className="label">💡 Ideal Answer (Saved for Revision):</span>
                                <p>{feedback.modelAnswer}</p>
                            </div>

                            {/* Saved Confirmation */}
                            <div className="saved-notice">
                                ✅ This feedback has been saved for quick revision later
                            </div>

                            {/* Actions */}
                            <div className="feedback-actions">
                                <button className="try-again-btn" onClick={() => { setMode('view'); setFeedback(null); setTranscription(''); setTextAnswer(''); }}>
                                    Try Again
                                </button>
                                {!isMastered && feedback.verdict === 'correct' && (
                                    <button className="mark-mastered-btn" onClick={onMastered}>
                                        ✅ Mark as Mastered
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className="error-message">
                            <p>⚠️ {error}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default QuestionDetail
