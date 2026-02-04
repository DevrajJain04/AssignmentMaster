# 500 Mock Interview Questions – SDE-1 / Full Stack / Frontend

This document contains a complete structured interview bank for SDE-1, Full Stack, React/Flutter and Cloud roles.
Use it as:
- Daily preparation log
- Mock interview script
- Long-term mastery tracker

---

## BLOCK 1 – Core Programming & CS (1–100)

### Python (1–25)
1. What happens in memory when you do `a = b = []`?
2. How does reference counting differ from generational GC?
3. Why does `is` sometimes fail while `==` works?
4. What exactly does the GIL lock?
5. When does Python release the GIL?
6. Why is `multiprocessing` faster than threading?
7. How does `asyncio` schedule coroutines?
8. What happens if you forget `await`?
9. Difference between generator and coroutine?
10. How do Python descriptors work?
11. How does context manager work internally?
12. Why is recursion slow in Python?
13. How does Python import system work?
14. What is `__slots__`?
15. Why does default argument mutation happen?
16. How does deep copy differ from shallow?
17. What happens when exception is raised?
18. What is monkey patching?
19. How do decorators stack?
20. How does MRO work?
21. What is tail recursion?
22. When would Python segfault?
23. How does Python optimize dict?
24. How does garbage collection pause execution?
25. Why is list append amortized O(1)?

### C / C++ (26–45)
26. Stack vs heap memory lifecycle?
27. Why is malloc faster than new?
28. What is undefined behavior?
29. Why double free is dangerous?
30. What is memory alignment?
31. What is dangling pointer?
32. Why RAII prevents leaks?
33. What happens if destructor throws?
34. Why virtual destructor needed?
35. What is object slicing?
36. Difference between pointer and reference?
37. How does vtable work?
38. What is move constructor?
39. Why vector reallocation expensive?
40. What is copy elision?
41. What is segmentation fault?
42. How does static linking work?
43. What is inline function?
44. Why header guards exist?
45. What is volatile keyword?

### JavaScript (46–70)
46. Explain event loop phases.
47. Microtask vs macrotask?
48. How does promise chaining work?
49. What is closure memory leak?
50. Why setTimeout(0) isn’t immediate?
51. How does hoisting work?
52. this binding rules?
53. What is prototype chain?
54. How does garbage collection in V8 work?
55. Why JSON.stringify fails on circular?
56. What is debouncing?
57. What is throttling?
58. How does fetch differ from axios?
59. Why async/await is syntactic sugar?
60. What is strict mode?
61. How does module system work?
62. Tree shaking?
63. Why JS is single threaded?
64. Web worker vs service worker?
65. How does event delegation?
66. What is memory leak in frontend?
67. How to cancel promise?
68. What is hydration?
69. Shadow DOM?
70. What is virtual DOM?

### SQL / DB Theory (71–100)
71. What is normalization?
72. When denormalize?
73. What is index physically?
74. B-tree vs hash index?
75. Explain query planner.
76. What is deadlock?
77. How to prevent deadlock?
78. What is phantom read?
79. Explain isolation levels.
80. What is write-ahead logging?
81. What is vacuum?
82. What is foreign key constraint?
83. Cascade delete dangers?
84. What is materialized view?
85. What is locking granularity?
86. Optimistic vs pessimistic locking?
87. What is N+1 problem?
88. What is connection pooling?
89. What is prepared statement?
90. Why ORMs slow?
91. Explain ACID.
92. What is CAP theorem?
93. What is BASE?
94. What is replication lag?
95. What is sharding?
96. Hot partition?
97. What is idempotent query?
98. Explain transaction rollback.
99. What is schema migration?
100. How to design audit logs?

---

## BLOCK 2 – Backend, APIs, AI, Security (101–200)

101. WSGI vs ASGI?
102. Why FastAPI scales better than Flask?
103. Request lifecycle in FastAPI?
104. Dependency injection internals?
105. When not to use async?
106. Blocking event loop?
107. Thread pool vs async loop?
108. Django ORM lazy loading?
109. When Django beats FastAPI?
110. Middleware order?
111. CSRF token flow?
112. Rate limiting strategies?
113. API versioning?
114. Idempotent APIs?
115. Pagination design?
116. Cursor vs offset?
117. Partial failure handling?
118. Circuit breaker?
119. Bulkhead pattern?
120. API gateway?
121. Backward compatibility?
122. HATEOAS?
123. OpenAPI spec?
124. Swagger generation?
125. Blue-green deployment?
126. Canary release?
127. Graceful shutdown?
128. Health checks?
129. Liveness vs readiness?
130. Feature flags?

