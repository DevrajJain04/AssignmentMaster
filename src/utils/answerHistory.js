// Answer History Storage - Stores AI feedback for revision
// Persists partial/wrong answers with model answers for quick review

const STORAGE_KEY = 'assignment_master_answer_history'

// Get all answer history
export function getAnswerHistory() {
    try {
        const data = localStorage.getItem(STORAGE_KEY)
        return data ? JSON.parse(data) : {}
    } catch {
        return {}
    }
}

// Get history for a specific question
export function getQuestionHistory(questionId) {
    const history = getAnswerHistory()
    return history[questionId] || null
}

// Save answer attempt with feedback
export function saveAnswerAttempt(questionId, attempt) {
    const history = getAnswerHistory()

    if (!history[questionId]) {
        history[questionId] = {
            attempts: [],
            bestScore: 0,
            lastAttempt: null,
            modelAnswer: null
        }
    }

    const entry = history[questionId]

    // Add attempt to history (keep last 5)
    entry.attempts.unshift({
        timestamp: Date.now(),
        userAnswer: attempt.userAnswer,
        score: attempt.score,
        verdict: attempt.verdict,
        feedback: attempt.feedback,
        missedPoints: attempt.missedPoints
    })

    if (entry.attempts.length > 5) {
        entry.attempts = entry.attempts.slice(0, 5)
    }

    // Update best score
    if (attempt.score > entry.bestScore) {
        entry.bestScore = attempt.score
    }

    // Always save the latest model answer
    if (attempt.modelAnswer) {
        entry.modelAnswer = attempt.modelAnswer
    }

    entry.lastAttempt = Date.now()

    localStorage.setItem(STORAGE_KEY, JSON.stringify(history))

    return entry
}

// Get questions that need revision (partial or incorrect)
export function getQuestionsNeedingRevision() {
    const history = getAnswerHistory()
    const needsRevision = []

    for (const [questionId, data] of Object.entries(history)) {
        const lastAttempt = data.attempts[0]
        if (lastAttempt && lastAttempt.verdict !== 'correct') {
            needsRevision.push({
                questionId: parseInt(questionId),
                ...data
            })
        }
    }

    return needsRevision.sort((a, b) => b.lastAttempt - a.lastAttempt)
}

// Get all saved model answers for quick revision
export function getSavedModelAnswers() {
    const history = getAnswerHistory()
    const answers = []

    for (const [questionId, data] of Object.entries(history)) {
        if (data.modelAnswer) {
            answers.push({
                questionId: parseInt(questionId),
                modelAnswer: data.modelAnswer,
                bestScore: data.bestScore,
                lastAttempt: data.lastAttempt
            })
        }
    }

    return answers.sort((a, b) => b.lastAttempt - a.lastAttempt)
}

// Clear history for a specific question
export function clearQuestionHistory(questionId) {
    const history = getAnswerHistory()
    delete history[questionId]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
}

// Clear all history
export function clearAllHistory() {
    localStorage.removeItem(STORAGE_KEY)
}
