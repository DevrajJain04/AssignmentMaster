// Project milestones for all 4 portfolio projects

export const projects = [
    {
        id: 'probe',
        title: 'PROBE – API Testing CLI',
        description: 'Production-grade command-line tool for executing automated API tests using declarative YAML configuration.',
        icon: '🔬',
        color: '#8b5cf6',
        techStack: ['Go', 'YAML', 'Goroutines', 'Worker Pools'],
        resumeStatement: 'Built Probe, a production-grade API testing CLI with parallel execution, retries, environment support, and CI integration, enabling automated validation of distributed microservices.',
        resources: [
            { title: 'Go by Example', url: 'https://gobyexample.com/' },
            { title: 'Cobra CLI', url: 'https://cobra.dev/' },
            { title: 'YAML spec', url: 'https://yaml.org/spec/' },
        ],
        phases: [
            {
                id: 'v1',
                title: 'v1 – Core Engine',
                milestones: [
                    { id: 'v1-1', text: 'Set up Go project structure (cmd/probe, internal/)' },
                    { id: 'v1-2', text: 'Implement CLI skeleton with Cobra' },
                    { id: 'v1-3', text: 'Create YAML config parser' },
                    { id: 'v1-4', text: 'Implement test schema validation' },
                    { id: 'v1-5', text: 'Build HTTP client wrapper' },
                    { id: 'v1-6', text: 'Implement basic assertions (status code)' },
                    { id: 'v1-7', text: 'Add header assertions' },
                    { id: 'v1-8', text: 'Add JSON body assertions' },
                    { id: 'v1-9', text: 'Implement environment variable substitution' },
                    { id: 'v1-10', text: 'Create worker pool for parallel execution' },
                    { id: 'v1-11', text: 'Add configurable parallelism (--parallel flag)' },
                    { id: 'v1-12', text: 'Implement timeout handling with context' },
                    { id: 'v1-13', text: 'Add retry logic for failed requests' },
                    { id: 'v1-14', text: 'Create console reporter (pass/fail output)' },
                    { id: 'v1-15', text: 'Implement JSON output format' },
                    { id: 'v1-16', text: 'Add exit codes (0=pass, 1=fail, 2=config error)' },
                    { id: 'v1-17', text: 'Implement fail-fast mode' },
                    { id: 'v1-18', text: 'Add graceful cancellation (Ctrl+C)' },
                    { id: 'v1-19', text: 'Write comprehensive tests' },
                    { id: 'v1-20', text: 'Create README and usage docs' },
                ]
            },
            {
                id: 'v2',
                title: 'v2 – Professional Tooling',
                milestones: [
                    { id: 'v2-1', text: 'Implement HTML report generation' },
                    { id: 'v2-2', text: 'Add timing charts to reports' },
                    { id: 'v2-3', text: 'Create GitHub Actions integration' },
                    { id: 'v2-4', text: 'Add .env file support' },
                    { id: 'v2-5', text: 'Implement mock server for testing' },
                    { id: 'v2-6', text: 'Add JSON schema validation for YAML' },
                ]
            },
            {
                id: 'v3',
                title: 'v3 – Advanced Systems',
                milestones: [
                    { id: 'v3-1', text: 'Implement flaky test detection' },
                    { id: 'v3-2', text: 'Add plugin architecture' },
                    { id: 'v3-3', text: 'Create custom assertion plugins' },
                    { id: 'v3-4', text: 'Build distributed runner support' },
                ]
            }
        ]
    },
    {
        id: 'searchEngine',
        title: 'Vertical Search Engine',
        description: 'Show mastery of DSA, Networking, and Concurrency with a web crawler and search engine.',
        icon: '🔍',
        color: '#06b6d4',
        techStack: ['Go', 'Goroutines', 'Mutexes', 'React'],
        resumeStatement: 'Built a vertical search engine with concurrent web crawler in Go, inverted index using hash maps, and TF-IDF ranking algorithm.',
        resources: [
            { title: 'Web Crawling Guide', url: 'https://www.scrapingbee.com/blog/web-scraping-go/' },
            { title: 'Inverted Index', url: 'https://en.wikipedia.org/wiki/Inverted_index' },
            { title: 'TF-IDF', url: 'https://en.wikipedia.org/wiki/Tf%E2%80%93idf' },
        ],
        phases: [
            {
                id: 'crawler',
                title: 'Web Crawler',
                milestones: [
                    { id: 'crawler-1', text: 'Set up Go project with modules' },
                    { id: 'crawler-2', text: 'Implement basic HTTP fetcher' },
                    { id: 'crawler-3', text: 'Add HTML parser for link extraction' },
                    { id: 'crawler-4', text: 'Implement URL queue with channels' },
                    { id: 'crawler-5', text: 'Add visited URL tracking with mutex' },
                    { id: 'crawler-6', text: 'Implement concurrent workers (goroutines)' },
                    { id: 'crawler-7', text: 'Add rate limiting and politeness' },
                    { id: 'crawler-8', text: 'Handle robots.txt' },
                ]
            },
            {
                id: 'indexer',
                title: 'Inverted Index',
                milestones: [
                    { id: 'indexer-1', text: 'Implement text tokenization' },
                    { id: 'indexer-2', text: 'Build inverted index data structure' },
                    { id: 'indexer-3', text: 'Implement TF-IDF scoring' },
                    { id: 'indexer-4', text: 'Add persistence (save/load index)' },
                ]
            },
            {
                id: 'ui',
                title: 'Search UI',
                milestones: [
                    { id: 'ui-1', text: 'Create React search interface' },
                    { id: 'ui-2', text: 'Build search API endpoint' },
                    { id: 'ui-3', text: 'Implement result ranking display' },
                    { id: 'ui-4', text: 'Add search suggestions' },
                ]
            }
        ]
    },
    {
        id: 'flowchart',
        title: 'Generative Flowchart',
        description: 'Show Product Engineering and AI integration skills with text-to-flowchart generation.',
        icon: '📊',
        color: '#ec4899',
        techStack: ['Python', 'LLM API', 'React', 'React Flow', 'Recoil'],
        resumeStatement: 'Built an AI-powered flowchart generator that converts natural language to interactive diagrams using LLMs and React Flow.',
        resources: [
            { title: 'React Flow', url: 'https://reactflow.dev/' },
            { title: 'OpenAI API', url: 'https://platform.openai.com/docs/' },
            { title: 'Recoil', url: 'https://recoiljs.org/' },
        ],
        phases: [
            {
                id: 'backend',
                title: 'Backend & AI',
                milestones: [
                    { id: 'backend-1', text: 'Set up Python FastAPI server' },
                    { id: 'backend-2', text: 'Implement LLM prompt engineering' },
                    { id: 'backend-3', text: 'Parse LLM output to JSON graph' },
                    { id: 'backend-4', text: 'Add error handling for AI responses' },
                ]
            },
            {
                id: 'frontend',
                title: 'Frontend',
                milestones: [
                    { id: 'frontend-1', text: 'Set up React with Recoil' },
                    { id: 'frontend-2', text: 'Implement React Flow canvas' },
                    { id: 'frontend-3', text: 'Add auto-layout algorithm (dagre)' },
                    { id: 'frontend-4', text: 'Create custom node components' },
                    { id: 'frontend-5', text: 'Implement interactive editing' },
                    { id: 'frontend-6', text: 'Add export functionality (PNG/JSON)' },
                ]
            }
        ]
    },
    {
        id: 'miniS3',
        title: 'Mini-S3',
        description: 'Show Deep Backend and Cloud Infrastructure competence with distributed object storage.',
        icon: '🗃️',
        color: '#f59e0b',
        techStack: ['Go', 'Docker', 'Distributed Systems', 'REST API'],
        resumeStatement: 'Built a distributed object storage system (Mini-S3) with file sharding, multiple storage nodes, and automatic data retrieval/reassembly.',
        resources: [
            { title: 'Distributed Systems', url: 'https://www.distributed-systems.net/index.php/books/ds4/' },
            { title: 'S3 API Reference', url: 'https://docs.aws.amazon.com/AmazonS3/latest/API/' },
        ],
        phases: [
            {
                id: 'core',
                title: 'Core API',
                milestones: [
                    { id: 'core-1', text: 'Set up Go REST API server' },
                    { id: 'core-2', text: 'Implement PUT object endpoint' },
                    { id: 'core-3', text: 'Implement GET object endpoint' },
                    { id: 'core-4', text: 'Add DELETE object endpoint' },
                    { id: 'core-5', text: 'Implement ListBucket endpoint' },
                ]
            },
            {
                id: 'sharding',
                title: 'File Sharding',
                milestones: [
                    { id: 'sharding-1', text: 'Implement file chunking algorithm' },
                    { id: 'sharding-2', text: 'Build chunk metadata storage' },
                    { id: 'sharding-3', text: 'Implement chunk reassembly' },
                    { id: 'sharding-4', text: 'Add checksum verification' },
                ]
            },
            {
                id: 'distributed',
                title: 'Distributed Storage',
                milestones: [
                    { id: 'distributed-1', text: 'Create storage node Docker container' },
                    { id: 'distributed-2', text: 'Implement node registration/discovery' },
                    { id: 'distributed-3', text: 'Add chunk distribution algorithm' },
                    { id: 'distributed-4', text: 'Implement replication factor' },
                    { id: 'distributed-5', text: 'Add health checks for nodes' },
                    { id: 'distributed-6', text: 'Handle node failures gracefully' },
                ]
            }
        ]
    }
]

// Helper to get total milestones for a project
export const getProjectMilestones = (projectId) => {
    const project = projects.find(p => p.id === projectId)
    if (!project) return []

    return project.phases.flatMap(phase =>
        phase.milestones.map(m => ({
            ...m,
            phaseId: phase.id,
            phaseTitle: phase.title,
        }))
    )
}

// Helper to get total milestone count
export const getTotalMilestones = (projectId) => {
    const project = projects.find(p => p.id === projectId)
    if (!project) return 0

    return project.phases.reduce((total, phase) => total + phase.milestones.length, 0)
}