131. TCP vs HTTP vs WebSockets?
132. WebSocket handshake?
133. HTTP/2 vs WebSockets?
134. Scaling sockets?
135. Sticky sessions?
136. Redis pub/sub?
137. Backpressure?
138. Heartbeats?
139. Dead clients?
140. Server restarts?
141. Load balancers?
142. WebSocket security?
143. Socket auth?
144. SSE?
145. SSE vs WebSockets?
146. Ordering?
147. Event replay?
148. Exactly-once?
149. Fan-out?
150. Chat design?
151. Live auction design?
152. Collaborative editor?
153. Race conditions?
154. Flood handling?
155. WebSocket failures?

156. OAuth2?
157. JWT vs cookies?
158. Refresh tokens?
159. Token expiry?
160. CSRF vs XSS?
161. Password hashing?
162. bcrypt vs sha?
163. Salting?
164. Rate limiting?
165. Brute force protection?
166. Webhook verification?
167. API key vs OAuth?
168. RBAC vs ABAC?
169. Least privilege?
170. Zero trust?
171. CORS?
172. SameSite?
173. HTTPS handshake?
174. Certificate pinning?
175. MITM?

176. LLM context?
177. Hallucination?
178. Temperature?
179. Prompt injection?
180. System vs user prompts?
181. Tokenization?
182. Latency strategies?
183. Caching AI?
184. Embeddings?
185. RAG?
186. Vector DB?
187. Cost control?
188. AI observability?
189. Determinism?
190. When not to use AI?

191. Structured logging?
192. Logs vs print?
193. Correlation ID?
194. Tracing vs metrics?
195. Debug memory leak?
196. Debug race?
197. Debug slow endpoint?
198. Flame graph?
199. Retry logic?
200. When retries hurt?

---

## BLOCK 3 – Frontend & Flutter (201–300)

201. React reconciliation?
202. Skip re-render?
203. Keys?
204. useState vs useRef?
205. useEffect deps?
206. Infinite loops?
207. useMemo vs useCallback?
208. Memoization cost?
209. Controlled inputs?
210. Lifting state?
211. Prop drilling?
212. Context performance?
213. Redux usage?
214. Redux vs Zustand?
215. Boilerplate?
216. Hydration?
217. SSR vs CSR?
218. Code splitting?
219. Lazy loading?
220. Tree shaking?
221. Virtual DOM?
222. Batched updates?
223. Error boundaries?
224. Suspense?
225. Concurrent rendering?
226. Fiber?
227. Reconciliation algorithm?
228. Synthetic events?
229. Event delegation?
230. Ref forwarding?
231. Portal?
232. Fragment?
233. Strict mode?
234. DevTools?
235. Profiling?
236. Why React fast?
237. When React slow?
238. Memory leaks?
239. Custom hooks?
240. Testing React?

241. Vite vs Webpack?
242. HMR?
243. ES modules?
244. Bundlers?
245. Tree shaking internals?
246. Dead code elimination?
247. Source maps?
248. Prod vs dev?
249. Asset hashing?
250. Code splitting?
251. Dynamic imports?
252. Polyfills?
253. Babel vs SWC?
254. Transpilation?
255. Minification?
256. Gzip vs brotli?
257. CDN?
258. Caching?
259. Cache busting?
260. Reproducible builds?

261. Widget vs Element?
262. Build frequency?
263. Hot reload?
264. Skia?
265. Native?
266. State management?
267. setState pitfalls?
268. InheritedWidget?
269. Provider vs Bloc?
270. BuildContext?
271. Widget immutability?
272. Repaint boundaries?
273. Isolates?
274. Platform channels?
275. Native plugins?
276. Flutter profiling?
277. Jank?
278. Memory leaks?
279. Gestures?
280. Accessibility?
281. Theming?
282. Localization?
283. Animations?
284. Frame pipeline?
285. App size?

286. Critical rendering path?
287. Layout thrashing?
288. Reflow vs repaint?
289. CSS rendering?
290. Main thread?
291. Web workers?
292. Service workers?
293. Offline-first?
294. Accessibility audits?
295. Lighthouse?
296. FCP/LCP/CLS?
297. Debounce vs throttle?
298. Virtualization?
299. Progressive loading?
300. Perceived performance?

---

