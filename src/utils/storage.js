// Local storage utilities for progress persistence

const STORAGE_KEYS = {
    QUESTIONS: 'am_questions_progress',
    PROJECTS: 'am_projects_progress',
    TOPICS: 'am_topics_progress',
    STREAK: 'am_streak_data',
    LAST_VISIT: 'am_last_visit',
}

export function saveProgress(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
        console.error('Failed to save progress:', error)
    }
}

export function loadProgress(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : defaultValue
    } catch (error) {
        console.error('Failed to load progress:', error)
        return defaultValue
    }
}

export function updateStreak() {
    const today = new Date().toDateString()
    const streakData = loadProgress(STORAGE_KEYS.STREAK, { count: 0, lastDate: null })
    const lastVisit = loadProgress(STORAGE_KEYS.LAST_VISIT, null)

    if (lastVisit === today) {
        return streakData.count
    }

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = yesterday.toDateString()

    let newCount = 1
    if (streakData.lastDate === yesterdayStr) {
        newCount = streakData.count + 1
    }

    saveProgress(STORAGE_KEYS.STREAK, { count: newCount, lastDate: today })
    saveProgress(STORAGE_KEYS.LAST_VISIT, today)

    return newCount
}

export function getStreakCount() {
    const streakData = loadProgress(STORAGE_KEYS.STREAK, { count: 0, lastDate: null })
    const today = new Date().toDateString()
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = yesterday.toDateString()

    if (streakData.lastDate === today || streakData.lastDate === yesterdayStr) {
        return streakData.count
    }
    return 0
}

export { STORAGE_KEYS }
