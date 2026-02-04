// Learning topics for job preparation

export const topics = [
    {
        id: 'dsa',
        title: 'DSA (CP Level)',
        description: 'Data Structures and Algorithms for competitive programming and interviews',
        icon: '🧮',
        color: '#8b5cf6',
        subtopics: [
            { id: 'arrays', title: 'Arrays & Strings' },
            { id: 'linkedlist', title: 'Linked Lists' },
            { id: 'stacks', title: 'Stacks & Queues' },
            { id: 'trees', title: 'Trees & BST' },
            { id: 'graphs', title: 'Graphs (BFS, DFS, Dijkstra)' },
            { id: 'dp', title: 'Dynamic Programming' },
            { id: 'greedy', title: 'Greedy Algorithms' },
            { id: 'backtracking', title: 'Backtracking' },
            { id: 'sorting', title: 'Sorting & Searching' },
            { id: 'hashing', title: 'Hashing' },
            { id: 'heaps', title: 'Heaps & Priority Queues' },
            { id: 'tries', title: 'Tries' },
            { id: 'segmenttree', title: 'Segment Trees' },
            { id: 'bit', title: 'Bit Manipulation' },
        ],
        resources: [
            { title: 'LeetCode', url: 'https://leetcode.com/' },
            { title: 'Codeforces', url: 'https://codeforces.com/' },
            { title: 'NeetCode', url: 'https://neetcode.io/' },
            { title: 'Striver SDE Sheet', url: 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/' },
        ]
    },
    {
        id: 'oop',
        title: 'OOP Concepts',
        description: 'Object-Oriented Programming principles and design patterns',
        icon: '🏗️',
        color: '#ec4899',
        subtopics: [
            { id: 'encapsulation', title: 'Encapsulation' },
            { id: 'inheritance', title: 'Inheritance' },
            { id: 'polymorphism', title: 'Polymorphism' },
            { id: 'abstraction', title: 'Abstraction' },
            { id: 'solid', title: 'SOLID Principles' },
            { id: 'designpatterns', title: 'Design Patterns (Singleton, Factory, Observer)' },
            { id: 'composition', title: 'Composition vs Inheritance' },
            { id: 'interfaces', title: 'Interfaces & Abstract Classes' },
        ],
        resources: [
            { title: 'Refactoring Guru', url: 'https://refactoring.guru/design-patterns' },
            { title: 'Head First Design Patterns', url: 'https://www.oreilly.com/library/view/head-first-design/9781492077992/' },
        ]
    },
    {
        id: 'dbms',
        title: 'DBMS',
        description: 'Database Management Systems concepts',
        icon: '🗄️',
        color: '#f59e0b',
        subtopics: [
            { id: 'normalization', title: 'Normalization (1NF, 2NF, 3NF, BCNF)' },
            { id: 'acid', title: 'ACID Properties' },
            { id: 'transactions', title: 'Transactions & Locking' },
            { id: 'indexing', title: 'Indexing (B-Tree, Hash)' },
            { id: 'joins', title: 'SQL Joins' },
            { id: 'queryoptimization', title: 'Query Optimization' },
            { id: 'nosql', title: 'NoSQL vs SQL' },
            { id: 'cap', title: 'CAP Theorem' },
            { id: 'replication', title: 'Replication & Sharding' },
        ],
        resources: [
            { title: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/' },
            { title: 'Use The Index Luke', url: 'https://use-the-index-luke.com/' },
        ]
    },
    {
        id: 'os',
        title: 'Operating Systems',
        description: 'OS concepts critical for systems programming',
        icon: '⚙️',
        color: '#10b981',
        subtopics: [
            { id: 'processes', title: 'Processes & Threads' },
            { id: 'scheduling', title: 'CPU Scheduling' },
            { id: 'concurrency', title: 'Concurrency' },
            { id: 'deadlock', title: 'Deadlocks' },
            { id: 'racecondition', title: 'Race Conditions' },
            { id: 'mutex', title: 'Mutex & Semaphores' },
            { id: 'memory', title: 'Memory Management' },
            { id: 'virtualmemory', title: 'Virtual Memory & Paging' },
            { id: 'filesystem', title: 'File Systems' },
            { id: 'ipc', title: 'Inter-Process Communication' },
        ],
        resources: [
            { title: 'OSTEP', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/' },
            { title: 'MIT 6.S081', url: 'https://pdos.csail.mit.edu/6.S081/' },
        ]
    },
    {
        id: 'cn',
        title: 'Computer Networks',
        description: 'Networking fundamentals for web development',
        icon: '🌐',
        color: '#3b82f6',
        subtopics: [
            { id: 'osi', title: 'OSI Model' },
            { id: 'tcpip', title: 'TCP/IP' },
            { id: 'http', title: 'HTTP/HTTPS' },
            { id: 'dns', title: 'DNS' },
            { id: 'websockets', title: 'WebSockets' },
            { id: 'rest', title: 'REST vs GraphQL' },
            { id: 'loadbalancing', title: 'Load Balancing' },
            { id: 'cdn', title: 'CDN' },
            { id: 'ssl', title: 'SSL/TLS' },
        ],
        resources: [
            { title: 'High Performance Browser Networking', url: 'https://hpbn.co/' },
            { title: 'Beej\'s Guide', url: 'https://beej.us/guide/bgnet/' },
        ]
    },
    {
        id: 'webdev',
        title: 'Web Development',
        description: 'Full-stack web development with Python/Go backend and JS/Flutter frontend',
        icon: '💻',
        color: '#06b6d4',
        subtopics: [
            { id: 'html', title: 'HTML5 & Semantic HTML' },
            { id: 'css', title: 'CSS & Responsive Design' },
            { id: 'javascript', title: 'JavaScript ES6+' },
            { id: 'react', title: 'React.js' },
            { id: 'statemanagement', title: 'State Management (Redux, Zustand)' },
            { id: 'fastapi', title: 'FastAPI (Python)' },
            { id: 'go', title: 'Go Backend' },
            { id: 'flutter', title: 'Flutter' },
            { id: 'authentication', title: 'Authentication (JWT, OAuth)' },
            { id: 'apis', title: 'RESTful APIs' },
            { id: 'testing', title: 'Testing (Jest, Pytest)' },
            { id: 'docker', title: 'Docker & Containerization' },
        ],
        resources: [
            { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
            { title: 'React Docs', url: 'https://react.dev/' },
            { title: 'FastAPI Docs', url: 'https://fastapi.tiangolo.com/' },
            { title: 'Go by Example', url: 'https://gobyexample.com/' },
        ]
    }
]

// Helper to get all subtopics count
export const getTotalSubtopics = () => {
    return topics.reduce((total, topic) => total + topic.subtopics.length, 0)
}
