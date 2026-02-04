// AI-powered resource finder using free search APIs
// Generates smart search queries and fetches learning resources

// Generate a smart search query based on question/topic
export function generateSearchQuery(text, context = '') {
    // Clean up the question text
    let query = text
        .replace(/\?/g, '')
        .replace(/['"]/g, '')
        .trim()

    // Add context for better results
    const contextMap = {
        python: 'Python programming',
        cpp: 'C++ programming',
        javascript: 'JavaScript web development',
        sql: 'SQL database',
        react: 'React.js',
        flutter: 'Flutter Dart',
        backend: 'backend development',
        security: 'web security',
        ai: 'AI machine learning',
        docker: 'Docker containers',
        aws: 'AWS cloud',
        terraform: 'Terraform infrastructure',
        systemdesign: 'system design interview',
        behavioral: 'software engineering interview',
    }

    const contextPrefix = contextMap[context.toLowerCase()] || context

    // Create search-optimized query
    return `${contextPrefix} ${query} tutorial guide explanation`.trim()
}

// Search providers (all free)
export const searchProviders = {
    duckduckgo: {
        name: 'DuckDuckGo',
        icon: '🦆',
        getUrl: (query) => `https://duckduckgo.com/?q=${encodeURIComponent(query)}`,
    },
    google: {
        name: 'Google',
        icon: '🔍',
        getUrl: (query) => `https://www.google.com/search?q=${encodeURIComponent(query)}`,
    },
    youtube: {
        name: 'YouTube',
        icon: '📺',
        getUrl: (query) => `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
    },
    stackoverflow: {
        name: 'Stack Overflow',
        icon: '📚',
        getUrl: (query) => `https://stackoverflow.com/search?q=${encodeURIComponent(query)}`,
    },
    github: {
        name: 'GitHub',
        icon: '🐙',
        getUrl: (query) => `https://github.com/search?q=${encodeURIComponent(query)}&type=repositories`,
    },
    devto: {
        name: 'Dev.to',
        icon: '👨‍💻',
        getUrl: (query) => `https://dev.to/search?q=${encodeURIComponent(query)}`,
    },
    mdn: {
        name: 'MDN Docs',
        icon: '📖',
        getUrl: (query) => `https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(query)}`,
    },
}

// Get best search providers based on topic
export function getRecommendedProviders(context) {
    const contextLower = context?.toLowerCase() || ''

    // Default providers
    const defaults = ['youtube', 'google', 'stackoverflow']

    // Context-specific recommendations
    if (['python', 'javascript', 'cpp', 'sql'].includes(contextLower)) {
        return ['youtube', 'stackoverflow', 'google', 'devto']
    }
    if (['react', 'flutter'].includes(contextLower)) {
        return ['youtube', 'stackoverflow', 'github', 'devto']
    }
    if (contextLower === 'javascript' || contextLower === 'webperf') {
        return ['youtube', 'mdn', 'stackoverflow', 'devto']
    }
    if (['docker', 'aws', 'terraform'].includes(contextLower)) {
        return ['youtube', 'google', 'stackoverflow', 'devto']
    }
    if (contextLower === 'systemdesign') {
        return ['youtube', 'github', 'google', 'devto']
    }

    return defaults
}

// Open search in new tab
export function openSearch(query, provider = 'google') {
    const searchProvider = searchProviders[provider] || searchProviders.google
    const url = searchProvider.getUrl(query)
    window.open(url, '_blank', 'noopener,noreferrer')
}

// Generate resource links for a question
export function getResourceLinks(questionText, categoryId) {
    const query = generateSearchQuery(questionText, categoryId)
    const providers = getRecommendedProviders(categoryId)

    return providers.map(providerId => ({
        ...searchProviders[providerId],
        providerId,
        url: searchProviders[providerId].getUrl(query),
        query,
    }))
}

// Specific resource generators for common topics
export const topicResources = {
    // DSA topics
    'arrays': 'arrays data structures algorithm',
    'linkedlist': 'linked list implementation',
    'trees': 'binary tree traversal',
    'graphs': 'graph algorithms BFS DFS',
    'dp': 'dynamic programming tutorial',

    // System concepts
    'concurrency': 'concurrency multithreading programming',
    'deadlock': 'deadlock prevention detection',
    'racecondition': 'race condition synchronization',

    // Project related
    'cli': 'command line interface Go Cobra',
    'webcrawler': 'web crawler Go concurrency',
    'searchengine': 'search engine inverted index',
    'objectstorage': 'distributed object storage S3',
}

// Generate project milestone resource query
export function getMilestoneResourceQuery(milestoneText, projectTech = []) {
    const techContext = projectTech.join(' ')
    return generateSearchQuery(milestoneText, techContext)
}