## BLOCK 4 – Databases, Cloud, DevOps (301–400)

301. B-tree internals?
302. Secondary indexes?
303. Covering index?
304. Index scan?
305. Write amplification?
306. WAL?
307. Checkpoint?
308. Vacuum?
309. MVCC?
310. Snapshot isolation?
311. Hot rows?
312. Lock escalation?
313. Optimistic locking?
314. Phantom reads?
315. Deadlocks?
316. Sharding?
317. Consistent hashing?
318. Replication lag?
319. Eventual consistency?
320. Split brain?
321. Mongo indexes?
322. Aggregation pipeline?
323. Change streams?
324. Joins in NoSQL?
325. Mongo migration?
326. Mongo transactions?
327. Mongo bad choice?
328. SQL bad choice?
329. Hot partition?
330. Audit logs?

331. Container definition?
332. Namespaces?
333. Image build?
334. Layer caching?
335. Alpine?
336. ENTRYPOINT vs CMD?
337. COPY vs ADD?
338. Volume vs bind?
339. Bridge network?
340. Host network?
341. Exposing ports?
342. Docker security?
343. Escape?
344. Docker vs VM?
345. Startup speed?
346. Multi-stage?
347. Vulnerabilities?
348. Resource limits?
349. Logs?
350. Healthcheck?
351. Restart policies?
352. Orphans?
353. Prune?
354. When Docker hurts?
355. Debug containers?

356. IAM role?
357. Least privilege?
358. User vs role?
359. S3 internals?
360. S3 consistency?
361. Multipart?
362. Presigned URL?
363. S3 vs EBS?
364. SQS timeout?
365. DLQ?
366. At least once?
367. Exactly once?
368. Idempotency?
369. SNS vs SQS?
370. Fan out?
371. Cold start?
372. VPC?
373. NAT?
374. Subnets?
375. Load balancers?
376. Auto scaling?
377. Health checks?
378. Blue green?
379. Canary?
380. DR?

381. Terraform state?
382. Locking?
383. Drift?
384. Plan vs apply?
385. Remote backend?
386. Modules?
387. Secrets?
388. Sensitive vars?
389. Rollbacks?
390. Destroy dangers?
391. Dependency graph?
392. Lifecycle?
393. Taint?
394. Workspaces?
395. CI/CD?
396. Idempotency?
397. Version pinning?
398. Providers?
399. State corruption?
400. When not Terraform?

---

## BLOCK 5 – System Design & Behavior (401–500)

401. URL shortener
402. Chat system
403. Live auction
404. Google Docs
405. Instagram feed
406. Rate limiter
407. Notifications
408. API gateway
409. Auth system
410. Logging
411. Metrics
412. Cache
413. Leaderboard
414. Payments
415. File upload
416. Autocomplete
417. Recommender
418. Collaboration
419. Streaming
420. CI/CD
421. Fraud
422. Multi-tenant SaaS
423. Feature flags
424. Webhooks
425. Moderation
426. Rate limit
427. CDN
428. Analytics
429. A/B testing
430. HA systems

431. CPU 100%
432. Memory leak
433. Latency spikes
434. DB slow
435. Socket drop
436. Crash loop
437. CI flaky
438. Terraform broken
439. Webhook missing
440. Data loss
441. Race bug
442. Deadlock
443. Cache poison
444. Duplicate SQS
445. AI hallucination
446. App crash
447. Store rejection
448. Stale data
449. LB misroute
450. Bad rollback
451. Logging down
452. Metrics wrong
453. Feature stuck
454. React memory
455. Flutter jank
456. Selenium flaky
457. Migrations
458. Secrets leak
459. TLS expired
460. Data inconsistency

461. Biggest failure
462. Complex bug
463. Team conflict
464. Missed deadline
465. Bad decision
466. Disagree with senior
467. Proud feature
468. System you broke
469. Learning style
470. Debug under pressure
471. Estimation
472. Ambiguity
473. Incidents
474. Postmortem
475. Feedback
476. Criticism
477. Burnout
478. Priorities
479. Tradeoffs
480. Ownership
481. Good engineer
482. Mentoring
483. Toxic teammate
484. Ethics
485. Failure lesson
486. Career goals
487. Why hire you
488. Why company
489. Tech fears
490. Tech excitement
491. Pressure handling
492. Worst bug
493. Self improvement
494. Staying updated
495. System design
496. Testing
497. Documentation
498. Onboarding
499. Engineering excellence
500. CTO mindset

