import { useState, useEffect, useCallback } from 'react'
import { saveProgress, loadProgress, updateStreak, getStreakCount, STORAGE_KEYS } from '../utils/storage'

export function useProgress() {
    const [questionsProgress, setQuestionsProgress] = useState(() =>
        loadProgress(STORAGE_KEYS.QUESTIONS, {})
    )
    const [projectsProgress, setProjectsProgress] = useState(() =>
        loadProgress(STORAGE_KEYS.PROJECTS, {})
    )
    const [topicsProgress, setTopicsProgress] = useState(() =>
        loadProgress(STORAGE_KEYS.TOPICS, {})
    )
    const [streak, setStreak] = useState(() => getStreakCount())

    // Update streak on mount
    useEffect(() => {
        const newStreak = updateStreak()
        setStreak(newStreak)
    }, [])

    // Save questions progress
    useEffect(() => {
        saveProgress(STORAGE_KEYS.QUESTIONS, questionsProgress)
    }, [questionsProgress])

    // Save projects progress
    useEffect(() => {
        saveProgress(STORAGE_KEYS.PROJECTS, projectsProgress)
    }, [projectsProgress])

    // Save topics progress
    useEffect(() => {
        saveProgress(STORAGE_KEYS.TOPICS, topicsProgress)
    }, [topicsProgress])

    const toggleQuestion = useCallback((questionId) => {
        setQuestionsProgress(prev => ({
            ...prev,
            [questionId]: prev[questionId] === 'mastered' ? 'not_started' : 'mastered'
        }))
    }, [])

    const setQuestionStatus = useCallback((questionId, status) => {
        setQuestionsProgress(prev => ({
            ...prev,
            [questionId]: status
        }))
    }, [])

    const toggleMilestone = useCallback((projectId, milestoneId) => {
        setProjectsProgress(prev => {
            const projectData = prev[projectId] || {}
            return {
                ...prev,
                [projectId]: {
                    ...projectData,
                    [milestoneId]: !projectData[milestoneId]
                }
            }
        })
    }, [])

    const toggleTopic = useCallback((topicId, subtopicId) => {
        setTopicsProgress(prev => {
            const topicData = prev[topicId] || {}
            return {
                ...prev,
                [topicId]: {
                    ...topicData,
                    [subtopicId]: !topicData[subtopicId]
                }
            }
        })
    }, [])

    const getQuestionStatus = useCallback((questionId) => {
        return questionsProgress[questionId] || 'not_started'
    }, [questionsProgress])

    const getMilestoneStatus = useCallback((projectId, milestoneId) => {
        return projectsProgress[projectId]?.[milestoneId] || false
    }, [projectsProgress])

    const getTopicStatus = useCallback((topicId, subtopicId) => {
        return topicsProgress[topicId]?.[subtopicId] || false
    }, [topicsProgress])

    const getQuestionsStats = useCallback((totalQuestions = 500) => {
        const mastered = Object.values(questionsProgress).filter(s => s === 'mastered').length
        const inProgress = Object.values(questionsProgress).filter(s => s === 'in_progress').length
        return {
            mastered,
            inProgress,
            notStarted: totalQuestions - mastered - inProgress,
            percentage: Math.round((mastered / totalQuestions) * 100)
        }
    }, [questionsProgress])

    const getProjectStats = useCallback((projectId, totalMilestones) => {
        const projectData = projectsProgress[projectId] || {}
        const completed = Object.values(projectData).filter(Boolean).length
        return {
            completed,
            total: totalMilestones,
            percentage: Math.round((completed / totalMilestones) * 100)
        }
    }, [projectsProgress])

    const getOverallProgress = useCallback(() => {
        // Calculate overall progress across questions and projects
        const questionsWeight = 0.6
        const projectsWeight = 0.4

        const questionStats = getQuestionsStats(500)

        // Estimate project progress (4 projects with varying milestones)
        const projectMilestones = { probe: 20, searchEngine: 12, flowchart: 10, miniS3: 15 }
        let totalProjectMilestones = 0
        let completedProjectMilestones = 0

        Object.entries(projectMilestones).forEach(([projectId, total]) => {
            totalProjectMilestones += total
            const projectData = projectsProgress[projectId] || {}
            completedProjectMilestones += Object.values(projectData).filter(Boolean).length
        })

        const projectPercentage = totalProjectMilestones > 0
            ? (completedProjectMilestones / totalProjectMilestones) * 100
            : 0

        return (questionStats.percentage * questionsWeight) + (projectPercentage * projectsWeight)
    }, [getQuestionsStats, projectsProgress])

    const getStreak = useCallback(() => streak, [streak])

    return {
        // Question methods
        toggleQuestion,
        setQuestionStatus,
        getQuestionStatus,
        getQuestionsStats,
        questionsProgress,

        // Project methods
        toggleMilestone,
        getMilestoneStatus,
        getProjectStats,
        projectsProgress,

        // Topic methods
        toggleTopic,
        getTopicStatus,
        topicsProgress,

        // General stats
        getOverallProgress,
        getStreak,
    }
}
