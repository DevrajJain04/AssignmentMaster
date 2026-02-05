// All 500 interview questions organized by category
// Based on the 500 Mock Interview Questions document

export const questionBlocks = [
    {
        id: 'block1',
        title: 'Core Programming & CS',
        description: 'Fundamentals of Python, C/C++, JavaScript, and SQL',
        icon: '💻',
        color: '#8b5cf6',
        categories: [
            {
                id: 'python',
                title: 'Python',
                icon: '🐍',
                color: '#4ade80',
                questions: [
                    {
                        id: 1,
                        text: 'What happens in memory when you do `a = b = []`?',
                        description: 'I see this pattern in your code. Walk me through exactly what Python does here - how many list objects are created, and what happens to a and b?',
                        keyPoints: ['single list object created', 'both variables reference same object', 'mutations affect both', 'use a, b = [], [] for separate lists']
                    },
                    {
                        id: 2,
                        text: 'How does reference counting differ from generational GC?',
                        description: 'Python uses multiple garbage collection strategies. Explain when each kicks in and why Python needs both.',
                        keyPoints: ['reference counting immediate', 'generational for cycles', 'three generations', 'threshold triggers collection']
                    },
                    {
                        id: 3,
                        text: 'Why does `is` sometimes fail while `==` works?',
                        description: 'A junior developer is confused why `a is b` returned False. Explain identity vs equality.',
                        keyPoints: ['is checks identity (same object)', '== checks equality (same value)', 'integer caching -5 to 256', 'string interning']
                    },
                    {
                        id: 4,
                        text: 'What exactly does the GIL lock?',
                        description: 'Your multithreaded Python code is slower than single-threaded. Explain what the GIL protects and why.',
                        keyPoints: ['locks interpreter state', 'only one thread executes bytecode', 'protects memory management', 'released during I/O']
                    },
                    {
                        id: 5,
                        text: 'When does Python release the GIL?',
                        description: 'Despite the GIL, some operations can run in parallel. When does Python release it?',
                        keyPoints: ['I/O operations', 'C extensions can release', 'every 100 ticks in Python 2', 'after 5ms in Python 3']
                    },
                    {
                        id: 6,
                        text: 'Why is `multiprocessing` faster than threading?',
                        description: 'For CPU-bound tasks, multiprocessing beats threading. Why?',
                        keyPoints: ['separate memory spaces', 'no GIL contention', 'true parallelism', 'overhead of process creation']
                    },
                    {
                        id: 7,
                        text: 'How does `asyncio` schedule coroutines?',
                        description: 'Explain how async/await works under the hood. What is the event loop doing?',
                        keyPoints: ['event loop manages tasks', 'cooperative multitasking', 'await yields control', 'single thread']
                    },
                    {
                        id: 8,
                        text: 'What happens if you forget `await`?',
                        description: 'A developer called an async function without await. What behavior will they see?',
                        keyPoints: ['returns coroutine object', 'function body not executed', 'warning in Python 3.8+', 'must be awaited or scheduled']
                    },
                    {
                        id: 9,
                        text: 'Difference between generator and coroutine?',
                        description: 'Both use yield. What distinguishes them and when would you use each?',
                        keyPoints: ['generators produce values', 'coroutines consume and produce', 'generators pull-based', 'coroutines push-based']
                    },
                    {
                        id: 10,
                        text: 'How do Python descriptors work?',
                        description: 'You see __get__, __set__, __delete__ in a class. Explain the descriptor protocol.',
                        keyPoints: ['implement __get__/__set__/__delete__', 'data vs non-data descriptors', 'powers property/classmethod/staticmethod', 'invoked on attribute access']
                    },
                    {
                        id: 11,
                        text: 'How does context manager work internally?',
                        description: 'Explain what happens when you use `with open() as f:`. What methods are called?',
                        keyPoints: ['__enter__ called first', '__exit__ called on completion/error', 'exception info passed to __exit__', 'contextlib simplifies creation']
                    },
                    {
                        id: 12,
                        text: 'Why is recursion slow in Python?',
                        description: 'Your recursive solution times out. Why is iteration often faster in Python?',
                        keyPoints: ['no tail call optimization', 'function call overhead', 'default recursion limit 1000', 'stack frame creation expensive']
                    },
                    {
                        id: 13,
                        text: 'How does Python import system work?',
                        description: 'Walk me through what happens when you write `import foo`.',
                        keyPoints: ['check sys.modules cache', 'find module using finders', 'load using loaders', 'execute module code', 'bind to name']
                    },
                    {
                        id: 14,
                        text: 'What is `__slots__`?',
                        description: 'When would you use __slots__ and what are the tradeoffs?',
                        keyPoints: ['prevents __dict__ creation', 'memory savings', 'faster attribute access', 'cannot add new attributes dynamically']
                    },
                    {
                        id: 15,
                        text: 'Why does default argument mutation happen?',
                        description: 'A function with `def foo(items=[])` is behaving strangely. Explain the bug.',
                        keyPoints: ['default evaluated once at definition', 'mutable defaults shared across calls', 'use None as sentinel', 'common Python gotcha']
                    },
                    {
                        id: 16,
                        text: 'How does deep copy differ from shallow?',
                        description: 'You copied a nested list but changes still propagate. Explain copy behavior.',
                        keyPoints: ['shallow copies references', 'deep copies recursively', 'import copy module', 'custom __copy__ and __deepcopy__']
                    },
                    {
                        id: 17,
                        text: 'What happens when exception is raised?',
                        description: 'Walk me through the exception handling mechanism in Python.',
                        keyPoints: ['stack unwinding', 'except blocks checked in order', 'finally always runs', 'exception chaining with __cause__']
                    },
                    {
                        id: 18,
                        text: 'What is monkey patching?',
                        description: 'You see code modifying a class at runtime. Explain this pattern and its risks.',
                        keyPoints: ['modify classes/modules at runtime', 'useful for testing/patching bugs', 'can break code unexpectedly', 'gevent uses for async']
                    },
                    {
                        id: 19,
                        text: 'How do decorators stack?',
                        description: 'You have @decorator1 and @decorator2 on a function. In what order do they execute?',
                        keyPoints: ['applied bottom to top', 'executed top to bottom', 'equivalent to nesting', 'functools.wraps preserves metadata']
                    },
                    {
                        id: 20,
                        text: 'How does MRO work?',
                        description: 'In multiple inheritance, how does Python determine method resolution order?',
                        keyPoints: ['C3 linearization algorithm', 'respects local precedence', 'mro() method to inspect', 'super() follows MRO']
                    },
                    {
                        id: 21,
                        text: 'What is tail recursion?',
                        description: 'Some languages optimize tail calls. Does Python? Why or why not?',
                        keyPoints: ['recursive call is last operation', 'can be optimized to iteration', 'Python does NOT optimize', 'Guido values tracebacks']
                    },
                    {
                        id: 22,
                        text: 'When would Python segfault?',
                        description: 'Python is memory-safe, yet crashes happen. When might you see a segfault?',
                        keyPoints: ['buggy C extensions', 'stack overflow deep recursion', 'ctypes misuse', 'interpreter bugs']
                    },
                    {
                        id: 23,
                        text: 'How does Python optimize dict?',
                        description: 'Python dicts are fast. Explain the implementation optimizations.',
                        keyPoints: ['compact dict in 3.6+', 'key sharing for instances', 'open addressing hash table', 'hash value caching']
                    },
                    {
                        id: 24,
                        text: 'How does garbage collection pause execution?',
                        description: 'Your latency-sensitive app has GC pauses. Explain when and why they occur.',
                        keyPoints: ['generational collection pauses', 'can disable with gc.disable()', 'threshold tuning possible', 'reference counting is immediate']
                    },
                    {
                        id: 25,
                        text: 'Why is list append amortized O(1)?',
                        description: 'Lists grow dynamically. How is append still O(1) on average?',
                        keyPoints: ['over-allocates memory', 'resizes by factor ~1.125', 'occasional O(n) resize', 'amortized analysis']
                    },
                ],
                resources: [
                    { title: 'Python Docs', url: 'https://docs.python.org/3/' },
                    { title: 'Real Python', url: 'https://realpython.com/' },
                ]
            },
            {
                id: 'cpp',
                title: 'C / C++',
                icon: '⚡',
                color: '#60a5fa',
                questions: [
                    {
                        id: 26,
                        text: 'Stack vs heap memory lifecycle?',
                        description: 'Where would this local variable live vs a malloc\'d pointer? Walk me through their lifecycles.',
                        keyPoints: ['stack: automatic, LIFO, function scope', 'heap: manual alloc/free', 'stack faster but limited size', 'heap persists across function calls']
                    },
                    {
                        id: 27,
                        text: 'Why is malloc faster than new?',
                        description: 'We\'re optimizing memory allocations. When would malloc be faster than new?',
                        keyPoints: ['malloc just allocates bytes', 'new calls constructor', 'new can throw exceptions', 'malloc returns void*, needs cast']
                    },
                    {
                        id: 28,
                        text: 'What is undefined behavior?',
                        description: 'This code works on my machine but crashes in production. Could it be UB?',
                        keyPoints: ['compiler makes no guarantees', 'examples: null deref, out of bounds', 'can appear to work then fail', 'optimizer assumes no UB']
                    },
                    {
                        id: 29,
                        text: 'Why double free is dangerous?',
                        description: 'Our app crashed with a heap corruption error. What happens if you free memory twice?',
                        keyPoints: ['corrupts heap metadata', 'can cause crashes', 'security vulnerability', 'use-after-free attacks']
                    },
                    {
                        id: 30,
                        text: 'What is memory alignment?',
                        description: 'Why does sizeof this struct not equal the sum of its members?',
                        keyPoints: ['CPU reads aligned addresses faster', 'padding added by compiler', 'different for each type', 'alignof operator']
                    },
                    {
                        id: 31,
                        text: 'What is dangling pointer?',
                        description: 'After freeing this pointer, the code still uses it. What\'s the risk?',
                        keyPoints: ['points to freed/invalid memory', 'reading gives garbage', 'writing corrupts memory', 'set to nullptr after free']
                    },
                    {
                        id: 32,
                        text: 'Why RAII prevents leaks?',
                        description: 'How does RAII help us avoid the memory leaks we had with raw pointers?',
                        keyPoints: ['resource acquisition is initialization', 'destructor releases resource', 'exception-safe cleanup', 'unique_ptr, lock_guard examples']
                    },
                    {
                        id: 33,
                        text: 'What happens if destructor throws?',
                        description: 'Should we throw exceptions in destructors? What could go wrong?',
                        keyPoints: ['can cause std::terminate', 'double exception during stack unwinding', 'mark noexcept in C++11+', 'use error codes instead']
                    },
                    {
                        id: 34,
                        text: 'Why virtual destructor needed?',
                        description: 'We\'re deleting a derived object through base pointer. Why do we need virtual destructor?',
                        keyPoints: ['ensures derived destructor called', 'without it: undefined behavior', 'base class resources leaked', 'required for polymorphic base']
                    },
                    {
                        id: 35,
                        text: 'What is object slicing?',
                        description: 'I passed a Derived object to a function taking Base by value. What happened?',
                        keyPoints: ['derived members cut off', 'only base part copied', 'pass by reference to avoid', 'polymorphism lost']
                    },
                    {
                        id: 36,
                        text: 'Difference between pointer and reference?',
                        description: 'When should I use a reference vs a pointer as a parameter?',
                        keyPoints: ['reference cannot be null', 'reference cannot be reseated', 'pointer can be nullptr', 'reference is alias, pointer is address']
                    },
                    {
                        id: 37,
                        text: 'How does vtable work?',
                        description: 'How does virtual function dispatch actually work at runtime?',
                        keyPoints: ['table of function pointers', 'vptr in each object', 'lookup at runtime', 'one vtable per class']
                    },
                    {
                        id: 38,
                        text: 'What is move constructor?',
                        description: 'Explain the difference between move and copy semantics.',
                        keyPoints: ['transfers ownership', 'avoids deep copy', 'leaves source in valid empty state', 'rvalue references &&']
                    },
                    {
                        id: 39,
                        text: 'Why vector reallocation expensive?',
                        description: 'Why does our vector push_back sometimes take much longer?',
                        keyPoints: ['allocates new larger buffer', 'copies/moves all elements', 'frees old buffer', 'reserve() to prevent']
                    },
                    {
                        id: 40,
                        text: 'What is copy elision?',
                        description: 'I expected a copy here but the copy constructor wasn\'t called. Why?',
                        keyPoints: ['compiler optimization', 'eliminates unnecessary copies', 'RVO and NRVO', 'mandatory in C++17 for some cases']
                    },
                    {
                        id: 41,
                        text: 'What is segmentation fault?',
                        description: 'The program crashed with SIGSEGV. What causes this?',
                        keyPoints: ['accessing invalid memory', 'null pointer dereference', 'stack overflow', 'writing to read-only memory']
                    },
                    {
                        id: 42,
                        text: 'How does static linking work?',
                        description: 'What\'s the difference between static and dynamic linking?',
                        keyPoints: ['copies library code into executable', 'larger binary size', 'no runtime dependencies', 'dynamic: shared .so/.dll files']
                    },
                    {
                        id: 43,
                        text: 'What is inline function?',
                        description: 'When would you use the inline keyword?',
                        keyPoints: ['suggests inlining to compiler', 'avoids function call overhead', 'increases code size', 'defined in header usually']
                    },
                    {
                        id: 44,
                        text: 'Why header guards exist?',
                        description: 'What problem do #ifndef/#pragma once solve?',
                        keyPoints: ['prevents multiple inclusion', 'avoids redefinition errors', 'pragma once is non-standard but common', 'include dependencies']
                    },
                    {
                        id: 45,
                        text: 'What is volatile keyword?',
                        description: 'When would you need to use volatile?',
                        keyPoints: ['prevents compiler optimization', 'value can change unexpectedly', 'hardware registers, signal handlers', 'not for thread safety']
                    },
                ],
                resources: [
                    { title: 'cppreference', url: 'https://en.cppreference.com/' },
                    { title: 'LearnCpp', url: 'https://www.learncpp.com/' },
                ]
            },
            {
                id: 'javascript',
                title: 'JavaScript',
                icon: '🟨',
                color: '#fbbf24',
                questions: [
                    {
                        id: 46,
                        text: 'Explain event loop phases.',
                        description: 'Walk me through what happens when I run some async code. How does the event loop actually work?',
                        keyPoints: ['call stack execution', 'callback queue', 'microtask queue priority', 'timers, I/O, check phases']
                    },
                    {
                        id: 47,
                        text: 'Microtask vs macrotask?',
                        description: 'In what order do these execute: setTimeout, Promise.then, and regular code?',
                        keyPoints: ['microtasks: promises, queueMicrotask', 'macrotasks: setTimeout, setInterval', 'microtasks drain before next macrotask', 'can starve macrotasks']
                    },
                    {
                        id: 48,
                        text: 'How does promise chaining work?',
                        description: 'I see .then().then() chains everywhere. What makes this work internally?',
                        keyPoints: ['each then returns new promise', 'value becomes next resolve', 'errors propagate down', 'finally always runs']
                    },
                    {
                        id: 49,
                        text: 'What is closure memory leak?',
                        description: 'Our app is using more memory over time. How can closures cause memory leaks?',
                        keyPoints: ['closure retains outer scope', 'referenced variables not GCd', 'event listeners without cleanup', 'circular references']
                    },
                    {
                        id: 50,
                        text: 'Why setTimeout(0) isn\'t immediate?',
                        description: 'I used setTimeout with 0ms delay but it still runs after my other code. Why?',
                        keyPoints: ['goes to callback queue', 'waits for call stack empty', 'minimum 4ms in browsers', 'event loop must pick it up']
                    },
                    {
                        id: 51,
                        text: 'How does hoisting work?',
                        description: 'Why can I call a function before it\'s defined but not a variable?',
                        keyPoints: ['declarations hoisted not values', 'var undefined initially', 'let/const TDZ', 'function declarations fully hoisted']
                    },
                    {
                        id: 52,
                        text: 'this binding rules?',
                        description: 'The "this" keyword is confusing. What are the rules for what "this" refers to?',
                        keyPoints: ['default binding (global)', 'implicit binding (object)', 'explicit binding (call/apply/bind)', 'new binding', 'arrow functions lexical']
                    },
                    {
                        id: 53,
                        text: 'What is prototype chain?',
                        description: 'How does JavaScript inheritance actually work under the hood?',
                        keyPoints: ['objects have __proto__', 'lookup walks chain', 'Object.prototype at top', 'hasOwnProperty checks own']
                    },
                    {
                        id: 54,
                        text: 'How does garbage collection in V8 work?',
                        description: 'How does Chrome know when to clean up memory?',
                        keyPoints: ['generational collection', 'young/old space', 'mark-sweep algorithm', 'incremental marking']
                    },
                    {
                        id: 55,
                        text: 'Why JSON.stringify fails on circular?',
                        description: 'I\'m trying to serialize an object but getting an error. What\'s happening?',
                        keyPoints: ['infinite recursion possible', 'no circular reference support', 'use replacer function', 'or libraries like flatted']
                    },
                    {
                        id: 56,
                        text: 'What is debouncing?',
                        description: 'How would you optimize a search input that fires on every keystroke?',
                        keyPoints: ['delays execution', 'resets timer on new call', 'fires after pause', 'good for search/resize']
                    },
                    {
                        id: 57,
                        text: 'What is throttling?',
                        description: 'What\'s the difference between debounce and throttle?',
                        keyPoints: ['limits execution rate', 'fires at intervals', 'leading/trailing options', 'good for scroll/resize']
                    },
                    {
                        id: 58,
                        text: 'How does fetch differ from axios?',
                        description: 'We use fetch sometimes and axios others. What are the real differences?',
                        keyPoints: ['fetch is native', 'axios auto-JSON', 'fetch needs ok check', 'axios has interceptors']
                    },
                    {
                        id: 59,
                        text: 'Why async/await is syntactic sugar?',
                        description: 'Is async/await actually doing something different than promises?',
                        keyPoints: ['compiles to promises', 'generators under hood', 'cleaner syntax', 'same behavior']
                    },
                    {
                        id: 60,
                        text: 'What is strict mode?',
                        description: 'I see "use strict" at the top of files. What does it actually do?',
                        keyPoints: ['catches silent errors', 'no implicit globals', 'this is undefined not window', 'reserved words enforced']
                    },
                    {
                        id: 61,
                        text: 'How does module system work?',
                        description: 'Explain the difference between CommonJS and ES modules.',
                        keyPoints: ['CommonJS synchronous', 'ESM async/static', 'require vs import', 'ESM tree-shakeable']
                    },
                    {
                        id: 62,
                        text: 'Tree shaking?',
                        description: 'How do bundlers know which code to remove?',
                        keyPoints: ['removes unused exports', 'requires ESM static imports', 'side effects config', 'webpack/rollup feature']
                    },
                    {
                        id: 63,
                        text: 'Why JS is single threaded?',
                        description: 'Why doesn\'t JavaScript use multiple threads like other languages?',
                        keyPoints: ['simpler concurrency model', 'no race conditions', 'event loop handles async', 'web workers for parallel']
                    },
                    {
                        id: 64,
                        text: 'Web worker vs service worker?',
                        description: 'When would you use each type of worker?',
                        keyPoints: ['web worker: CPU tasks', 'service worker: network proxy', 'different lifecycles', 'service worker offline support']
                    },
                    {
                        id: 65,
                        text: 'How does event delegation?',
                        description: 'Why add one listener to parent instead of many to children?',
                        keyPoints: ['bubbling to parent', 'single listener efficiency', 'works for dynamic elements', 'check event.target']
                    },
                    {
                        id: 66,
                        text: 'What is memory leak in frontend?',
                        description: 'Our SPA is getting slow over time. What common issues cause memory leaks?',
                        keyPoints: ['detached DOM nodes', 'forgotten timers/intervals', 'closures holding references', 'event listeners not removed']
                    },
                    {
                        id: 67,
                        text: 'How to cancel promise?',
                        description: 'The user navigated away but my API call is still pending. How do I cancel it?',
                        keyPoints: ['promises not cancellable', 'AbortController for fetch', 'flag-based cancellation', 'cleanup in effect']
                    },
                    {
                        id: 68,
                        text: 'What is hydration?',
                        description: 'In SSR frameworks, what does hydration mean?',
                        keyPoints: ['attaches JS to server HTML', 'makes page interactive', 'mismatch causes errors', 'partial hydration optimization']
                    },
                    {
                        id: 69,
                        text: 'Shadow DOM?',
                        description: 'How does Shadow DOM provide style encapsulation?',
                        keyPoints: ['isolated DOM subtree', 'scoped CSS', 'used in web components', 'slots for content projection']
                    },
                    {
                        id: 70,
                        text: 'What is virtual DOM?',
                        description: 'React uses a virtual DOM. What problem does it solve?',
                        keyPoints: ['in-memory representation', 'diffing algorithm', 'batches DOM updates', 'minimizes repaints']
                    },
                ],
                resources: [
                    { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                    { title: 'JavaScript.info', url: 'https://javascript.info/' },
                ]
            },
            {
                id: 'sql',
                title: 'SQL / DB Theory',
                icon: '🗄️',
                color: '#f472b6',
                questions: [
                    {
                        id: 71,
                        text: 'What is normalization?',
                        description: 'This table has repeated data. How would you normalize it?',
                        keyPoints: ['reduce redundancy', '1NF: atomic values', '2NF: no partial dependencies', '3NF: no transitive dependencies']
                    },
                    {
                        id: 72,
                        text: 'When denormalize?',
                        description: 'Our queries are slow despite proper indexes. When would denormalization help?',
                        keyPoints: ['read-heavy workloads', 'reduce JOIN operations', 'trade storage for speed', 'caching frequently joined data']
                    },
                    {
                        id: 73,
                        text: 'What is index physically?',
                        description: 'What actually happens when you create an index?',
                        keyPoints: ['separate data structure', 'stores column values + row pointers', 'sorted for fast lookup', 'takes disk space']
                    },
                    {
                        id: 74,
                        text: 'B-tree vs hash index?',
                        description: 'When would you use a hash index over B-tree?',
                        keyPoints: ['B-tree: range queries, ordering', 'hash: equality only', 'hash faster for exact match', 'B-tree more versatile']
                    },
                    {
                        id: 75,
                        text: 'Explain query planner.',
                        description: 'How does the database decide whether to use your index?',
                        keyPoints: ['analyzes query cost', 'considers statistics', 'chooses execution plan', 'EXPLAIN to see plan']
                    },
                    {
                        id: 76,
                        text: 'What is deadlock?',
                        description: 'Two transactions are stuck waiting for each other. What happened?',
                        keyPoints: ['circular wait condition', 'each holds lock other needs', 'database detects and aborts one', 'transaction must retry']
                    },
                    {
                        id: 77,
                        text: 'How to prevent deadlock?',
                        description: 'How would you design to avoid deadlocks?',
                        keyPoints: ['consistent lock ordering', 'keep transactions short', 'use lock timeouts', 'avoid holding locks during I/O']
                    },
                    {
                        id: 78,
                        text: 'What is phantom read?',
                        description: 'A query returned different rows when run twice in same transaction. Why?',
                        keyPoints: ['new rows inserted by other transaction', 'previous isolation levels don\'t prevent', 'SERIALIZABLE prevents it', 'range locks needed']
                    },
                    {
                        id: 79,
                        text: 'Explain isolation levels.',
                        description: 'What\'s the difference between READ COMMITTED and SERIALIZABLE?',
                        keyPoints: ['READ UNCOMMITTED: dirty reads', 'READ COMMITTED: no dirty reads', 'REPEATABLE READ: no fuzzy reads', 'SERIALIZABLE: no phantoms']
                    },
                    {
                        id: 80,
                        text: 'What is write-ahead logging?',
                        description: 'How does the database ensure durability even if it crashes?',
                        keyPoints: ['writes to log before data', 'log is append-only', 'can replay from log', 'ensures ACID durability']
                    },
                    {
                        id: 81,
                        text: 'What is vacuum?',
                        description: 'Why does PostgreSQL need VACUUM?',
                        keyPoints: ['reclaims dead tuple space', 'updates statistics', 'prevents transaction ID wraparound', 'autovacuum runs automatically']
                    },
                    {
                        id: 82,
                        text: 'What is foreign key constraint?',
                        description: 'How do foreign keys help maintain data integrity?',
                        keyPoints: ['references primary key', 'prevents orphan records', 'enforced by database', 'CASCADE/RESTRICT options']
                    },
                    {
                        id: 83,
                        text: 'Cascade delete dangers?',
                        description: 'We set CASCADE DELETE and lost important data. What went wrong?',
                        keyPoints: ['deletes propagate automatically', 'can delete more than expected', 'use RESTRICT for safety', 'audit before enabling']
                    },
                    {
                        id: 84,
                        text: 'What is materialized view?',
                        description: 'Our aggregation query is slow. How can materialized views help?',
                        keyPoints: ['stores query result physically', 'faster reads', 'must be refreshed', 'trade freshness for speed']
                    },
                    {
                        id: 85,
                        text: 'What is locking granularity?',
                        description: 'Should we lock the row, page, or table?',
                        keyPoints: ['row: most concurrent, more overhead', 'table: least concurrent, simple', 'page: middle ground', 'database chooses often']
                    },
                    {
                        id: 86,
                        text: 'Optimistic vs pessimistic locking?',
                        description: 'How do you handle concurrent updates to the same row?',
                        keyPoints: ['pessimistic: lock before read', 'optimistic: version check on write', 'optimistic better for low contention', 'pessimistic for high contention']
                    },
                    {
                        id: 87,
                        text: 'What is N+1 problem?',
                        description: 'This ORM code runs thousands of queries. What\'s happening?',
                        keyPoints: ['1 query for parent, N for children', 'very inefficient', 'use eager loading/JOIN', 'ORMs can hide this']
                    },
                    {
                        id: 88,
                        text: 'What is connection pooling?',
                        description: 'Why do we pool database connections instead of creating new ones?',
                        keyPoints: ['connections are expensive', 'reuse existing connections', 'limits max connections', 'PgBouncer, HikariCP examples']
                    },
                    {
                        id: 89,
                        text: 'What is prepared statement?',
                        description: 'How do prepared statements help with both performance and security?',
                        keyPoints: ['query parsed once, reused', 'prevents SQL injection', 'parameterized values', 'faster for repeated queries']
                    },
                    {
                        id: 90,
                        text: 'Why ORMs slow?',
                        description: 'Our ORM-generated queries are slower than raw SQL. Why?',
                        keyPoints: ['abstraction overhead', 'may fetch too much', 'suboptimal queries generated', 'N+1 problems hidden']
                    },
                    {
                        id: 91,
                        text: 'Explain ACID.',
                        description: 'What guarantees does a database transaction provide?',
                        keyPoints: ['Atomicity: all or nothing', 'Consistency: valid state', 'Isolation: concurrent independence', 'Durability: committed stays']
                    },
                    {
                        id: 92,
                        text: 'What is CAP theorem?',
                        description: 'You can\'t have all three. Which two would you choose?',
                        keyPoints: ['Consistency, Availability, Partition tolerance', 'must choose 2 of 3', 'distributed systems only', 'CP vs AP trade-offs']
                    },
                    {
                        id: 93,
                        text: 'What is BASE?',
                        description: 'How is BASE different from ACID?',
                        keyPoints: ['Basically Available', 'Soft state', 'Eventually consistent', 'NoSQL trade-off']
                    },
                    {
                        id: 94,
                        text: 'What is replication lag?',
                        description: 'Users see stale data after writes. What\'s happening?',
                        keyPoints: ['delay between master and replica', 'eventual consistency', 'read-your-writes pattern', 'monitor lag metrics']
                    },
                    {
                        id: 95,
                        text: 'What is sharding?',
                        description: 'Our single database can\'t handle the load. How does sharding help?',
                        keyPoints: ['horizontal partitioning', 'data split across servers', 'shard key determines location', 'adds complexity']
                    },
                    {
                        id: 96,
                        text: 'Hot partition?',
                        description: 'One shard is overloaded while others are idle. What went wrong?',
                        keyPoints: ['uneven data distribution', 'bad shard key choice', 'celebrity problem', 'need to rebalance']
                    },
                    {
                        id: 97,
                        text: 'What is idempotent query?',
                        description: 'Why is idempotency important for database operations?',
                        keyPoints: ['same result if repeated', 'safe to retry', 'use unique keys', 'important for distributed systems']
                    },
                    {
                        id: 98,
                        text: 'Explain transaction rollback.',
                        description: 'What happens when a transaction fails halfway?',
                        keyPoints: ['undo all changes', 'restore previous state', 'uses transaction log', 'ACID atomicity']
                    },
                    {
                        id: 99,
                        text: 'What is schema migration?',
                        description: 'How do you safely change database schema in production?',
                        keyPoints: ['versioned schema changes', 'up and down migrations', 'test before prod', 'tools: Alembic, Flyway']
                    },
                    {
                        id: 100,
                        text: 'How to design audit logs?',
                        description: 'We need to track who changed what and when. How would you design this?',
                        keyPoints: ['separate audit table', 'triggers or application logic', 'store old and new values', 'immutable records']
                    },
                ],
                resources: [
                    { title: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/' },
                    { title: 'Use The Index Luke', url: 'https://use-the-index-luke.com/' },
                ]
            },
        ]
    },
    {
        id: 'block2',
        title: 'Backend, APIs, AI, Security',
        description: 'FastAPI, Django, WebSockets, Auth, and AI integration',
        icon: '🔧',
        color: '#06b6d4',
        categories: [
            {
                id: 'backend',
                title: 'Backend & APIs',
                icon: '⚙️',
                color: '#a78bfa',
                questions: [
                    {
                        id: 101,
                        text: 'WSGI vs ASGI?',
                        description: 'Why would you choose ASGI over WSGI for a new Python project?',
                        keyPoints: ['WSGI synchronous, one request at a time', 'ASGI async, handles concurrency', 'ASGI for WebSockets/HTTP2', 'FastAPI uses ASGI, Flask uses WSGI']
                    },
                    {
                        id: 102,
                        text: 'Why FastAPI scales better than Flask?',
                        description: 'We\'re migrating from Flask. What makes FastAPI more performant?',
                        keyPoints: ['async/await native support', 'Starlette ASGI framework', 'Pydantic validation fast', 'handles more concurrent requests']
                    },
                    {
                        id: 103,
                        text: 'Request lifecycle in FastAPI?',
                        description: 'Walk me through what happens from when a request hits FastAPI to response.',
                        keyPoints: ['Uvicorn receives request', 'middleware chain executes', 'dependency injection resolves', 'route handler runs, response returned']
                    },
                    {
                        id: 104,
                        text: 'Dependency injection internals?',
                        description: 'How does FastAPI\'s Depends() actually work?',
                        keyPoints: ['resolves at request time', 'caching within request', 'supports nested deps', 'cleanup with yield']
                    },
                    {
                        id: 105,
                        text: 'When not to use async?',
                        description: 'When would synchronous code be better than async?',
                        keyPoints: ['CPU-bound tasks', 'sync database drivers', 'simpler debugging', 'overhead for simple tasks']
                    },
                    {
                        id: 106,
                        text: 'Blocking event loop?',
                        description: 'Our async endpoint is slow. Could we be blocking the event loop?',
                        keyPoints: ['sync code in async function', 'CPU-intensive operations', 'use run_in_executor', 'all handlers affected']
                    },
                    {
                        id: 107,
                        text: 'Thread pool vs async loop?',
                        description: 'When to use thread pool vs async for concurrency?',
                        keyPoints: ['async for I/O-bound', 'threads for blocking calls', 'async more memory efficient', 'threads for CPU parallelism']
                    },
                    {
                        id: 108,
                        text: 'Django ORM lazy loading?',
                        description: 'This queryset runs extra queries. What\'s happening?',
                        keyPoints: ['querysets are lazy', 'evaluates on iteration/slice', 'N+1 with relations', 'select_related/prefetch_related']
                    },
                    {
                        id: 109,
                        text: 'When Django beats FastAPI?',
                        description: 'When would you recommend Django over FastAPI?',
                        keyPoints: ['batteries included', 'admin panel needed', 'mature ecosystem', 'traditional server-rendered apps']
                    },
                    {
                        id: 110,
                        text: 'Middleware order?',
                        description: 'Does the order of middleware matter?',
                        keyPoints: ['executes in order defined', 'first in, last out for response', 'auth before route handler', 'CORS before request processing']
                    },
                    {
                        id: 111,
                        text: 'CSRF token flow?',
                        description: 'How does CSRF protection actually work?',
                        keyPoints: ['server generates unique token', 'stored in session/cookie', 'form includes token', 'server validates on POST']
                    },
                    {
                        id: 112,
                        text: 'Rate limiting strategies?',
                        description: 'How would you implement rate limiting for an API?',
                        keyPoints: ['token bucket algorithm', 'sliding window', 'per-user vs per-IP', 'Redis for distributed']
                    },
                    {
                        id: 113,
                        text: 'API versioning?',
                        description: 'We need to make breaking changes. How do you version APIs?',
                        keyPoints: ['URL path (/v1/)', 'header (Accept-Version)', 'query param', 'maintain backward compat']
                    },
                    {
                        id: 114,
                        text: 'Idempotent APIs?',
                        description: 'Why is idempotency important for POST/PUT/DELETE?',
                        keyPoints: ['safe to retry', 'idempotency key header', 'GET/PUT/DELETE naturally', 'POST needs special handling']
                    },
                    {
                        id: 115,
                        text: 'Pagination design?',
                        description: 'How would you design pagination for a large dataset?',
                        keyPoints: ['offset vs cursor', 'limit parameter', 'total count expensive', 'return next/prev links']
                    },
                    {
                        id: 116,
                        text: 'Cursor vs offset?',
                        description: 'When would you use cursor pagination over offset?',
                        keyPoints: ['offset: simple, can skip', 'cursor: consistent with inserts', 'offset slow on large tables', 'cursor for infinite scroll']
                    },
                    {
                        id: 117,
                        text: 'Partial failure handling?',
                        description: 'Some items in a batch request failed. How do you respond?',
                        keyPoints: ['return 207 Multi-Status', 'individual status per item', 'transaction or no transaction', 'retry guidance']
                    },
                    {
                        id: 118,
                        text: 'Circuit breaker?',
                        description: 'External service is flaky. How does circuit breaker pattern help?',
                        keyPoints: ['stops cascading failures', 'states: closed, open, half-open', 'fails fast when open', 'periodic retry in half-open']
                    },
                    {
                        id: 119,
                        text: 'Bulkhead pattern?',
                        description: 'How do you isolate failures in microservices?',
                        keyPoints: ['isolate resources per service', 'thread pool per dependency', 'limits blast radius', 'like ship compartments']
                    },
                    {
                        id: 120,
                        text: 'API gateway?',
                        description: 'What role does an API gateway play?',
                        keyPoints: ['single entry point', 'auth, rate limiting', 'request routing', 'response aggregation']
                    },
                    {
                        id: 121,
                        text: 'Backward compatibility?',
                        description: 'How do you ensure API changes don\'t break clients?',
                        keyPoints: ['additive changes only', 'deprecation notices', 'version negotiation', 'feature flags']
                    },
                    {
                        id: 122,
                        text: 'HATEOAS?',
                        description: 'What is HATEOAS and when is it useful?',
                        keyPoints: ['Hypermedia as engine of app state', 'response contains links', 'discoverable API', 'overkill for simple APIs']
                    },
                    {
                        id: 123,
                        text: 'OpenAPI spec?',
                        description: 'Why document your API with OpenAPI/Swagger?',
                        keyPoints: ['machine-readable spec', 'auto-generate clients', 'interactive docs', 'contract-first development']
                    },
                    {
                        id: 124,
                        text: 'Swagger generation?',
                        description: 'How do tools like FastAPI generate Swagger docs?',
                        keyPoints: ['introspects type hints', 'reads Pydantic models', 'extracts docstrings', 'auto-serves /docs']
                    },
                    {
                        id: 125,
                        text: 'Blue-green deployment?',
                        description: 'How does blue-green deployment reduce downtime?',
                        keyPoints: ['two identical environments', 'switch traffic instantly', 'easy rollback', 'doubles infrastructure cost']
                    },
                    {
                        id: 126,
                        text: 'Canary release?',
                        description: 'What\'s the difference between canary and blue-green?',
                        keyPoints: ['gradual traffic shift', 'test in production', 'monitor metrics', 'rollback if errors spike']
                    },
                    {
                        id: 127,
                        text: 'Graceful shutdown?',
                        description: 'How do you handle shutdown without dropping requests?',
                        keyPoints: ['stop accepting new requests', 'finish in-flight requests', 'drain timeout', 'SIGTERM handling']
                    },
                    {
                        id: 128,
                        text: 'Health checks?',
                        description: 'What should a health check endpoint actually check?',
                        keyPoints: ['shallow vs deep checks', 'database connectivity', 'external services', 'don\'t slow startup']
                    },
                    {
                        id: 129,
                        text: 'Liveness vs readiness?',
                        description: 'In Kubernetes, when to use liveness vs readiness probes?',
                        keyPoints: ['liveness: restarts container', 'readiness: removes from service', 'liveness for deadlocks', 'readiness for startup/deps']
                    },
                    {
                        id: 130,
                        text: 'Feature flags?',
                        description: 'How do feature flags help with deployments?',
                        keyPoints: ['decouple deploy from release', 'gradual rollout', 'A/B testing', 'kill switch for problems']
                    },
                ],
                resources: [
                    { title: 'FastAPI Docs', url: 'https://fastapi.tiangolo.com/' },
                    { title: 'Django Docs', url: 'https://docs.djangoproject.com/' },
                ]
            },
            {
                id: 'realtime',
                title: 'Real-time & Networking',
                icon: '🌐',
                color: '#3b82f6',
                questions: [
                    {
                        id: 131,
                        text: 'TCP vs HTTP vs WebSockets?',
                        description: 'Explain the differences between TCP, HTTP, and WebSockets.',
                        keyPoints: ['TCP is transport layer', 'HTTP is request-response', 'WebSockets is full-duplex', 'use case differences']
                    },
                    {
                        id: 132,
                        text: 'WebSocket handshake?',
                        description: 'How does the WebSocket handshake work?',
                        keyPoints: ['starts as HTTP upgrade', 'client sends Upgrade header', 'server responds 101', 'connection becomes bi-directional']
                    },
                    {
                        id: 133,
                        text: 'HTTP/2 vs WebSockets?',
                        description: 'When would you choose HTTP/2 server push over WebSockets?',
                        keyPoints: ['HTTP/2 for push resources', 'WebSockets for true bi-directional', 'HTTP/2 multiplexing', 'WebSockets for real-time apps']
                    },
                    {
                        id: 134,
                        text: 'Scaling sockets?',
                        description: 'How do you scale WebSocket connections across multiple servers?',
                        keyPoints: ['sticky sessions', 'pub/sub for message broadcast', 'Redis/Kafka as backbone', 'connection limits per server']
                    },
                    {
                        id: 135,
                        text: 'Sticky sessions?',
                        description: 'Why are sticky sessions important for WebSockets?',
                        keyPoints: ['connection is stateful', 'same server for lifecycle', 'load balancer hash by IP/cookie', 'or use shared state']
                    },
                    {
                        id: 136,
                        text: 'Redis pub/sub?',
                        description: 'How does Redis pub/sub help with WebSocket scaling?',
                        keyPoints: ['servers subscribe to channels', 'message broadcast to all', 'cross-server communication', 'not persistent by default']
                    },
                    {
                        id: 137,
                        text: 'Backpressure?',
                        description: 'What is backpressure and how do you handle it?',
                        keyPoints: ['producer faster than consumer', 'buffer overflow risk', 'slow down producer', 'drop or queue messages']
                    },
                    {
                        id: 138,
                        text: 'Heartbeats?',
                        description: 'Why use heartbeats in WebSocket connections?',
                        keyPoints: ['detect dead connections', 'ping/pong frames', 'keep connection alive', 'NAT/firewall timeout prevention']
                    },
                    {
                        id: 139,
                        text: 'Dead clients?',
                        description: 'How do you detect and handle dead WebSocket clients?',
                        keyPoints: ['ping/pong timeout', 'connection cleanup', 'resource recovery', 'graceful state cleanup']
                    },
                    {
                        id: 140,
                        text: 'Server restarts?',
                        description: 'How do you handle WebSocket clients when server restarts?',
                        keyPoints: ['graceful shutdown notification', 'client auto-reconnect', 'exponential backoff', 'state recovery on reconnect']
                    },
                    {
                        id: 141,
                        text: 'Load balancers?',
                        description: 'What load balancer considerations for WebSockets?',
                        keyPoints: ['sticky sessions or hash', 'connection timeout settings', 'health check bypass', 'Layer 7 awareness']
                    },
                    {
                        id: 142,
                        text: 'WebSocket security?',
                        description: 'What security considerations for WebSockets?',
                        keyPoints: ['use wss:// (TLS)', 'validate origin header', 'auth on connect', 'rate limiting']
                    },
                    {
                        id: 143,
                        text: 'Socket auth?',
                        description: 'How do you authenticate WebSocket connections?',
                        keyPoints: ['token in query string', 'auth message after connect', 'cookie if same origin', 'close on auth failure']
                    },
                    {
                        id: 144,
                        text: 'SSE?',
                        description: 'What is Server-Sent Events?',
                        keyPoints: ['server to client only', 'HTTP-based streaming', 'auto-reconnect built-in', 'simpler than WebSockets']
                    },
                    {
                        id: 145,
                        text: 'SSE vs WebSockets?',
                        description: 'When would you choose SSE over WebSockets?',
                        keyPoints: ['SSE for server push only', 'SSE simpler to implement', 'WebSockets for bi-directional', 'SSE has auto-reconnect']
                    },
                    {
                        id: 146,
                        text: 'Ordering?',
                        description: 'How do you maintain message ordering in real-time systems?',
                        keyPoints: ['sequence numbers', 'client-side buffering', 'server-side ordering', 'vector clocks for distributed']
                    },
                    {
                        id: 147,
                        text: 'Event replay?',
                        description: 'How do you implement event replay for missed messages?',
                        keyPoints: ['persist events with sequence', 'client tracks last seen', 'request gap fill on reconnect', 'event sourcing patterns']
                    },
                    {
                        id: 148,
                        text: 'Exactly-once?',
                        description: 'How do you achieve exactly-once delivery?',
                        keyPoints: ['idempotency keys', 'deduplication logic', 'acks with sequence', 'really hard in distributed']
                    },
                    {
                        id: 149,
                        text: 'Fan-out?',
                        description: 'What is fan-out and how do you implement it?',
                        keyPoints: ['one message to many clients', 'pub/sub pattern', 'room/channel abstraction', 'consider scale limits']
                    },
                    {
                        id: 150,
                        text: 'Chat design?',
                        description: 'High-level design for a chat application?',
                        keyPoints: ['connection management', 'message routing', 'presence tracking', 'message persistence']
                    },
                    {
                        id: 151,
                        text: 'Live auction design?',
                        description: 'How would you design a real-time auction system?',
                        keyPoints: ['bid ordering', 'time synchronization', 'optimistic updates', 'conflict resolution']
                    },
                    {
                        id: 152,
                        text: 'Collaborative editor?',
                        description: 'How do collaborative editors handle concurrent edits?',
                        keyPoints: ['OT or CRDT', 'operation transformation', 'conflict-free merging', 'cursor position sync']
                    },
                    {
                        id: 153,
                        text: 'Race conditions?',
                        description: 'How do you prevent race conditions in real-time updates?',
                        keyPoints: ['optimistic locking', 'version checks', 'atomic operations', 'conflict detection']
                    },
                    {
                        id: 154,
                        text: 'Flood handling?',
                        description: 'How do you handle message floods?',
                        keyPoints: ['rate limiting per client', 'queue with backpressure', 'drop or throttle', 'prioritize important messages']
                    },
                    {
                        id: 155,
                        text: 'WebSocket failures?',
                        description: 'How do you handle WebSocket connection failures gracefully?',
                        keyPoints: ['auto-reconnect with backoff', 'offline message queue', 'sync state on reconnect', 'UI feedback for status']
                    },
                ],
                resources: [
                    { title: 'WebSocket API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' },
                    { title: 'Socket.io', url: 'https://socket.io/docs/' },
                ]
            },
            {
                id: 'security',
                title: 'Security & Auth',
                icon: '🔐',
                color: '#ef4444',
                questions: [
                    {
                        id: 156,
                        text: 'OAuth2?',
                        description: 'Walk me through the OAuth2 authorization code flow.',
                        keyPoints: ['user redirected to provider', 'provider returns auth code', 'backend exchanges for tokens', 'refresh token for renewals']
                    },
                    {
                        id: 157,
                        text: 'JWT vs cookies?',
                        description: 'When would you use JWTs vs session cookies?',
                        keyPoints: ['JWT stateless, in header', 'cookies auto-sent, have CSRF', 'JWT for APIs/mobile', 'cookies for traditional web']
                    },
                    {
                        id: 158,
                        text: 'Refresh tokens?',
                        description: 'Why do we need refresh tokens if we have access tokens?',
                        keyPoints: ['access token short-lived', 'refresh token gets new access', 'reduces attack window', 'can be revoked server-side']
                    },
                    {
                        id: 159,
                        text: 'Token expiry?',
                        description: 'How do you set token expiry times?',
                        keyPoints: ['access: minutes to hours', 'refresh: days to weeks', 'balance security vs UX', 'sliding expiration option']
                    },
                    {
                        id: 160,
                        text: 'CSRF vs XSS?',
                        description: 'What\'s the difference between CSRF and XSS attacks?',
                        keyPoints: ['CSRF: forged requests by victim', 'XSS: injected scripts', 'CSRF needs auth cookies', 'XSS steals data/tokens']
                    },
                    {
                        id: 161,
                        text: 'Password hashing?',
                        description: 'Why can\'t you just encrypt passwords?',
                        keyPoints: ['hash is one-way', 'encryption is reversible', 'attacker can\'t decrypt hash', 'use slow hash functions']
                    },
                    {
                        id: 162,
                        text: 'bcrypt vs sha?',
                        description: 'Why use bcrypt over SHA-256 for passwords?',
                        keyPoints: ['bcrypt intentionally slow', 'SHA fast = bad for passwords', 'bcrypt has built-in salt', 'work factor adjustable']
                    },
                    {
                        id: 163,
                        text: 'Salting?',
                        description: 'What\'s the purpose of salting passwords?',
                        keyPoints: ['random data added to password', 'prevents rainbow tables', 'unique per user', 'stored with hash']
                    },
                    {
                        id: 164,
                        text: 'Rate limiting?',
                        description: 'How does rate limiting protect against attacks?',
                        keyPoints: ['limits requests per time', 'prevents brute force', 'token bucket algorithm', 'per IP or per user']
                    },
                    {
                        id: 165,
                        text: 'Brute force protection?',
                        description: 'How do you protect login endpoints from brute force?',
                        keyPoints: ['rate limiting', 'account lockout', 'CAPTCHA after failures', 'exponential backoff']
                    },
                    {
                        id: 166,
                        text: 'Webhook verification?',
                        description: 'How do you verify webhooks are from legitimate sources?',
                        keyPoints: ['HMAC signature', 'shared secret', 'timestamp to prevent replay', 'verify before processing']
                    },
                    {
                        id: 167,
                        text: 'API key vs OAuth?',
                        description: 'When would you use API keys vs OAuth?',
                        keyPoints: ['API key: server-to-server', 'OAuth: user delegation', 'API key simpler', 'OAuth more granular']
                    },
                    {
                        id: 168,
                        text: 'RBAC vs ABAC?',
                        description: 'Explain role-based vs attribute-based access control.',
                        keyPoints: ['RBAC: permissions via roles', 'ABAC: policy on attributes', 'RBAC simpler', 'ABAC more flexible']
                    },
                    {
                        id: 169,
                        text: 'Least privilege?',
                        description: 'How do you implement least privilege access?',
                        keyPoints: ['minimal necessary permissions', 'default deny', 'regular access reviews', 'time-limited access']
                    },
                    {
                        id: 170,
                        text: 'Zero trust?',
                        description: 'What is zero trust architecture?',
                        keyPoints: ['never trust, always verify', 'authenticate every request', 'micro-segmentation', 'assume breach']
                    },
                    {
                        id: 171,
                        text: 'CORS?',
                        description: 'Why do we need CORS and how does it work?',
                        keyPoints: ['browser security policy', 'prevents cross-origin requests', 'preflight OPTIONS request', 'server whitelists origins']
                    },
                    {
                        id: 172,
                        text: 'SameSite?',
                        description: 'What does the SameSite cookie attribute do?',
                        keyPoints: ['controls cross-site cookie sending', 'Strict: same site only', 'Lax: safe methods cross-site', 'None: requires Secure']
                    },
                    {
                        id: 173,
                        text: 'HTTPS handshake?',
                        description: 'Walk me through the TLS handshake.',
                        keyPoints: ['client hello with ciphers', 'server responds with cert', 'key exchange for session', 'encrypted communication begins']
                    },
                    {
                        id: 174,
                        text: 'Certificate pinning?',
                        description: 'What is certificate pinning and when to use it?',
                        keyPoints: ['hardcode expected cert', 'prevents MITM attacks', 'used in mobile apps', 'difficult to update']
                    },
                    {
                        id: 175,
                        text: 'MITM?',
                        description: 'How do man-in-the-middle attacks work?',
                        keyPoints: ['attacker intercepts traffic', 'can read/modify data', 'HTTPS prevents it', 'cert validation essential']
                    },
                ],
                resources: [
                    { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
                    { title: 'Auth0 Docs', url: 'https://auth0.com/docs/' },
                ]
            },
            {
                id: 'ai',
                title: 'AI & LLMs',
                icon: '🤖',
                color: '#10b981',
                questions: [
                    {
                        id: 176,
                        text: 'LLM context?',
                        description: 'Our LLM is forgetting earlier context. What\'s happening?',
                        keyPoints: ['limited context window', 'tokens = input + output', 'truncation strategies', 'summarize long history']
                    },
                    {
                        id: 177,
                        text: 'Hallucination?',
                        description: 'The AI confidently gave wrong information. How do we handle hallucinations?',
                        keyPoints: ['model invents facts', 'cite sources with RAG', 'temperature affects it', 'verify critical info']
                    },
                    {
                        id: 178,
                        text: 'Temperature?',
                        description: 'What does the temperature parameter do?',
                        keyPoints: ['controls randomness', 'low = deterministic', 'high = creative', '0 for exact tasks']
                    },
                    {
                        id: 179,
                        text: 'Prompt injection?',
                        description: 'Users are bypassing our AI restrictions. What is prompt injection?',
                        keyPoints: ['user overrides instructions', 'ignore previous prompt attacks', 'sanitize user input', 'validate outputs']
                    },
                    {
                        id: 180,
                        text: 'System vs user prompts?',
                        description: 'What\'s the difference between system and user prompts?',
                        keyPoints: ['system sets behavior/context', 'user is the actual query', 'system more privileged', 'few-shot examples in system']
                    },
                    {
                        id: 181,
                        text: 'Tokenization?',
                        description: 'Why does the same text use different token counts in different models?',
                        keyPoints: ['splits text into tokens', 'model-specific vocab', 'affects pricing', 'non-English uses more tokens']
                    },
                    {
                        id: 182,
                        text: 'Latency strategies?',
                        description: 'Our AI endpoint is too slow. How do we reduce latency?',
                        keyPoints: ['streaming responses', 'shorter prompts', 'caching', 'faster/smaller models']
                    },
                    {
                        id: 183,
                        text: 'Caching AI?',
                        description: 'Can we cache AI responses?',
                        keyPoints: ['exact match caching', 'semantic similarity cache', 'careful with dynamic content', 'cache embeddings']
                    },
                    {
                        id: 184,
                        text: 'Embeddings?',
                        description: 'What are embeddings and how are they used?',
                        keyPoints: ['vector representation of text', 'similar meaning = close vectors', 'used for search/RAG', 'model-specific dimensions']
                    },
                    {
                        id: 185,
                        text: 'RAG?',
                        description: 'How does RAG help with knowledge-based questions?',
                        keyPoints: ['Retrieval Augmented Generation', 'embed and search knowledge base', 'inject relevant docs in prompt', 'reduces hallucination']
                    },
                    {
                        id: 186,
                        text: 'Vector DB?',
                        description: 'Why do we need a vector database?',
                        keyPoints: ['stores embeddings efficiently', 'similarity search at scale', 'Pinecone, Weaviate, Chroma', 'indexes for fast lookup']
                    },
                    {
                        id: 187,
                        text: 'Cost control?',
                        description: 'Our AI bill is too high. How do we control costs?',
                        keyPoints: ['shorten prompts', 'use cheaper models', 'cache responses', 'batch requests']
                    },
                    {
                        id: 188,
                        text: 'AI observability?',
                        description: 'How do you monitor AI in production?',
                        keyPoints: ['log inputs/outputs', 'track latency/costs', 'human feedback loops', 'detect quality regression']
                    },
                    {
                        id: 189,
                        text: 'Determinism?',
                        description: 'Why does the same prompt give different results?',
                        keyPoints: ['temperature > 0', 'sampling introduces randomness', 'set seed if available', 'temperature 0 more consistent']
                    },
                    {
                        id: 190,
                        text: 'When not to use AI?',
                        description: 'When should you avoid using LLMs?',
                        keyPoints: ['exact calculations', 'real-time requirements', 'when rules suffice', 'high-stakes decisions alone']
                    },
                ],
                resources: [
                    { title: 'OpenAI Docs', url: 'https://platform.openai.com/docs/' },
                    { title: 'LangChain', url: 'https://docs.langchain.com/' },
                ]
            },
            {
                id: 'debugging',
                title: 'Debugging & Observability',
                icon: '🔍',
                color: '#f59e0b',
                questions: [
                    {
                        id: 191,
                        text: 'Structured logging?',
                        description: 'Why should we use structured logs instead of string concatenation?',
                        keyPoints: ['JSON format', 'machine-parseable', 'queryable in log tools', 'consistent schema']
                    },
                    {
                        id: 192,
                        text: 'Logs vs print?',
                        description: 'Why shouldn\'t we use print statements for production logging?',
                        keyPoints: ['no log levels', 'no timestamps', 'can\'t route/filter', 'blocks on stdout']
                    },
                    {
                        id: 193,
                        text: 'Correlation ID?',
                        description: 'How do you trace a request across microservices?',
                        keyPoints: ['unique ID per request', 'passed in headers', 'included in all logs', 'enables distributed tracing']
                    },
                    {
                        id: 194,
                        text: 'Tracing vs metrics?',
                        description: 'When would you use distributed tracing vs metrics?',
                        keyPoints: ['tracing: individual requests', 'metrics: aggregates', 'tracing for debugging', 'metrics for monitoring']
                    },
                    {
                        id: 195,
                        text: 'Debug memory leak?',
                        description: 'Memory keeps growing. How do you find a memory leak?',
                        keyPoints: ['heap snapshots over time', 'compare retained objects', 'look for growing arrays/maps', 'profiler tools']
                    },
                    {
                        id: 196,
                        text: 'Debug race?',
                        description: 'Intermittent bugs that only appear sometimes. Could it be a race condition?',
                        keyPoints: ['inconsistent behavior', 'timing-dependent', 'add sleep to expose', 'use thread sanitizers']
                    },
                    {
                        id: 197,
                        text: 'Debug slow endpoint?',
                        description: 'An endpoint is slow. Walk me through debugging it.',
                        keyPoints: ['add timing logs', 'find bottleneck', 'check DB queries', 'profile CPU/IO']
                    },
                    {
                        id: 198,
                        text: 'Flame graph?',
                        description: 'What is a flame graph and how does it help?',
                        keyPoints: ['visualizes call stack', 'width = time spent', 'spot expensive functions', 'CPU profiling tool']
                    },
                    {
                        id: 199,
                        text: 'Retry logic?',
                        description: 'How do you implement retry with backoff?',
                        keyPoints: ['exponential backoff', 'add jitter', 'max retry limit', 'only for transient errors']
                    },
                    {
                        id: 200,
                        text: 'When retries hurt?',
                        description: 'When can retries make things worse?',
                        keyPoints: ['retry storms', 'non-idempotent operations', 'downstream overwhelm', 'need circuit breaker']
                    },
                ],
                resources: [
                    { title: 'Grafana', url: 'https://grafana.com/docs/' },
                    { title: 'OpenTelemetry', url: 'https://opentelemetry.io/docs/' },
                ]
            },
        ]
    },
    {
        id: 'block3',
        title: 'Frontend & Flutter',
        description: 'React, Flutter, Build Tools, and Performance',
        icon: '🎨',
        color: '#ec4899',
        categories: [
            {
                id: 'react',
                title: 'React',
                icon: '⚛️',
                color: '#61dafb',
                questions: [
                    {
                        id: 201,
                        text: 'React reconciliation?',
                        description: 'How does React decide what to re-render?',
                        keyPoints: ['compares virtual DOM trees', 'diffing algorithm', 'updates only changed parts', 'O(n) heuristics']
                    },
                    {
                        id: 202,
                        text: 'Skip re-render?',
                        description: 'This component renders on every parent render. How do we prevent that?',
                        keyPoints: ['React.memo for function components', 'shouldComponentUpdate for class', 'check props equality', 'avoid inline objects/functions']
                    },
                    {
                        id: 203,
                        text: 'Keys?',
                        description: 'Why does React warn about missing keys in lists?',
                        keyPoints: ['stable identity for reconciliation', 'avoid index as key', 'keys should be unique', 'helps with reordering']
                    },
                    {
                        id: 204,
                        text: 'useState vs useRef?',
                        description: 'When would you use useRef instead of useState?',
                        keyPoints: ['useState triggers re-render', 'useRef persists without render', 'ref for DOM access', 'ref for mutable values']
                    },
                    {
                        id: 205,
                        text: 'useEffect deps?',
                        description: 'Why does React complain about missing dependencies?',
                        keyPoints: ['deps control when effect runs', 'missing deps = stale closures', 'over-specified = infinite loop', 'exhaustive-deps lint rule']
                    },
                    {
                        id: 206,
                        text: 'Infinite loops?',
                        description: 'This useEffect runs infinitely. What\'s wrong?',
                        keyPoints: ['setting state in effect', 'object/array in deps', 'missing cleanup', 'useCallback/useMemo deps']
                    },
                    {
                        id: 207,
                        text: 'useMemo vs useCallback?',
                        description: 'What\'s the difference between useMemo and useCallback?',
                        keyPoints: ['useMemo caches value', 'useCallback caches function', 'both take deps', 'useCallback = useMemo(() => fn)']
                    },
                    {
                        id: 208,
                        text: 'Memoization cost?',
                        description: 'Should we memoize everything?',
                        keyPoints: ['memoization has overhead', 'only for expensive operations', 'profile before optimizing', 'premature optimization bad']
                    },
                    {
                        id: 209,
                        text: 'Controlled inputs?',
                        description: 'What\'s a controlled vs uncontrolled input?',
                        keyPoints: ['controlled: React owns state', 'uncontrolled: DOM owns state', 'controlled for validation', 'uncontrolled with ref']
                    },
                    {
                        id: 210,
                        text: 'Lifting state?',
                        description: 'Two sibling components need to share state. How?',
                        keyPoints: ['move state to common parent', 'pass down as props', 'pass setter for updates', 'single source of truth']
                    },
                    {
                        id: 211,
                        text: 'Prop drilling?',
                        description: 'Props are passed through 5 components. How do we avoid this?',
                        keyPoints: ['Context API', 'component composition', 'state management libraries', 'render props pattern']
                    },
                    {
                        id: 212,
                        text: 'Context performance?',
                        description: 'Context updates cause all consumers to re-render. How to optimize?',
                        keyPoints: ['split contexts by update frequency', 'memoize context value', 'useMemo for value object', 'consider state libraries']
                    },
                    {
                        id: 213,
                        text: 'Redux usage?',
                        description: 'When would you recommend Redux?',
                        keyPoints: ['complex shared state', 'predictable state updates', 'time-travel debugging', 'most apps don\'t need it']
                    },
                    {
                        id: 214,
                        text: 'Redux vs Zustand?',
                        description: 'How does Zustand compare to Redux?',
                        keyPoints: ['Zustand less boilerplate', 'simpler API', 'no providers needed', 'Redux more ecosystem']
                    },
                    {
                        id: 215,
                        text: 'Boilerplate?',
                        description: 'Redux has too much boilerplate. What are the alternatives?',
                        keyPoints: ['Redux Toolkit', 'Zustand', 'Jotai', 'Recoil']
                    },
                    {
                        id: 216,
                        text: 'Hydration?',
                        description: 'What is hydration in React SSR?',
                        keyPoints: ['attaches event handlers', 'makes static HTML interactive', 'must match server output', 'hydration mismatch errors']
                    },
                    {
                        id: 217,
                        text: 'SSR vs CSR?',
                        description: 'When would you use SSR over CSR?',
                        keyPoints: ['SSR for SEO', 'SSR faster first paint', 'CSR more interactive', 'SSR complex server setup']
                    },
                    {
                        id: 218,
                        text: 'Code splitting?',
                        description: 'Our bundle is too large. How does code splitting help?',
                        keyPoints: ['lazy load components', 'React.lazy + Suspense', 'smaller initial bundle', 'load on demand']
                    },
                    {
                        id: 219,
                        text: 'Lazy loading?',
                        description: 'How do you implement lazy loading in React?',
                        keyPoints: ['React.lazy for components', 'Suspense for fallback', 'dynamic import()', 'route-based splitting']
                    },
                    {
                        id: 220,
                        text: 'Tree shaking?',
                        description: 'How does tree shaking reduce bundle size?',
                        keyPoints: ['removes unused exports', 'requires ES modules', 'bundler analyzes imports', 'side effects config']
                    },
                    {
                        id: 221,
                        text: 'Virtual DOM?',
                        description: 'What is the Virtual DOM and why does React use it?',
                        keyPoints: ['in-memory representation', 'diffing is faster', 'batches DOM updates', 'cross-platform']
                    },
                    {
                        id: 222,
                        text: 'Batched updates?',
                        description: 'Why doesn\'t React update after every setState?',
                        keyPoints: ['batches for performance', 'single re-render', 'React 18 auto-batches', 'flushSync to force']
                    },
                    {
                        id: 223,
                        text: 'Error boundaries?',
                        description: 'Child component throws. How do we prevent whole app crash?',
                        keyPoints: ['class component only', 'static getDerivedStateFromError', 'componentDidCatch', 'fallback UI']
                    },
                    {
                        id: 224,
                        text: 'Suspense?',
                        description: 'What is Suspense for?',
                        keyPoints: ['loading states declaratively', 'works with lazy components', 'React 18 data fetching', 'fallback prop']
                    },
                    {
                        id: 225,
                        text: 'Concurrent rendering?',
                        description: 'What does concurrent rendering enable?',
                        keyPoints: ['interruptible rendering', 'prioritize user input', 'prevents blocking', 'React 18 feature']
                    },
                    {
                        id: 226,
                        text: 'Fiber?',
                        description: 'What is React Fiber?',
                        keyPoints: ['new reconciliation engine', 'enables concurrent mode', 'incremental rendering', 'priority-based scheduling']
                    },
                    {
                        id: 227,
                        text: 'Reconciliation algorithm?',
                        description: 'How does React\'s diffing algorithm work?',
                        keyPoints: ['same type = update', 'different type = replace', 'keys for lists', 'breadth-first tree walk']
                    },
                    {
                        id: 228,
                        text: 'Synthetic events?',
                        description: 'Why does React use synthetic events?',
                        keyPoints: ['cross-browser consistency', 'event pooling (old)', 'normalized properties', 'event delegation']
                    },
                    {
                        id: 229,
                        text: 'Event delegation?',
                        description: 'How does React handle events differently?',
                        keyPoints: ['single handler at root', 'bubbles up to root', 'more efficient', 'works with portals']
                    },
                    {
                        id: 230,
                        text: 'Ref forwarding?',
                        description: 'Parent needs ref to child\'s DOM. How?',
                        keyPoints: ['forwardRef wrapper', 'passes ref through', 'useful for design systems', 'second argument']
                    },
                    {
                        id: 231,
                        text: 'Portal?',
                        description: 'Modal should render outside parent div. How?',
                        keyPoints: ['createPortal', 'renders to different DOM node', 'events still bubble in React', 'good for modals/tooltips']
                    },
                    {
                        id: 232,
                        text: 'Fragment?',
                        description: 'I need to return multiple elements. Is a wrapper div bad?',
                        keyPoints: ['Fragment groups without DOM', '<> shorthand', 'key on Fragment if needed', 'avoids unnecessary divs']
                    },
                    {
                        id: 233,
                        text: 'Strict mode?',
                        description: 'What does React Strict Mode do?',
                        keyPoints: ['double-invokes functions', 'detects side effects', 'warns about legacy features', 'dev only']
                    },
                    {
                        id: 234,
                        text: 'DevTools?',
                        description: 'How do you debug React apps?',
                        keyPoints: ['React DevTools extension', 'inspect component tree', 'see props/state', 'profiler tab']
                    },
                    {
                        id: 235,
                        text: 'Profiling?',
                        description: 'How do you find render performance issues?',
                        keyPoints: ['Profiler in DevTools', 'flame graph', 'highlights re-renders', 'commit chart']
                    },
                    {
                        id: 236,
                        text: 'Why React fast?',
                        description: 'What makes React performant?',
                        keyPoints: ['virtual DOM batching', 'efficient diffing', 'selective updates', 'concurrent rendering']
                    },
                    {
                        id: 237,
                        text: 'When React slow?',
                        description: 'When can React apps be slow?',
                        keyPoints: ['large lists without virtualization', 'too many re-renders', 'expensive computations in render', 'deep component trees']
                    },
                    {
                        id: 238,
                        text: 'Memory leaks?',
                        description: 'What causes memory leaks in React?',
                        keyPoints: ['missing useEffect cleanup', 'subscriptions not unsubscribed', 'timers not cleared', 'refs to unmounted components']
                    },
                    {
                        id: 239,
                        text: 'Custom hooks?',
                        description: 'When would you create a custom hook?',
                        keyPoints: ['reusable stateful logic', 'starts with use', 'can use other hooks', 'extract common patterns']
                    },
                    {
                        id: 240,
                        text: 'Testing React?',
                        description: 'How do you test React components?',
                        keyPoints: ['React Testing Library', 'test behavior not implementation', 'user-centric queries', 'Jest for assertions']
                    },
                ],
                resources: [
                    { title: 'React Docs', url: 'https://react.dev/' },
                    { title: 'React Patterns', url: 'https://reactpatterns.com/' },
                ]
            },
            {
                id: 'buildtools',
                title: 'Build Tools',
                icon: '📦',
                color: '#f59e0b',
                questions: [
                    {
                        id: 241,
                        text: 'Vite vs Webpack?',
                        description: 'We\'re starting a new project. Why choose Vite over Webpack?',
                        keyPoints: ['Vite uses native ES modules', 'faster dev server', 'Webpack more configurable', 'Vite simpler config']
                    },
                    {
                        id: 242,
                        text: 'HMR?',
                        description: 'How does Hot Module Replacement work?',
                        keyPoints: ['updates modules without refresh', 'preserves app state', 'websocket connection', 'faster development']
                    },
                    {
                        id: 243,
                        text: 'ES modules?',
                        description: 'What are ES modules and why do they matter for bundling?',
                        keyPoints: ['native browser support', 'static imports', 'enables tree shaking', 'import/export syntax']
                    },
                    {
                        id: 244,
                        text: 'Bundlers?',
                        description: 'Why do we need bundlers at all?',
                        keyPoints: ['combine many files', 'optimize for production', 'transform code', 'handle dependencies']
                    },
                    {
                        id: 245,
                        text: 'Tree shaking internals?',
                        description: 'How does tree shaking actually work under the hood?',
                        keyPoints: ['static analysis of imports', 'marks unused code', 'removes in production', 'requires ES modules']
                    },
                    {
                        id: 246,
                        text: 'Dead code elimination?',
                        description: 'What\'s the difference between tree shaking and dead code elimination?',
                        keyPoints: ['tree shaking: unused exports', 'DCE: unreachable code', 'both reduce bundle', 'complementary techniques']
                    },
                    {
                        id: 247,
                        text: 'Source maps?',
                        description: 'Why do we need source maps in production?',
                        keyPoints: ['maps minified to source', 'debug production errors', 'security consideration', 'can be private']
                    },
                    {
                        id: 248,
                        text: 'Prod vs dev?',
                        description: 'What\'s different between production and development builds?',
                        keyPoints: ['prod: minified, optimized', 'dev: source maps, HMR', 'dev: faster builds', 'prod: smaller bundles']
                    },
                    {
                        id: 249,
                        text: 'Asset hashing?',
                        description: 'Why do bundlers add hashes to filenames?',
                        keyPoints: ['cache busting', 'content-based hash', 'unchanged = same hash', 'long-term caching']
                    },
                    {
                        id: 250,
                        text: 'Code splitting?',
                        description: 'How do you split code into separate bundles?',
                        keyPoints: ['dynamic imports', 'route-based splitting', 'vendor bundle', 'reduces initial load']
                    },
                    {
                        id: 251,
                        text: 'Dynamic imports?',
                        description: 'How do dynamic imports work?',
                        keyPoints: ['import() returns promise', 'creates separate chunk', 'loaded on demand', 'enables lazy loading']
                    },
                    {
                        id: 252,
                        text: 'Polyfills?',
                        description: 'When do you need polyfills?',
                        keyPoints: ['browser compatibility', 'adds missing features', 'increases bundle size', 'core-js, babel preset-env']
                    },
                    {
                        id: 253,
                        text: 'Babel vs SWC?',
                        description: 'Why would you use SWC instead of Babel?',
                        keyPoints: ['SWC written in Rust', 'much faster', 'Babel more plugins', 'SWC newer']
                    },
                    {
                        id: 254,
                        text: 'Transpilation?',
                        description: 'What is transpilation and why is it needed?',
                        keyPoints: ['converts modern to older JS', 'browser compatibility', 'also TypeScript to JS', 'JSX to JS']
                    },
                    {
                        id: 255,
                        text: 'Minification?',
                        description: 'What does minification do?',
                        keyPoints: ['removes whitespace', 'shortens variable names', 'smaller file size', 'harder to read']
                    },
                    {
                        id: 256,
                        text: 'Gzip vs brotli?',
                        description: 'Which compression should we use?',
                        keyPoints: ['brotli better compression', 'gzip more compatible', 'brotli slower to compress', 'both widely supported']
                    },
                    {
                        id: 257,
                        text: 'CDN?',
                        description: 'Why serve assets from a CDN?',
                        keyPoints: ['closer to users', 'reduces latency', 'offloads origin', 'better caching']
                    },
                    {
                        id: 258,
                        text: 'Caching?',
                        description: 'How do you set up caching for assets?',
                        keyPoints: ['Cache-Control headers', 'immutable for hashed files', 'ETags for validation', 'long max-age']
                    },
                    {
                        id: 259,
                        text: 'Cache busting?',
                        description: 'How do you bust the cache when content changes?',
                        keyPoints: ['change filename', 'query string (less ideal)', 'content hash in name', 'automatic with bundlers']
                    },
                    {
                        id: 260,
                        text: 'Reproducible builds?',
                        description: 'Why is build reproducibility important?',
                        keyPoints: ['same input = same output', 'lockfiles for deps', 'deterministic builds', 'debugging production']
                    },
                ],
                resources: [
                    { title: 'Vite Docs', url: 'https://vitejs.dev/' },
                    { title: 'Webpack Docs', url: 'https://webpack.js.org/' },
                ]
            },
            {
                id: 'flutter',
                title: 'Flutter',
                icon: '💙',
                color: '#02569b',
                questions: [
                    {
                        id: 261,
                        text: 'Widget vs Element?',
                        description: 'What\'s the difference between a Widget and an Element in Flutter?',
                        keyPoints: ['Widget is blueprint/config', 'Element is instantiation', 'Widgets are immutable', 'Elements persist']
                    },
                    {
                        id: 262,
                        text: 'Build frequency?',
                        description: 'Why does build() get called so often? Is that expensive?',
                        keyPoints: ['build is cheap', 'creates widget tree description', 'Flutter optimizes rendering', 'don\'t do heavy work in build']
                    },
                    {
                        id: 263,
                        text: 'Hot reload?',
                        description: 'How does Flutter hot reload work?',
                        keyPoints: ['injects updated code', 'preserves app state', 'rebuilds widget tree', 'doesn\'t restart app']
                    },
                    {
                        id: 264,
                        text: 'Skia?',
                        description: 'Why does Flutter use Skia instead of native widgets?',
                        keyPoints: ['consistent across platforms', 'full rendering control', 'no platform widget bridge', 'custom everything']
                    },
                    {
                        id: 265,
                        text: 'Native?',
                        description: 'How does Flutter compare to React Native?',
                        keyPoints: ['Flutter draws everything', 'RN wraps native widgets', 'Flutter more consistent', 'RN shares web ecosystem']
                    },
                    {
                        id: 266,
                        text: 'State management?',
                        description: 'What state management approaches does Flutter support?',
                        keyPoints: ['setState for local', 'Provider for simple DI', 'Bloc for complex', 'Riverpod modernized Provider']
                    },
                    {
                        id: 267,
                        text: 'setState pitfalls?',
                        description: 'What are the problems with using setState everywhere?',
                        keyPoints: ['rebuilds whole subtree', 'hard to share state', 'business logic in UI', 'doesn\'t scale']
                    },
                    {
                        id: 268,
                        text: 'InheritedWidget?',
                        description: 'How does InheritedWidget work?',
                        keyPoints: ['passes data down tree', 'widgets can subscribe', 'Provider built on it', 'O(1) lookup']
                    },
                    {
                        id: 269,
                        text: 'Provider vs Bloc?',
                        description: 'When would you use Provider vs Bloc?',
                        keyPoints: ['Provider simpler', 'Bloc for complex logic', 'Bloc separates concerns', 'Provider for most apps']
                    },
                    {
                        id: 270,
                        text: 'BuildContext?',
                        description: 'What is BuildContext and why is it important?',
                        keyPoints: ['position in widget tree', 'access to ancestors', 'needed for lookups', 'don\'t use after async gap']
                    },
                    {
                        id: 271,
                        text: 'Widget immutability?',
                        description: 'Why are widgets immutable?',
                        keyPoints: ['easier to diff', 'predictable rendering', 'const constructors', 'rebuild vs mutate']
                    },
                    {
                        id: 272,
                        text: 'Repaint boundaries?',
                        description: 'How do you optimize painting in Flutter?',
                        keyPoints: ['RepaintBoundary isolates repaints', 'caches painted widget', 'use for static parts', 'DevTools shows repaints']
                    },
                    {
                        id: 273,
                        text: 'Isolates?',
                        description: 'How do you run heavy computation without freezing the UI?',
                        keyPoints: ['compute() for simple tasks', 'Isolates for background', 'no shared memory', 'message passing']
                    },
                    {
                        id: 274,
                        text: 'Platform channels?',
                        description: 'How does Flutter communicate with native code?',
                        keyPoints: ['MethodChannel for invocation', 'EventChannel for streams', 'binary messaging', 'serialized messages']
                    },
                    {
                        id: 275,
                        text: 'Native plugins?',
                        description: 'How do Flutter plugins work?',
                        keyPoints: ['Dart + native code', 'platform specific impl', 'publishes to pub.dev', 'MethodChannel bridge']
                    },
                    {
                        id: 276,
                        text: 'Flutter profiling?',
                        description: 'How do you profile a Flutter app?',
                        keyPoints: ['DevTools suite', 'timeline view', 'memory profiler', 'widget rebuild tracker']
                    },
                    {
                        id: 277,
                        text: 'Jank?',
                        description: 'What causes jank in Flutter and how do you fix it?',
                        keyPoints: ['frame takes >16ms', 'heavy build methods', 'shader compilation', 'use profile mode to find']
                    },
                    {
                        id: 278,
                        text: 'Memory leaks?',
                        description: 'What causes memory leaks in Flutter?',
                        keyPoints: ['controllers not disposed', 'streams not closed', 'callbacks holding references', 'DevTools memory view']
                    },
                    {
                        id: 279,
                        text: 'Gestures?',
                        description: 'How does Flutter\'s gesture system work?',
                        keyPoints: ['GestureDetector widget', 'gesture arena for conflicts', 'winner takes gesture', 'raw pointer events']
                    },
                    {
                        id: 280,
                        text: 'Accessibility?',
                        description: 'How do you make Flutter apps accessible?',
                        keyPoints: ['Semantics widget', 'labels for screen readers', 'sufficient contrast', 'keyboard navigation']
                    },
                    {
                        id: 281,
                        text: 'Theming?',
                        description: 'How does theming work in Flutter?',
                        keyPoints: ['ThemeData in MaterialApp', 'Theme.of(context) access', 'dark/light variants', 'custom theme extensions']
                    },
                    {
                        id: 282,
                        text: 'Localization?',
                        description: 'How do you add multiple languages to a Flutter app?',
                        keyPoints: ['flutter_localizations', 'ARB files for strings', 'locale selection', 'generated code']
                    },
                    {
                        id: 283,
                        text: 'Animations?',
                        description: 'What animation options does Flutter provide?',
                        keyPoints: ['AnimationController + Tween', 'implicit animations', 'Hero animations', 'Rive/Lottie for complex']
                    },
                    {
                        id: 284,
                        text: 'Frame pipeline?',
                        description: 'What happens when Flutter renders a frame?',
                        keyPoints: ['build widget tree', 'layout pass', 'paint pass', 'composite to GPU']
                    },
                    {
                        id: 285,
                        text: 'App size?',
                        description: 'Why are Flutter apps large and how to reduce size?',
                        keyPoints: ['includes engine (~5MB)', 'use --split-per-abi', 'deferred loading', 'tree shake assets']
                    },
                ],
                resources: [
                    { title: 'Flutter Docs', url: 'https://docs.flutter.dev/' },
                    { title: 'pub.dev', url: 'https://pub.dev/' },
                ]
            },
            {
                id: 'webperf',
                title: 'Web Performance',
                icon: '⚡',
                color: '#10b981',
                questions: [
                    {
                        id: 286,
                        text: 'Critical rendering path?',
                        description: 'What is the critical rendering path?',
                        keyPoints: ['HTML → DOM', 'CSS → CSSOM', 'combine → render tree', 'layout → paint']
                    },
                    {
                        id: 287,
                        text: 'Layout thrashing?',
                        description: 'What causes layout thrashing and how do you fix it?',
                        keyPoints: ['read-write-read cycle', 'forces synchronous layout', 'batch reads then writes', 'use requestAnimationFrame']
                    },
                    {
                        id: 288,
                        text: 'Reflow vs repaint?',
                        description: 'What\'s the difference between reflow and repaint?',
                        keyPoints: ['reflow: geometry changes', 'repaint: visual changes', 'reflow triggers repaint', 'reflow more expensive']
                    },
                    {
                        id: 289,
                        text: 'CSS rendering?',
                        description: 'Which CSS properties are expensive to animate?',
                        keyPoints: ['transform/opacity cheap', 'width/height cause reflow', 'use will-change carefully', 'GPU acceleration']
                    },
                    {
                        id: 290,
                        text: 'Main thread?',
                        description: 'Why does the main thread get blocked?',
                        keyPoints: ['JS is single-threaded', 'long tasks block UI', 'parsing, layout, paint', 'keep tasks under 50ms']
                    },
                    {
                        id: 291,
                        text: 'Web workers?',
                        description: 'When would you use Web Workers?',
                        keyPoints: ['heavy computation', 'runs in background', 'no DOM access', 'message passing']
                    },
                    {
                        id: 292,
                        text: 'Service workers?',
                        description: 'How do service workers enable offline apps?',
                        keyPoints: ['intercepts network requests', 'caches responses', 'enables offline', 'push notifications']
                    },
                    {
                        id: 293,
                        text: 'Offline-first?',
                        description: 'How do you design an offline-first app?',
                        keyPoints: ['cache static assets', 'sync when online', 'optimistic UI', 'conflict resolution']
                    },
                    {
                        id: 294,
                        text: 'Accessibility audits?',
                        description: 'How do you audit accessibility?',
                        keyPoints: ['Lighthouse accessibility', 'axe-core', 'screen reader testing', 'keyboard navigation']
                    },
                    {
                        id: 295,
                        text: 'Lighthouse?',
                        description: 'What does Lighthouse measure?',
                        keyPoints: ['performance metrics', 'accessibility score', 'SEO basics', 'best practices']
                    },
                    {
                        id: 296,
                        text: 'FCP/LCP/CLS?',
                        description: 'What are Core Web Vitals?',
                        keyPoints: ['FCP: first content paint', 'LCP: largest content paint', 'CLS: cumulative layout shift', 'INP: interaction to next paint']
                    },
                    {
                        id: 297,
                        text: 'Debounce vs throttle?',
                        description: 'When would you use debounce vs throttle?',
                        keyPoints: ['debounce: wait for pause', 'throttle: limit rate', 'debounce for search', 'throttle for scroll']
                    },
                    {
                        id: 298,
                        text: 'Virtualization?',
                        description: 'How does list virtualization work?',
                        keyPoints: ['only render visible items', 'recycle DOM nodes', 'react-window, react-virtualized', 'huge lists performant']
                    },
                    {
                        id: 299,
                        text: 'Progressive loading?',
                        description: 'What are progressive loading strategies?',
                        keyPoints: ['lazy load images', 'placeholders/skeleton', 'intersection observer', 'priority hints']
                    },
                    {
                        id: 300,
                        text: 'Perceived performance?',
                        description: 'How do you improve perceived performance?',
                        keyPoints: ['skeleton screens', 'optimistic updates', 'instant feedback', 'progressive rendering']
                    },
                ],
                resources: [
                    { title: 'web.dev', url: 'https://web.dev/' },
                    { title: 'Lighthouse', url: 'https://developer.chrome.com/docs/lighthouse/' },
                ]
            },
        ]
    },
    {
        id: 'block4',
        title: 'Databases, Cloud, DevOps',
        description: 'Deep DB internals, Docker, AWS, and Terraform',
        icon: '☁️',
        color: '#f59e0b',
        categories: [
            {
                id: 'dbinternals',
                title: 'Database Internals',
                icon: '🗃️',
                color: '#f472b6',
                questions: [
                    {
                        id: 301,
                        text: 'B-tree internals?',
                        description: 'How does a B-tree index work under the hood?',
                        keyPoints: ['balanced tree structure', 'sorted keys in nodes', 'O(log n) lookups', 'nodes fit in pages']
                    },
                    {
                        id: 302,
                        text: 'Secondary indexes?',
                        description: 'What\'s the difference between a secondary and primary index?',
                        keyPoints: ['primary: clustered, row order', 'secondary: points to primary', 'secondary needs extra lookup', 'covering index avoids it']
                    },
                    {
                        id: 303,
                        text: 'Covering index?',
                        description: 'What is a covering index and when to use it?',
                        keyPoints: ['includes all query columns', 'no table lookup needed', 'speeds up reads', 'trades write performance']
                    },
                    {
                        id: 304,
                        text: 'Index scan?',
                        description: 'When does a database do an index scan vs table scan?',
                        keyPoints: ['index: selective queries', 'table: large result sets', 'optimizer decides', 'statistics matter']
                    },
                    {
                        id: 305,
                        text: 'Write amplification?',
                        description: 'What is write amplification in databases?',
                        keyPoints: ['more writes than data', 'WAL + table + indexes', 'LSM vs B-tree tradeoffs', 'affects SSD life']
                    },
                    {
                        id: 306,
                        text: 'WAL?',
                        description: 'What is Write-Ahead Logging and why is it important?',
                        keyPoints: ['log before data change', 'crash recovery', 'sequential writes fast', 'replay to recover']
                    },
                    {
                        id: 307,
                        text: 'Checkpoint?',
                        description: 'What is a database checkpoint?',
                        keyPoints: ['flushes dirty pages', 'reduces recovery time', 'periodic operation', 'marks safe point']
                    },
                    {
                        id: 308,
                        text: 'Vacuum?',
                        description: 'What does VACUUM do in PostgreSQL?',
                        keyPoints: ['reclaims dead tuples', 'updates visibility map', 'prevents wraparound', 'autovacuum default']
                    },
                    {
                        id: 309,
                        text: 'MVCC?',
                        description: 'How does MVCC enable concurrent reads and writes?',
                        keyPoints: ['multiple versions of rows', 'readers don\'t block writers', 'transaction sees snapshot', 'garbage collection needed']
                    },
                    {
                        id: 310,
                        text: 'Snapshot isolation?',
                        description: 'What is snapshot isolation?',
                        keyPoints: ['reads see consistent snapshot', 'no dirty reads', 'write-write conflicts', 'serializable stricter']
                    },
                    {
                        id: 311,
                        text: 'Hot rows?',
                        description: 'What are hot rows and how do you handle them?',
                        keyPoints: ['frequently updated rows', 'cause lock contention', 'partition by time', 'queue writes']
                    },
                    {
                        id: 312,
                        text: 'Lock escalation?',
                        description: 'What is lock escalation?',
                        keyPoints: ['many row locks → table lock', 'reduces memory', 'can hurt concurrency', 'threshold configurable']
                    },
                    {
                        id: 313,
                        text: 'Optimistic locking?',
                        description: 'How does optimistic locking work?',
                        keyPoints: ['version column', 'check on update', 'retry on conflict', 'good for low contention']
                    },
                    {
                        id: 314,
                        text: 'Phantom reads?',
                        description: 'What are phantom reads?',
                        keyPoints: ['new rows appear mid-transaction', 'range queries affected', 'serializable prevents', 'different from non-repeatable']
                    },
                    {
                        id: 315,
                        text: 'Deadlocks?',
                        description: 'How do databases handle deadlocks?',
                        keyPoints: ['circular wait on locks', 'detection algorithm', 'one transaction aborted', 'consistent lock order prevents']
                    },
                    {
                        id: 316,
                        text: 'Sharding?',
                        description: 'When and how would you shard a database?',
                        keyPoints: ['horizontal partitioning', 'choose shard key carefully', 'cross-shard queries expensive', 'rebalancing hard']
                    },
                    {
                        id: 317,
                        text: 'Consistent hashing?',
                        description: 'How does consistent hashing help with sharding?',
                        keyPoints: ['virtual ring', 'minimal remapping on change', 'vnodes for balance', 'used by dynamo-style DBs']
                    },
                    {
                        id: 318,
                        text: 'Replication lag?',
                        description: 'What causes replication lag and how do you handle it?',
                        keyPoints: ['async replication delay', 'read-your-writes problem', 'route reads to primary', 'or use sync replication']
                    },
                    {
                        id: 319,
                        text: 'Eventual consistency?',
                        description: 'What is eventual consistency?',
                        keyPoints: ['replicas converge eventually', 'CAP theorem tradeoff', 'conflict resolution needed', 'ok for some use cases']
                    },
                    {
                        id: 320,
                        text: 'Split brain?',
                        description: 'What is split brain in databases?',
                        keyPoints: ['network partition', 'both sides think primary', 'data diverges', 'quorum prevents']
                    },
                    {
                        id: 321,
                        text: 'Mongo indexes?',
                        description: 'How do MongoDB indexes differ from SQL?',
                        keyPoints: ['B-tree for most', 'compound indexes', 'sparse indexes option', 'explain() for analysis']
                    },
                    {
                        id: 322,
                        text: 'Aggregation pipeline?',
                        description: 'How does MongoDB aggregation pipeline work?',
                        keyPoints: ['stages process documents', '$match, $group, $project', 'can use indexes', 'memory limits']
                    },
                    {
                        id: 323,
                        text: 'Change streams?',
                        description: 'What are MongoDB change streams?',
                        keyPoints: ['real-time data changes', 'uses oplog', 'resumable', 'like CDC']
                    },
                    {
                        id: 324,
                        text: 'Joins in NoSQL?',
                        description: 'How do you handle relationships in NoSQL?',
                        keyPoints: ['embed related data', 'denormalize', '$lookup for joins', 'application-side joins']
                    },
                    {
                        id: 325,
                        text: 'Mongo migration?',
                        description: 'How do you migrate data in MongoDB?',
                        keyPoints: ['no strict schema', 'versioning in documents', 'gradual migration', 'handle both versions']
                    },
                    {
                        id: 326,
                        text: 'Mongo transactions?',
                        description: 'When would you use MongoDB transactions?',
                        keyPoints: ['multi-document updates', 'ACID across documents', 'performance overhead', 'prefer single-doc updates']
                    },
                    {
                        id: 327,
                        text: 'Mongo bad choice?',
                        description: 'When is MongoDB a bad choice?',
                        keyPoints: ['complex joins needed', 'strong consistency required', 'highly relational data', 'reporting/analytics']
                    },
                    {
                        id: 328,
                        text: 'SQL bad choice?',
                        description: 'When is a relational database a bad choice?',
                        keyPoints: ['rapidly changing schema', 'massive scale', 'unstructured data', 'real-time analytics']
                    },
                    {
                        id: 329,
                        text: 'Hot partition?',
                        description: 'What causes hot partitions?',
                        keyPoints: ['uneven key distribution', 'popular keys', 'monotonic keys bad', 'add entropy to keys']
                    },
                    {
                        id: 330,
                        text: 'Audit logs?',
                        description: 'How do you implement audit logging in databases?',
                        keyPoints: ['triggers or CDC', 'separate audit table', 'include timestamp/user', 'append-only']
                    },
                ],
                resources: [
                    { title: 'DDIA Book', url: 'https://dataintensive.net/' },
                    { title: 'MongoDB University', url: 'https://learn.mongodb.com/' },
                ]
            },
            {
                id: 'docker',
                title: 'Docker & Containers',
                icon: '🐳',
                color: '#2496ed',
                questions: [
                    {
                        id: 331,
                        text: 'Container definition?',
                        description: 'What is a container and how is it different from a VM?',
                        keyPoints: ['shares host kernel', 'isolated processes', 'lightweight', 'fast startup']
                    },
                    {
                        id: 332,
                        text: 'Namespaces?',
                        description: 'What are Linux namespaces and how do they enable containers?',
                        keyPoints: ['pid, net, mnt, user namespaces', 'isolate processes', 'own view of resources', 'kernel feature']
                    },
                    {
                        id: 333,
                        text: 'Image build?',
                        description: 'How does Docker build images?',
                        keyPoints: ['Dockerfile instructions', 'each step creates layer', 'layers are cached', 'order matters']
                    },
                    {
                        id: 334,
                        text: 'Layer caching?',
                        description: 'How does Docker layer caching work?',
                        keyPoints: ['layers are immutable', 'reuses unchanged layers', 'invalidates downstream', 'order dependencies for speed']
                    },
                    {
                        id: 335,
                        text: 'Alpine?',
                        description: 'Why use Alpine Linux for containers?',
                        keyPoints: ['~5MB base image', 'smaller attack surface', 'musl libc differences', 'slower if glibc needed']
                    },
                    {
                        id: 336,
                        text: 'ENTRYPOINT vs CMD?',
                        description: 'What\'s the difference between ENTRYPOINT and CMD?',
                        keyPoints: ['ENTRYPOINT: main command', 'CMD: default arguments', 'CMD overridable', 'both work together']
                    },
                    {
                        id: 337,
                        text: 'COPY vs ADD?',
                        description: 'When would you use ADD instead of COPY?',
                        keyPoints: ['COPY just copies files', 'ADD can extract tars', 'ADD can fetch URLs', 'prefer COPY usually']
                    },
                    {
                        id: 338,
                        text: 'Volume vs bind?',
                        description: 'What\'s the difference between volumes and bind mounts?',
                        keyPoints: ['volumes Docker-managed', 'bind mounts to host path', 'volumes more portable', 'bind for dev']
                    },
                    {
                        id: 339,
                        text: 'Bridge network?',
                        description: 'How does Docker bridge networking work?',
                        keyPoints: ['default network mode', 'containers on virtual network', 'NAT for external', 'DNS by container name']
                    },
                    {
                        id: 340,
                        text: 'Host network?',
                        description: 'When would you use host network mode?',
                        keyPoints: ['shares host network', 'no port mapping', 'better performance', 'less isolation']
                    },
                    {
                        id: 341,
                        text: 'Exposing ports?',
                        description: 'What\'s the difference between EXPOSE and -p publish?',
                        keyPoints: ['EXPOSE is documentation', '-p actually maps ports', 'EXPOSE doesn\'t publish', 'need -p for external']
                    },
                    {
                        id: 342,
                        text: 'Docker security?',
                        description: 'What are container security best practices?',
                        keyPoints: ['non-root user', 'minimal base image', 'scan for vulnerabilities', 'read-only filesystem']
                    },
                    {
                        id: 343,
                        text: 'Escape?',
                        description: 'What is container escape and how to prevent it?',
                        keyPoints: ['breaking out to host', 'kernel vulnerabilities', 'privileged mode risk', 'seccomp/AppArmor']
                    },
                    {
                        id: 344,
                        text: 'Docker vs VM?',
                        description: 'When would you choose a VM over containers?',
                        keyPoints: ['different OS needed', 'stronger isolation', 'kernel-level differences', 'compliance requirements']
                    },
                    {
                        id: 345,
                        text: 'Startup speed?',
                        description: 'Why do containers start faster than VMs?',
                        keyPoints: ['no OS boot', 'shared kernel', 'just process isolation', 'milliseconds vs minutes']
                    },
                    {
                        id: 346,
                        text: 'Multi-stage?',
                        description: 'What is a multi-stage Docker build?',
                        keyPoints: ['multiple FROM statements', 'copy artifacts between stages', 'smaller final image', 'build tools not in prod']
                    },
                    {
                        id: 347,
                        text: 'Vulnerabilities?',
                        description: 'How do you scan Docker images for vulnerabilities?',
                        keyPoints: ['Trivy, Snyk, Clair', 'scan base images', 'CI/CD integration', 'block high severity']
                    },
                    {
                        id: 348,
                        text: 'Resource limits?',
                        description: 'How do you limit container resources?',
                        keyPoints: ['--memory flag', '--cpus flag', 'cgroups underneath', 'OOM killer behavior']
                    },
                    {
                        id: 349,
                        text: 'Logs?',
                        description: 'How do you handle container logs?',
                        keyPoints: ['stdout/stderr by default', 'log drivers', 'json-file, syslog, etc', 'centralize in production']
                    },
                    {
                        id: 350,
                        text: 'Healthcheck?',
                        description: 'What is a HEALTHCHECK and when to use it?',
                        keyPoints: ['checks container health', 'periodic command', 'used by orchestrators', 'restart unhealthy']
                    },
                    {
                        id: 351,
                        text: 'Restart policies?',
                        description: 'What restart policies are available?',
                        keyPoints: ['no, on-failure, always', 'unless-stopped', 'with-delay backoff', 'max restart count']
                    },
                    {
                        id: 352,
                        text: 'Orphans?',
                        description: 'What are orphan containers and volumes?',
                        keyPoints: ['containers without parent', 'unused volumes', 'take up disk space', 'prune to clean']
                    },
                    {
                        id: 353,
                        text: 'Prune?',
                        description: 'What does docker system prune do?',
                        keyPoints: ['removes unused data', 'containers, images, volumes', 'reclaims disk space', 'be careful with -a']
                    },
                    {
                        id: 354,
                        text: 'When Docker hurts?',
                        description: 'When is Docker not the right choice?',
                        keyPoints: ['GUI applications', 'hardware access needed', 'overhead unacceptable', 'simple deployment']
                    },
                    {
                        id: 355,
                        text: 'Debug containers?',
                        description: 'How do you debug a running container?',
                        keyPoints: ['docker exec -it', 'docker logs', 'attach debugger', 'ephemeral debug containers']
                    },
                ],
                resources: [
                    { title: 'Docker Docs', url: 'https://docs.docker.com/' },
                    { title: 'Docker Hub', url: 'https://hub.docker.com/' },
                ]
            },
            {
                id: 'aws',
                title: 'AWS & Cloud',
                icon: '☁️',
                color: '#ff9900',
                questions: [
                    {
                        id: 356,
                        text: 'IAM role?',
                        description: 'What is an IAM role and when would you use one?',
                        keyPoints: ['temporary credentials', 'assumed by services', 'cross-account access', 'no long-term keys']
                    },
                    {
                        id: 357,
                        text: 'Least privilege?',
                        description: 'How do you implement least privilege in AWS?',
                        keyPoints: ['minimal required permissions', 'deny by default', 'use conditions', 'regular access review']
                    },
                    {
                        id: 358,
                        text: 'User vs role?',
                        description: 'When should you use an IAM user vs a role?',
                        keyPoints: ['users for people', 'roles for services/apps', 'roles for cross-account', 'prefer roles']
                    },
                    {
                        id: 359,
                        text: 'S3 internals?',
                        description: 'How does S3 achieve 11 nines durability?',
                        keyPoints: ['replicates across AZs', 'checksums on read/write', 'automatic repair', 'distributed storage']
                    },
                    {
                        id: 360,
                        text: 'S3 consistency?',
                        description: 'What consistency model does S3 provide?',
                        keyPoints: ['strong read-after-write', 'changed in 2020', 'eventually consistent before', 'no extra cost']
                    },
                    {
                        id: 361,
                        text: 'Multipart?',
                        description: 'When and why would you use multipart upload?',
                        keyPoints: ['required over 5GB', 'recommended over 100MB', 'parallel parts', 'resume on failure']
                    },
                    {
                        id: 362,
                        text: 'Presigned URL?',
                        description: 'How do presigned URLs work?',
                        keyPoints: ['temporary access to S3', 'signed with credentials', 'expires after time', 'for public download/upload']
                    },
                    {
                        id: 363,
                        text: 'S3 vs EBS?',
                        description: 'When would you use S3 vs EBS?',
                        keyPoints: ['S3: object storage, unlimited', 'EBS: block storage, attached', 'S3 for static assets', 'EBS for databases']
                    },
                    {
                        id: 364,
                        text: 'SQS timeout?',
                        description: 'What is visibility timeout in SQS?',
                        keyPoints: ['hides message during processing', 'return to queue if not deleted', 'prevents duplicate processing', 'extend if needed']
                    },
                    {
                        id: 365,
                        text: 'DLQ?',
                        description: 'What is a Dead Letter Queue?',
                        keyPoints: ['holds failed messages', 'after max retries', 'investigate failures', 'reprocessing option']
                    },
                    {
                        id: 366,
                        text: 'At least once?',
                        description: 'What does at-least-once delivery mean?',
                        keyPoints: ['message delivered 1+ times', 'duplicates possible', 'consumer handles idempotently', 'SQS standard behavior']
                    },
                    {
                        id: 367,
                        text: 'Exactly once?',
                        description: 'How do you achieve exactly-once processing?',
                        keyPoints: ['FIFO queues help', 'deduplication ID', 'consumer idempotency key', 'track processed IDs']
                    },
                    {
                        id: 368,
                        text: 'Idempotency?',
                        description: 'Why is idempotency important for message processing?',
                        keyPoints: ['safe to retry', 'same result multiple times', 'handle duplicate messages', 'use idempotency keys']
                    },
                    {
                        id: 369,
                        text: 'SNS vs SQS?',
                        description: 'When would you use SNS vs SQS?',
                        keyPoints: ['SNS: pub/sub, push', 'SQS: queue, pull', 'SNS for fanout', 'often used together']
                    },
                    {
                        id: 370,
                        text: 'Fan out?',
                        description: 'What is the fanout pattern?',
                        keyPoints: ['SNS to multiple SQS', 'one event, many consumers', 'decoupled processing', 'parallel execution']
                    },
                    {
                        id: 371,
                        text: 'Cold start?',
                        description: 'What causes Lambda cold starts?',
                        keyPoints: ['new execution environment', 'container initialization', 'code loading', 'provisioned concurrency helps']
                    },
                    {
                        id: 372,
                        text: 'VPC?',
                        description: 'What is a VPC and why do you need one?',
                        keyPoints: ['virtual network in AWS', 'isolation and security', 'custom IP ranges', 'controls traffic flow']
                    },
                    {
                        id: 373,
                        text: 'NAT?',
                        description: 'Why do you need a NAT Gateway?',
                        keyPoints: ['private instances → internet', 'one-way outbound', 'for updates/API calls', 'high availability option']
                    },
                    {
                        id: 374,
                        text: 'Subnets?',
                        description: 'What\'s the difference between public and private subnets?',
                        keyPoints: ['public: internet gateway route', 'private: no direct internet', 'public for load balancers', 'private for backends']
                    },
                    {
                        id: 375,
                        text: 'Load balancers?',
                        description: 'When would you use ALB vs NLB vs CLB?',
                        keyPoints: ['ALB: HTTP/HTTPS, L7', 'NLB: TCP, L4, performance', 'CLB: legacy', 'ALB most common']
                    },
                    {
                        id: 376,
                        text: 'Auto scaling?',
                        description: 'How does auto scaling work?',
                        keyPoints: ['scales based on metrics', 'min/max/desired capacity', 'launch template', 'cooldown period']
                    },
                    {
                        id: 377,
                        text: 'Health checks?',
                        description: 'How do load balancer health checks work?',
                        keyPoints: ['periodic endpoint checks', 'removes unhealthy targets', 'configurable interval', 'custom health endpoint']
                    },
                    {
                        id: 378,
                        text: 'Blue green?',
                        description: 'How does blue-green deployment work?',
                        keyPoints: ['two identical environments', 'switch traffic instantly', 'easy rollback', 'requires double resources']
                    },
                    {
                        id: 379,
                        text: 'Canary?',
                        description: 'What is canary deployment?',
                        keyPoints: ['gradual traffic shift', 'test with small %', 'rollback if issues', 'less resource intensive']
                    },
                    {
                        id: 380,
                        text: 'DR?',
                        description: 'What are the disaster recovery strategies in AWS?',
                        keyPoints: ['backup/restore cheapest', 'pilot light', 'warm standby', 'multi-site active-active']
                    },
                ],
                resources: [
                    { title: 'AWS Docs', url: 'https://docs.aws.amazon.com/' },
                    { title: 'AWS Well-Architected', url: 'https://aws.amazon.com/architecture/well-architected/' },
                ]
            },
            {
                id: 'terraform',
                title: 'Terraform & IaC',
                icon: '🏗️',
                color: '#844fba',
                questions: [
                    {
                        id: 381,
                        text: 'Terraform state?',
                        description: 'What is Terraform state and why is it important?',
                        keyPoints: ['tracks managed resources', 'maps config to real infra', 'needed for plan/apply', 'must be protected']
                    },
                    {
                        id: 382,
                        text: 'Locking?',
                        description: 'Why is state locking important?',
                        keyPoints: ['prevents concurrent changes', 'avoids race conditions', 'DynamoDB for S3 backend', 'unlock if stuck']
                    },
                    {
                        id: 383,
                        text: 'Drift?',
                        description: 'What is drift and how do you detect it?',
                        keyPoints: ['real infra != state', 'manual changes cause', 'terraform plan shows', 'refresh to update state']
                    },
                    {
                        id: 384,
                        text: 'Plan vs apply?',
                        description: 'What\'s the difference between plan and apply?',
                        keyPoints: ['plan shows changes', 'apply executes them', 'always plan first', 'use -out for consistency']
                    },
                    {
                        id: 385,
                        text: 'Remote backend?',
                        description: 'Why use a remote backend for state?',
                        keyPoints: ['team collaboration', 'state locking', 'secure storage', 'S3 + DynamoDB common']
                    },
                    {
                        id: 386,
                        text: 'Modules?',
                        description: 'How do Terraform modules work?',
                        keyPoints: ['reusable config packages', 'input variables', 'outputs for data', 'versioned from registry']
                    },
                    {
                        id: 387,
                        text: 'Secrets?',
                        description: 'How do you handle secrets in Terraform?',
                        keyPoints: ['never in code', 'environment variables', 'vault integration', 'sensitive = true']
                    },
                    {
                        id: 388,
                        text: 'Sensitive vars?',
                        description: 'How does sensitive = true work?',
                        keyPoints: ['hides in output', 'still in state file', 'encrypt backend', 'not real security']
                    },
                    {
                        id: 389,
                        text: 'Rollbacks?',
                        description: 'How do you rollback in Terraform?',
                        keyPoints: ['no native rollback', 'revert code and apply', 'state versioning helps', 'plan carefully']
                    },
                    {
                        id: 390,
                        text: 'Destroy dangers?',
                        description: 'What are the dangers of terraform destroy?',
                        keyPoints: ['removes all resources', 'data loss possible', 'lifecycle prevent_destroy', 'use targeting carefully']
                    },
                    {
                        id: 391,
                        text: 'Dependency graph?',
                        description: 'How does Terraform determine resource order?',
                        keyPoints: ['builds dependency graph', 'implicit from references', 'explicit with depends_on', 'parallel when possible']
                    },
                    {
                        id: 392,
                        text: 'Lifecycle?',
                        description: 'What are lifecycle meta-arguments?',
                        keyPoints: ['create_before_destroy', 'prevent_destroy', 'ignore_changes', 'replace_triggered_by']
                    },
                    {
                        id: 393,
                        text: 'Taint?',
                        description: 'What does taint/untaint do?',
                        keyPoints: ['marks for replacement', 'deprecated for -replace', 'forces recreation', 'use for stuck resources']
                    },
                    {
                        id: 394,
                        text: 'Workspaces?',
                        description: 'How do Terraform workspaces work?',
                        keyPoints: ['separate state per env', 'dev/staging/prod', 'same config different state', 'or use directories']
                    },
                    {
                        id: 395,
                        text: 'CI/CD?',
                        description: 'How do you integrate Terraform with CI/CD?',
                        keyPoints: ['plan on PR', 'apply on merge', 'state locking critical', 'approval workflow']
                    },
                    {
                        id: 396,
                        text: 'Idempotency?',
                        description: 'Is Terraform idempotent?',
                        keyPoints: ['yes - same result', 'running again no-ops', 'unless drift detected', 'declarative nature']
                    },
                    {
                        id: 397,
                        text: 'Version pinning?',
                        description: 'Why pin provider and Terraform versions?',
                        keyPoints: ['reproducible builds', 'breaking changes', 'lock file tracks', 'upgrade intentionally']
                    },
                    {
                        id: 398,
                        text: 'Providers?',
                        description: 'What are Terraform providers?',
                        keyPoints: ['plugins for APIs', 'AWS, GCP, Azure etc', 'downloaded on init', 'version constraints']
                    },
                    {
                        id: 399,
                        text: 'State corruption?',
                        description: 'What do you do if state gets corrupted?',
                        keyPoints: ['restore from backup', 'state rm/mv/import', 'recreate state carefully', 'version your backend']
                    },
                    {
                        id: 400,
                        text: 'When not Terraform?',
                        description: 'When is Terraform not the right choice?',
                        keyPoints: ['app config (use Ansible)', 'one-off scripts', 'rapidly changing state', 'learning curve']
                    },
                ],
                resources: [
                    { title: 'Terraform Docs', url: 'https://developer.hashicorp.com/terraform/docs' },
                    { title: 'Terraform Best Practices', url: 'https://www.terraform-best-practices.com/' },
                ]
            },
        ]
    },
    {
        id: 'block5',
        title: 'System Design & Behavior',
        description: 'System design, debugging scenarios, and behavioral questions',
        icon: '🏛️',
        color: '#10b981',
        categories: [
            {
                id: 'systemdesign',
                title: 'System Design',
                icon: '🏗️',
                color: '#8b5cf6',
                questions: [
                    {
                        id: 401,
                        text: 'URL shortener',
                        description: 'Design a URL shortening service like bit.ly',
                        keyPoints: ['hash generation', 'collision handling', 'redirect latency', 'analytics tracking']
                    },
                    {
                        id: 402,
                        text: 'Chat system',
                        description: 'Design a real-time chat application',
                        keyPoints: ['WebSockets/SSE', 'message delivery', 'read receipts', 'group chat scaling']
                    },
                    {
                        id: 403,
                        text: 'Live auction',
                        description: 'Design a real-time bidding system',
                        keyPoints: ['bid consistency', 'real-time updates', 'time synchronization', 'fraud prevention']
                    },
                    {
                        id: 404,
                        text: 'Google Docs',
                        description: 'Design a collaborative document editor',
                        keyPoints: ['operational transforms or CRDTs', 'conflict resolution', 'cursor sync', 'offline support']
                    },
                    {
                        id: 405,
                        text: 'Instagram feed',
                        description: 'Design a news feed system',
                        keyPoints: ['push vs pull', 'fan-out strategies', 'ranking algorithm', 'infinite scroll']
                    },
                    {
                        id: 406,
                        text: 'Rate limiter',
                        description: 'Design a distributed rate limiting system',
                        keyPoints: ['token bucket/sliding window', 'distributed counting', 'consistency tradeoffs', 'graceful degradation']
                    },
                    {
                        id: 407,
                        text: 'Notifications',
                        description: 'Design a notification system',
                        keyPoints: ['push/email/SMS channels', 'user preferences', 'batching', 'delivery tracking']
                    },
                    {
                        id: 408,
                        text: 'API gateway',
                        description: 'Design an API gateway',
                        keyPoints: ['routing', 'rate limiting', 'auth', 'logging/monitoring']
                    },
                    {
                        id: 409,
                        text: 'Auth system',
                        description: 'Design an authentication system',
                        keyPoints: ['OAuth2/OIDC', 'session management', 'MFA', 'password reset flow']
                    },
                    {
                        id: 410,
                        text: 'Logging',
                        description: 'Design a distributed logging system',
                        keyPoints: ['log ingestion at scale', 'indexing/search', 'retention policies', 'alerting']
                    },
                    {
                        id: 411,
                        text: 'Metrics',
                        description: 'Design a metrics collection system',
                        keyPoints: ['time series DB', 'aggregation', 'dashboards', 'alerting thresholds']
                    },
                    {
                        id: 412,
                        text: 'Cache',
                        description: 'Design a distributed caching layer',
                        keyPoints: ['cache strategies', 'invalidation', 'consistency', 'hot key handling']
                    },
                    {
                        id: 413,
                        text: 'Leaderboard',
                        description: 'Design a real-time leaderboard',
                        keyPoints: ['sorted sets (Redis)', 'rank queries', 'score updates', 'tie breaking']
                    },
                    {
                        id: 414,
                        text: 'Payments',
                        description: 'Design a payment processing system',
                        keyPoints: ['idempotency', 'PCI compliance', 'retries', 'refunds/chargebacks']
                    },
                    {
                        id: 415,
                        text: 'File upload',
                        description: 'Design a large file upload service',
                        keyPoints: ['chunked uploads', 'resume support', 'virus scanning', 'CDN distribution']
                    },
                    {
                        id: 416,
                        text: 'Autocomplete',
                        description: 'Design an autocomplete/typeahead system',
                        keyPoints: ['trie data structure', 'prefix matching', 'ranking by popularity', 'caching']
                    },
                    {
                        id: 417,
                        text: 'Recommender',
                        description: 'Design a recommendation engine',
                        keyPoints: ['collaborative filtering', 'content-based', 'real-time updates', 'A/B testing']
                    },
                    {
                        id: 418,
                        text: 'Collaboration',
                        description: 'Design a collaborative workspace (Notion/Figma)',
                        keyPoints: ['real-time sync', 'access control', 'version history', 'comments/mentions']
                    },
                    {
                        id: 419,
                        text: 'Streaming',
                        description: 'Design a video streaming platform',
                        keyPoints: ['transcoding', 'adaptive bitrate', 'CDN caching', 'live vs VOD']
                    },
                    {
                        id: 420,
                        text: 'CI/CD',
                        description: 'Design a CI/CD pipeline system',
                        keyPoints: ['job orchestration', 'isolation', 'artifact storage', 'parallelization']
                    },
                    {
                        id: 421,
                        text: 'Fraud',
                        description: 'Design a fraud detection system',
                        keyPoints: ['rule engine', 'ML scoring', 'real-time processing', 'false positive handling']
                    },
                    {
                        id: 422,
                        text: 'Multi-tenant SaaS',
                        description: 'Design a multi-tenant SaaS platform',
                        keyPoints: ['tenant isolation', 'data partitioning', 'billing per tenant', 'customization']
                    },
                    {
                        id: 423,
                        text: 'Feature flags',
                        description: 'Design a feature flag system',
                        keyPoints: ['targeting rules', 'gradual rollout', 'kill switches', 'SDK integration']
                    },
                    {
                        id: 424,
                        text: 'Webhooks',
                        description: 'Design a webhook delivery system',
                        keyPoints: ['retry logic', 'event ordering', 'signature verification', 'dead letter queue']
                    },
                    {
                        id: 425,
                        text: 'Moderation',
                        description: 'Design a content moderation system',
                        keyPoints: ['automated detection', 'human review queue', 'appeal process', 'audit trail']
                    },
                    {
                        id: 426,
                        text: 'Rate limit',
                        description: 'Design rate limiting for API users',
                        keyPoints: ['per-user limits', 'quota management', 'burst handling', 'tier-based limits']
                    },
                    {
                        id: 427,
                        text: 'CDN',
                        description: 'Design a content delivery network',
                        keyPoints: ['edge caching', 'cache invalidation', 'geographic routing', 'origin shielding']
                    },
                    {
                        id: 428,
                        text: 'Analytics',
                        description: 'Design an analytics platform',
                        keyPoints: ['event ingestion', 'real-time vs batch', 'data warehouse', 'visualization']
                    },
                    {
                        id: 429,
                        text: 'A/B testing',
                        description: 'Design an A/B testing platform',
                        keyPoints: ['traffic splitting', 'statistical significance', 'metrics collection', 'feature flags']
                    },
                    {
                        id: 430,
                        text: 'HA systems',
                        description: 'Design for high availability',
                        keyPoints: ['redundancy', 'failover', 'load balancing', 'chaos engineering']
                    },
                ],
                resources: [
                    { title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
                    { title: 'ByteByteGo', url: 'https://bytebytego.com/' },
                ]
            },
            {
                id: 'debugging',
                title: 'Debugging Scenarios',
                icon: '🐛',
                color: '#ef4444',
                questions: [
                    {
                        id: 431,
                        text: 'CPU 100%',
                        description: 'Production server is at 100% CPU. How do you investigate?',
                        keyPoints: ['top/htop to find process', 'profile the hot path', 'check for infinite loops', 'scale or optimize']
                    },
                    {
                        id: 432,
                        text: 'Memory leak',
                        description: 'How do you debug a memory leak in production?',
                        keyPoints: ['heap dumps', 'track growth over time', 'identify retained objects', 'common causes']
                    },
                    {
                        id: 433,
                        text: 'Latency spikes',
                        description: 'API latency spikes randomly. How do you debug?',
                        keyPoints: ['trace requests end-to-end', 'check GC pauses', 'database queries', 'external dependencies']
                    },
                    {
                        id: 434,
                        text: 'DB slow',
                        description: 'Database queries suddenly became slow. What do you check?',
                        keyPoints: ['EXPLAIN ANALYZE', 'index usage', 'table locks', 'query planning cache']
                    },
                    {
                        id: 435,
                        text: 'Socket drop',
                        description: 'WebSocket connections keep dropping. How do you investigate?',
                        keyPoints: ['check load balancer timeouts', 'ping/pong heartbeats', 'network issues', 'server resources']
                    },
                    {
                        id: 436,
                        text: 'Crash loop',
                        description: 'Container keeps restarting. How do you debug?',
                        keyPoints: ['check logs before crash', 'OOMKilled?', 'liveness probe failing', 'startup dependencies']
                    },
                    {
                        id: 437,
                        text: 'CI flaky',
                        description: 'Tests pass locally but randomly fail in CI. What do you check?',
                        keyPoints: ['timing/race conditions', 'test isolation', 'resource constraints', 'shared state']
                    },
                    {
                        id: 438,
                        text: 'Terraform broken',
                        description: 'Terraform apply failed mid-way. How do you recover?',
                        keyPoints: ['check state file', 'manual resource check', 'import if needed', 'fix and reapply']
                    },
                    {
                        id: 439,
                        text: 'Webhook missing',
                        description: 'Webhooks are being sent but not received. How do you debug?',
                        keyPoints: ['check delivery logs', 'verify endpoint reachable', 'signature validation', 'timeout/retry config']
                    },
                    {
                        id: 440,
                        text: 'Data loss',
                        description: 'Users report data went missing. How do you investigate?',
                        keyPoints: ['check audit logs', 'database backups', 'recent deployments', 'accidental deletes']
                    },
                    {
                        id: 441,
                        text: 'Race bug',
                        description: 'How do you debug a race condition?',
                        keyPoints: ['reproduce under load', 'add logging', 'race detector tools', 'review shared state']
                    },
                    {
                        id: 442,
                        text: 'Deadlock',
                        description: 'Application is hanging, suspected deadlock. How do you debug?',
                        keyPoints: ['thread dumps', 'lock ordering analysis', 'database locks', 'reduce lock scope']
                    },
                    {
                        id: 443,
                        text: 'Cache poison',
                        description: 'Bad data got cached. How do you handle it?',
                        keyPoints: ['invalidate affected keys', 'find root cause', 'add validation', 'shorter TTL consideration']
                    },
                    {
                        id: 444,
                        text: 'Duplicate SQS',
                        description: 'Same SQS message processed multiple times. Why?',
                        keyPoints: ['at-least-once delivery', 'visibility timeout too short', 'add idempotency', 'use FIFO if needed']
                    },
                    {
                        id: 445,
                        text: 'AI hallucination',
                        description: 'LLM is giving wrong answers. How do you reduce this?',
                        keyPoints: ['improve prompts', 'RAG for context', 'lower temperature', 'validation layer']
                    },
                    {
                        id: 446,
                        text: 'App crash',
                        description: 'Mobile app crashes on certain devices. How do you debug?',
                        keyPoints: ['crash reporting tool', 'device/OS specific', 'reproduce on emulator', 'symbolicate stack']
                    },
                    {
                        id: 447,
                        text: 'Store rejection',
                        description: 'App store rejected your update. What are common causes?',
                        keyPoints: ['metadata issues', 'permission explanations', 'privacy policy', 'guideline violations']
                    },
                    {
                        id: 448,
                        text: 'Stale data',
                        description: 'Users seeing outdated data. How do you investigate?',
                        keyPoints: ['cache layers', 'replication lag', 'CDN caching', 'browser cache']
                    },
                    {
                        id: 449,
                        text: 'LB misroute',
                        description: 'Load balancer routing to wrong backend. How do you debug?',
                        keyPoints: ['health check config', 'sticky sessions', 'routing rules', 'check target group']
                    },
                    {
                        id: 450,
                        text: 'Bad rollback',
                        description: 'Rollback caused more issues than the original bug. What happened?',
                        keyPoints: ['database migrations', 'API version mismatch', 'incompatible data', 'rollback testing needed']
                    },
                    {
                        id: 451,
                        text: 'Logging down',
                        description: 'Logging pipeline is overloaded. What do you do?',
                        keyPoints: ['scale ingestion', 'sampling high-volume logs', 'drop debug logs', 'async buffering']
                    },
                    {
                        id: 452,
                        text: 'Metrics wrong',
                        description: 'Dashboard metrics don\'t match reality. How do you debug?',
                        keyPoints: ['check collection agent', 'aggregation logic', 'timezone issues', 'metric definitions']
                    },
                    {
                        id: 453,
                        text: 'Feature stuck',
                        description: 'Feature flag rollout stuck at 50%. What could be wrong?',
                        keyPoints: ['targeting rules', 'user bucketing', 'caching', 'SDK initialization']
                    },
                    {
                        id: 454,
                        text: 'React memory',
                        description: 'React app memory grows over time. How do you debug?',
                        keyPoints: ['DevTools memory profiler', 'component unmount cleanup', 'event listener leaks', 'closure references']
                    },
                    {
                        id: 455,
                        text: 'Flutter jank',
                        description: 'Flutter app has frame drops. How do you fix it?',
                        keyPoints: ['DevTools timeline', 'heavy build methods', 'use const widgets', 'isolate heavy work']
                    },
                    {
                        id: 456,
                        text: 'Selenium flaky',
                        description: 'E2E tests are flaky. How do you make them stable?',
                        keyPoints: ['wait for elements properly', 'test isolation', 'retry on flake', 'avoid timing-based tests']
                    },
                    {
                        id: 457,
                        text: 'Migrations',
                        description: 'Database migration failed mid-way. How do you recover?',
                        keyPoints: ['transaction rollback?', 'fix and re-run', 'manual data fix', 'test in staging']
                    },
                    {
                        id: 458,
                        text: 'Secrets leak',
                        description: 'API key was committed to git. What do you do?',
                        keyPoints: ['rotate immediately', 'audit access logs', 'clean git history', 'add pre-commit hooks']
                    },
                    {
                        id: 459,
                        text: 'TLS expired',
                        description: 'SSL certificate expired in production. How do you respond?',
                        keyPoints: ['immediate renewal', 'automate with certbot', 'monitor expiry', 'use managed certs']
                    },
                    {
                        id: 460,
                        text: 'Data inconsistency',
                        description: 'Data is inconsistent between services. How do you fix it?',
                        keyPoints: ['identify source of truth', 'sync or reconcile', 'saga pattern', 'eventual consistency trade-offs']
                    },
                ],
                resources: [
                    { title: 'Debugging Guide', url: 'https://jvns.ca/blog/2019/06/23/a-few-debugging-resources/' },
                ]
            },
            {
                id: 'behavioral',
                title: 'Behavioral',
                icon: '💬',
                color: '#06b6d4',
                questions: [
                    {
                        id: 461,
                        text: 'Biggest failure',
                        description: 'Tell me about your biggest professional failure.',
                        keyPoints: ['what happened', 'your role in it', 'what you learned', 'what you\'d do differently']
                    },
                    {
                        id: 462,
                        text: 'Complex bug',
                        description: 'Tell me about the most complex bug you\'ve ever fixed.',
                        keyPoints: ['investigation process', 'tools used', 'root cause', 'prevention measures']
                    },
                    {
                        id: 463,
                        text: 'Team conflict',
                        description: 'How have you handled conflict with a teammate?',
                        keyPoints: ['situation context', 'your approach', 'resolution', 'relationship after']
                    },
                    {
                        id: 464,
                        text: 'Missed deadline',
                        description: 'Tell me about a time you missed a deadline.',
                        keyPoints: ['why it happened', 'how you communicated', 'recovery', 'process improvements']
                    },
                    {
                        id: 465,
                        text: 'Bad decision',
                        description: 'Describe a technical decision you regret.',
                        keyPoints: ['the context', 'why you made it', 'consequences', 'what you learned']
                    },
                    {
                        id: 466,
                        text: 'Disagree with senior',
                        description: 'How do you handle disagreeing with a senior engineer?',
                        keyPoints: ['voice concerns professionally', 'understand their perspective', 'data-driven discussion', 'accept outcome']
                    },
                    {
                        id: 467,
                        text: 'Proud feature',
                        description: 'What feature are you most proud of building?',
                        keyPoints: ['technical challenges', 'your contribution', 'user impact', 'lessons learned']
                    },
                    {
                        id: 468,
                        text: 'System you broke',
                        description: 'Tell me about a time you broke production.',
                        keyPoints: ['what happened', 'how you found out', 'your response', 'prevention after']
                    },
                    {
                        id: 469,
                        text: 'Learning style',
                        description: 'How do you approach learning new technologies?',
                        keyPoints: ['documentation', 'hands-on projects', 'courses/tutorials', 'community/mentors']
                    },
                    {
                        id: 470,
                        text: 'Debug under pressure',
                        description: 'How do you debug when there\'s a production incident?',
                        keyPoints: ['stay calm', 'systematic approach', 'communicate status', 'document findings']
                    },
                    {
                        id: 471,
                        text: 'Estimation',
                        description: 'How do you estimate complex projects?',
                        keyPoints: ['break down tasks', 'add buffer', 'identify unknowns', 'communicate uncertainty']
                    },
                    {
                        id: 472,
                        text: 'Ambiguity',
                        description: 'How do you handle ambiguous requirements?',
                        keyPoints: ['ask clarifying questions', 'make assumptions explicit', 'iterate quickly', 'validate early']
                    },
                    {
                        id: 473,
                        text: 'Incidents',
                        description: 'How do you handle on-call incidents?',
                        keyPoints: ['acknowledge and assess', 'communicate status', 'mitigate first, fix later', 'document everything']
                    },
                    {
                        id: 474,
                        text: 'Postmortem',
                        description: 'How do you conduct an effective postmortem?',
                        keyPoints: ['blameless culture', 'timeline of events', 'root cause analysis', 'action items']
                    },
                    {
                        id: 475,
                        text: 'Feedback',
                        description: 'How do you give constructive feedback to peers?',
                        keyPoints: ['specific examples', 'focus on behavior', 'suggest improvements', 'private channel']
                    },
                    {
                        id: 476,
                        text: 'Criticism',
                        description: 'How do you handle receiving critical feedback?',
                        keyPoints: ['listen without defending', 'ask for examples', 'identify actions', 'follow up']
                    },
                    {
                        id: 477,
                        text: 'Burnout',
                        description: 'How do you prevent or handle burnout?',
                        keyPoints: ['recognize signs', 'set boundaries', 'communicate with manager', 'sustainable pace']
                    },
                    {
                        id: 478,
                        text: 'Priorities',
                        description: 'How do you prioritize when everything is urgent?',
                        keyPoints: ['clarify true deadlines', 'assess impact', 'negotiate scope', 'communicate tradeoffs']
                    },
                    {
                        id: 479,
                        text: 'Tradeoffs',
                        description: 'Describe a significant tradeoff you made in system design.',
                        keyPoints: ['options considered', 'criteria used', 'stakeholder input', 'outcome']
                    },
                    {
                        id: 480,
                        text: 'Ownership',
                        description: 'What does ownership mean to you?',
                        keyPoints: ['end-to-end responsibility', 'proactive communication', 'beyond just code', 'outcomes focus']
                    },
                    {
                        id: 481,
                        text: 'Good engineer',
                        description: 'What makes a great software engineer?',
                        keyPoints: ['technical skills', 'communication', 'continuous learning', 'team player']
                    },
                    {
                        id: 482,
                        text: 'Mentoring',
                        description: 'Tell me about a time you mentored someone.',
                        keyPoints: ['how you helped', 'challenges faced', 'their growth', 'what you learned']
                    },
                    {
                        id: 483,
                        text: 'Toxic teammate',
                        description: 'How would you handle a toxic teammate?',
                        keyPoints: ['address directly', 'document issues', 'involve manager if needed', 'protect team']
                    },
                    {
                        id: 484,
                        text: 'Ethics',
                        description: 'Tell me about an ethical dilemma you faced.',
                        keyPoints: ['the situation', 'values at stake', 'your decision', 'outcome']
                    },
                    {
                        id: 485,
                        text: 'Failure lesson',
                        description: 'What\'s the most important lesson from a failure?',
                        keyPoints: ['specific failure', 'the insight gained', 'how you applied it', 'ongoing impact']
                    },
                    {
                        id: 486,
                        text: 'Career goals',
                        description: 'What are your career goals for the next 3-5 years?',
                        keyPoints: ['specific goals', 'why this path', 'how this role helps', 'growth areas']
                    },
                    {
                        id: 487,
                        text: 'Why hire you',
                        description: 'Why should we hire you?',
                        keyPoints: ['unique strengths', 'relevant experience', 'cultural fit', 'enthusiasm']
                    },
                    {
                        id: 488,
                        text: 'Why company',
                        description: 'Why do you want to work at this company?',
                        keyPoints: ['research the company', 'align with mission', 'specific interest', 'growth opportunity']
                    },
                    {
                        id: 489,
                        text: 'Tech fears',
                        description: 'What technology trend concerns you?',
                        keyPoints: ['the trend', 'specific concerns', 'how you adapt', 'thoughtful analysis']
                    },
                    {
                        id: 490,
                        text: 'Tech excitement',
                        description: 'What technology are you most excited about?',
                        keyPoints: ['specifics', 'why it interests you', 'how you\'re learning it', 'potential applications']
                    },
                    {
                        id: 491,
                        text: 'Pressure handling',
                        description: 'How do you perform under pressure?',
                        keyPoints: ['stay organized', 'prioritize ruthlessly', 'communicate status', 'ask for help']
                    },
                    {
                        id: 492,
                        text: 'Worst bug',
                        description: 'What\'s the worst bug you\'ve introduced to production?',
                        keyPoints: ['what happened', 'how you found it', 'the fix', 'prevention measures']
                    },
                    {
                        id: 493,
                        text: 'Self improvement',
                        description: 'What are you working on improving?',
                        keyPoints: ['specific skill', 'why it matters', 'your approach', 'progress made']
                    },
                    {
                        id: 494,
                        text: 'Staying updated',
                        description: 'How do you stay current with technology trends?',
                        keyPoints: ['sources you follow', 'communities', 'side projects', 'selective depth']
                    },
                    {
                        id: 495,
                        text: 'System design',
                        description: 'How do you approach designing a new system?',
                        keyPoints: ['gather requirements', 'high-level design first', 'identify constraints', 'iterate with feedback']
                    },
                    {
                        id: 496,
                        text: 'Testing',
                        description: 'What\'s your philosophy on testing?',
                        keyPoints: ['test pyramid', 'coverage tradeoffs', 'when to test', 'testing strategy']
                    },
                    {
                        id: 497,
                        text: 'Documentation',
                        description: 'How do you approach documentation?',
                        keyPoints: ['what to document', 'keep it updated', 'audience awareness', 'code as documentation']
                    },
                    {
                        id: 498,
                        text: 'Onboarding',
                        description: 'How do you ramp up quickly on a new codebase?',
                        keyPoints: ['read docs first', 'run the code', 'make small changes', 'ask questions']
                    },
                    {
                        id: 499,
                        text: 'Engineering excellence',
                        description: 'What does engineering excellence mean to you?',
                        keyPoints: ['quality code', 'operational excellence', 'continuous improvement', 'team contribution']
                    },
                    {
                        id: 500,
                        text: 'CTO mindset',
                        description: 'How do you think about technical decisions from a business perspective?',
                        keyPoints: ['understand business goals', 'ROI of tech choices', 'technical debt tradeoffs', 'communicate value']
                    },
                ],
                resources: [
                    { title: 'STAR Method', url: 'https://www.themuse.com/advice/star-interview-method' },
                    { title: 'Behavioral Interview Guide', url: 'https://www.levels.fyi/blog/behavioral-interview-guide.html' },
                ]
            },
        ]
    },
]

// Helper to get total questions count
export const getTotalQuestions = () => {
    return questionBlocks.reduce((total, block) => {
        return total + block.categories.reduce((catTotal, cat) => catTotal + cat.questions.length, 0)
    }, 0)
}

// Helper to flatten all questions
export const getAllQuestions = () => {
    const questions = []
    questionBlocks.forEach(block => {
        block.categories.forEach(category => {
            category.questions.forEach(q => {
                questions.push({
                    ...q,
                    blockId: block.id,
                    categoryId: category.id,
                    categoryTitle: category.title,
                    blockTitle: block.title,
                })
            })
        })
    })
    return questions
}
