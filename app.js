import React, { useState } from 'react';
import {
  Terminal,
  Database,
  Server,
  Code2,
  Globe,
  Search,
  ChevronRight,
  BookOpen,
  Briefcase,
  Zap,
  ArrowRight,
  ListChecks,
  History,
  Award,
  ShieldCheck,
  Lightbulb,
  Timer,
  Target,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Copy,
  Play,
  Pause
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState(null);

  // Ultra-Comprehensive MERN Content - Your One-Stop Interview Prep
  const comprehensiveContent = {
    roadmap: {
      intro: {
        title: "Welcome to Your Complete MERN Mastery Suite",
        description: "This is designed to be your ONLY resource for MERN Stack interviews in 2025-2026. Everything is structured for deep understanding, quick revision, and confident articulation."
      },
      sections: [
        {
          category: "JavaScript Fundamentals (The Foundation)",
          icon: <Code2 className="w-6 h-6" />,
          level: "Must Master First",
          questions: [
            {
              q: "Explain Hoisting in JavaScript.",
              a: "Hoisting is JavaScript's default behavior of moving declarations (var, function) to the top of their scope before code execution. let/const are also hoisted but not initialized (Temporal Dead Zone).",
              why: "Shows understanding of execution context and variable environment.",
              example: `console.log(x); // undefined (not error for var)
var x = 5;

// vs
console.log(y); // ReferenceError
let y = 10;`
            },
            {
              q: "What is Closure? Real-world use case.",
              a: "A closure is a function that remembers its outer variables even after the outer function has returned. Used in data privacy, module pattern, currying.",
              why: "Core concept for React hooks, event handlers, and Node.js callbacks.",
              example: `function makeCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2`
            },
            {
              q: "Event Loop in detail with examples.",
              a: "Call Stack → Microtask Queue (Promises) → Macrotask Queue (setTimeout, I/O). Microtasks execute before next macrotask.",
              why: "Critical for understanding async behavior in Node.js and React.",
              example: `console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// Output: 1 4 3 2`
            },
            {
              q: "this keyword - 4 binding rules.",
              a: "1. Default (global/window), 2. Implicit (object calling), 3. Explicit (call/apply/bind), 4. New (constructor). Arrow functions lexically bind this.",
              why: "Essential for React class components and event handlers."
            },
            {
              q: "Prototype Chain and Inheritance.",
              a: "Every object has __proto__ linking to its constructor's prototype. Used for method sharing before ES6 classes.",
              why: "Understanding under-the-hood of classes and React component inheritance."
            },
            {
              q: "Async/Await vs Promises vs Callbacks.",
              a: "Callbacks → Promise → async/await (syntactic sugar). async/await makes error handling easier with try/catch.",
              why: "You'll write async code daily in Node.js APIs."
            }
          ]
        },
        {
          category: "MongoDB Mastery (NoSQL Database)",
          icon: <Database className="w-6 h-6" />,
          level: "Intermediate to Advanced",
          questions: [
            {
              q: "Embedding vs Referencing - When to use which?",
              a: "Embedding: For contained data (one-to-few), faster reads, atomic updates. Referencing: For large/many-to-many, avoids duplication, flexible.",
              why: "Core data modeling decision in MERN apps.",
              example: "Embed comments in blog post (few), reference products in orders (many)."
            },
            {
              q: "Explain Aggregation Pipeline stages with example.",
              a: "$match (filter), $group (aggregate), $project (reshape), $sort, $limit, $lookup (join), $unwind (de-array).",
              example: `// Top 5 highest paying job categories
db.jobs.aggregate([
  { $match: { salary: { $gt: 50000 } } },
  { $group: { _id: "$category", avgSalary: { $avg: "$salary" } } },
  { $sort: { avgSalary: -1 } },
  { $limit: 5 }
])`
            },
            {
              q: "Indexes: Types, Compound, Partial, TTL.",
              a: "Single field, compound (multiple fields, order matters), text (search), geospatial, TTL (auto-expire).",
              why: "Performance optimization - interviewers love this.",
              tip: "Always use explain('executionStats') to verify index usage."
            },
            {
              q: "Transactions in MongoDB - When possible?",
              a: "Since 4.0, multi-document ACID transactions in replica sets. Use for critical operations like bank transfers.",
              limitation: "Not in standalone, has time limit (60s default)."
            },
            {
              q: "Schema Validation in MongoDB.",
              a: "Define JSON schema in collection creation for required fields, types, enums, custom validators.",
              why: "Prevents bad data before Mongoose validation."
            },
            {
              q: "Change Streams - Real-time updates.",
              a: "Watch collection for changes (insert/update/delete). Used for real-time features like notifications.",
              example: "In HireSphere, could notify when new job matches user skills."
            }
          ]
        },
        {
          category: "Express.js & Node.js (Backend Powerhouse)",
          icon: <Server className="w-6 h-6" />,
          level: "Production Ready",
          questions: [
            {
              q: "Middleware lifecycle and error handling.",
              a: "Middleware chain → next() → next middleware. Error middleware (4 params) catches errors.",
              example: `app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});`
            },
            {
              q: "Authentication: JWT vs Sessions vs OAuth.",
              a: "JWT: Stateless, scalable. Sessions: Server-side, secure but needs Redis. OAuth: For third-party login (Google).",
              best: "JWT + HttpOnly cookie + refresh tokens for production."
            },
            {
              q: "Rate Limiting strategies.",
              a: "express-rate-limit, Redis-based token bucket, IP blocking. Prevent brute force and DDoS.",
              example: "Limit login attempts to 5 per 15 minutes per IP."
            },
            {
              q: "Streams for large files - Why and How?",
              a: "Prevents memory overflow. Use fs.createReadStream() for downloads/uploads.",
              example: "In Resume Builder, stream PDF generation instead of loading entire buffer."
            },
            {
              q: "Clustering and PM2.",
              a: "Cluster module forks workers. PM2 manages clusters, zero-downtime reloads, monitoring.",
              why: "Utilize multi-core CPUs in production Node.js."
            },
            {
              q: "Security Best Practices (Top 10).",
              a: "Helmet, CORS, input validation (Joi), rate limiting, HTTPS, no-eval, dependency scanning (npm audit), environment variables."
            }
          ]
        },
        {
          category: "React.js Mastery (Modern Frontend)",
          icon: <Globe className="w-6 h-6" />,
          level: "Hooks + Performance + Architecture",
          questions: [
            {
              q: "React 18+ New Features: Concurrent Rendering, Transitions.",
              a: "useTransition for non-urgent updates, automatic batching, Suspense for data fetching.",
              example: `const [isPending, startTransition] = useTransition();
startTransition(() => setTab(newTab)); // Low priority`
            },
            {
              q: "Custom Hooks - Best practices and examples.",
              a: "Encapsulate logic, start with 'use', accept dependencies, return values/functions.",
              example: "useDebounce, useFetch, useLocalStorage, useForm."
            },
            {
              q: "Performance Optimization Techniques.",
              a: "React.memo, useMemo, useCallback, lazy/Suspense, virtualization (react-window), avoid anonymous functions in props.",
              tip: "Profile with React DevTools Profiler first."
            },
            {
              q: "State Management: Context vs Redux vs Zustand vs Recoil.",
              a: "Context: Simple global. Redux: Complex, predictable. Zustand: Lightweight. Recoil: Atomic state.",
              current: "Zustand gaining popularity for simplicity in 2025."
            },
            {
              q: "Server Components (Next.js) vs Client Components.",
              a: "Server: Render on server, no interactivity. Client: 'use client', hooks, interactivity.",
              why: "Next.js is dominating MERN space in 2025."
            },
            {
              q: "Error Boundaries and Suspense.",
              a: "ErrorBoundary catches JS errors in child tree. Suspense shows fallback while waiting (data fetching).",
              example: "<Suspense fallback={<Spinner/>}><LazyComponent/></Suspense>"
            }
          ]
        }
      ]
    },
    projects: {
      title: "Deep Dive: Your Projects Explained Perfectly",
      projects: [
        {
          name: "HireSphere - Advanced Job Portal",
          tech: "MERN + Redux Toolkit + JWT + Multer + Cloudinary + Socket.io",
          features: [
            "Real-time job notifications via Socket.io",
            "Advanced search with MongoDB text indexes",
            "Resume parsing with ATS scoring",
            "Admin dashboard with analytics (Chart.js)",
            "Role-based access (Applicant/Recruiter/Admin)"
          ],
          challenges: [
            {
              problem: "Slow search with millions of jobs",
              solution: "Compound indexes on { title: 'text', skills: 'text', location: 1 }, pagination with $facet"
            },
            {
              problem: "Large resume uploads crashing server",
              solution: "Multer-stream to Cloudinary, progress tracking, resume limits"
            },
            {
              problem: "Stale data in real-time feeds",
              solution: "Change streams + Socket.io broadcast on job updates"
            }
          ],
          pitch: "Built a scalable job portal handling concurrent uploads and real-time features, optimizing MongoDB queries that reduced search time from 3s to under 300ms."
        },
        {
          name: "Resume Builder Pro",
          tech: "MERN + React-PDF + React-Quill + Zustand + Drag-n-Drop",
          features: [
            "20+ ATS-friendly templates",
            "Real-time preview with live editing",
            "Export PDF/JSON, import LinkedIn",
            "Collaborative editing (operational transformation)",
            "AI suggestions (integrated mock API)"
          ],
          challenges: [
            {
              problem: "Frequent re-renders killing performance",
              solution: "Debouncing inputs, memoizing heavy components, virtualization in template selector"
            },
            {
              problem: "PDF generation slow for complex layouts",
              solution: "@react-pdf/renderer with web workers"
            }
          ],
          pitch: "Created a high-performance resume builder with real-time collaboration, focusing on ATS compatibility and user experience."
        }
      ]
    },
    coding: {
      title: "Must-Know Code Patterns & Snippets",
      snippets: [
        {
          title: "Protected Route Middleware (Express)",
          code: `const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token invalid' });
  }
};`,
          explanation: "Checks both cookie and header, populates req.user"
        },
        {
          title: "Custom Hook: useForm with Validation",
          code: `const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  return { values, errors, touched, handleChange, handleBlur };
};`,
          explanation: "Reusable form logic with validation on blur"
        },
        {
          title: "MongoDB Transaction Example",
          code: `const session = await mongoose.startSession();
session.startTransaction();
try {
  await Order.create([order], { session });
  await Product.updateOne(
    { _id: productId },
    { $inc: { stock: -quantity } },
    { session }
  );
  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}`,
          explanation: "Atomic inventory update with order creation"
        }
      ]
    },
    strategy: {
      title: "Interview Strategy: From Nervous to Confident",
      sections: [
        {
          name: "30-Second Elevator Pitch",
          content: "Hi, I'm Priyanshi, a final-year CSE student passionate about full-stack development. I've built production-grade MERN applications like HireSphere - a real-time job portal with advanced search and resume handling, where I optimized MongoDB queries reducing latency by 80%. During my internship at Job Sense, I worked in Agile teams building responsive components and APIs. I'm excited about scalable systems and clean code."
        },
        {
          name: "STAR Method Framework",
          steps: [
            "Situation: Set context (project/internship)",
            "Task: Your responsibility",
            "Action: Specific technical steps you took",
            "Result: Quantifiable impact (numbers!) + what you learned"
          ]
        },
        {
          name: "Common Behavioral Questions & Answers",
          qa: [
            {
              q: "Tell me about a challenging bug you fixed.",
              a: "In HireSphere, users reported resumes not uploading. Situation: Production issue affecting sign-ups. Task: Diagnose and fix quickly. Action: Checked Multer config, found file size limit too low, implemented streaming to Cloudinary with progress. Result: Upload success rate from 60% to 99%, improved UX."
            },
            {
              q: "How do you handle tight deadlines?",
              a: "During internship sprint, we had to deliver job tracking feature in 3 days. Prioritized MVP, used component library for UI, wrote reusable hooks, paired with senior for reviews. Delivered on time with 100% test coverage."
            }
          ]
        },
        {
          name: "Questions to Ask Interviewer",
          list: [
            "How does your team handle technical debt?",
            "What are the biggest scaling challenges right now?",
            "How do you approach code reviews and knowledge sharing?",
            "What's the deployment process like? (CI/CD pipeline)",
            "How are new technologies evaluated and adopted?"
          ]
        }
      ]
    }
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const filteredQuestions = comprehensiveContent.roadmap.sections.map(section => ({
    ...section,
    questions: section.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (q.why && q.why.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(section => section.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0000] via-[#1a0505] to-[#0f0a0a] text-gray-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-red-900/50 px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-900 rounded-2xl flex items-center justify-center shadow-2xl">
              <Terminal className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight">
                Priyanshi <span className="text-red-500">MERN Mastery 2026</span>
              </h1>
              <p className="text-sm text-gray-400 font-medium">Your Complete Interview Preparation Suite</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-bold text-sm">LIVE PREP MODE</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero Introduction */}
        <div className="text-center mb-12 py-10 px-8 rounded-3xl bg-gradient-to-r from-red-900/20 to-transparent border border-red-900/30">
          <h2 className="text-4xl font-black mb-4">{comprehensiveContent.roadmap.intro.title}</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">{comprehensiveContent.roadmap.intro.description}</p>
          <div className="flex justify-center gap-6 mt-8">
            <div className="text-center">
              <Target className="w-12 h-12 text-red-500 mx-auto mb-2" />
              <p className="font-bold">Structured Learning</p>
            </div>
            <div className="text-center">
              <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
              <p className="font-bold">Why It Matters</p>
            </div>
            <div className="text-center">
              <Timer className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <p className="font-bold">Quick Revision</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <nav className="flex gap-4 mb-12 overflow-x-auto pb-4">
          {[
            { id: 'roadmap', label: 'Complete Roadmap', icon: <BookOpen className="w-6 h-6" /> },
            { id: 'projects', label: 'Project Mastery', icon: <Briefcase className="w-6 h-6" /> },
            { id: 'coding', label: 'Code Patterns', icon: <Code2 className="w-6 h-6" /> },
            { id: 'strategy', label: 'Interview Strategy', icon: <Target className="w-6 h-6" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-red-700 text-white shadow-2xl shadow-red-900/50'
                  : 'bg-white/5 border border-red-900/30 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Search */}
        <div className="relative mb-12">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" />
          <input
            type="text"
            placeholder="Search anything... (e.g., closure, aggregation, JWT, performance)"
            className="w-full bg-white/5 border border-red-900/50 rounded-3xl py-6 pl-16 pr-8 text-lg focus:outline-none focus:border-red-600 backdrop-blur-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Content */}
        {activeTab === 'roadmap' && (
          <div className="space-y-16">
            {searchQuery 
              ? filteredQuestions.map((section, i) => renderSection(section, i))
              : comprehensiveContent.roadmap.sections.map((section, i) => renderSection(section, i))
            }
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-16">
            <h2 className="text-4xl font-black text-center mb-12">{comprehensiveContent.projects.title}</h2>
            {comprehensiveContent.projects.projects.map((project, idx) => (
              <div key={idx} className="bg-gradient-to-br from-red-900/20 to-transparent rounded-3xl p-10 border border-red-900/40">
                <h3 className="text-4xl font-black mb-6">{project.name}</h3>
                <p className="text-2xl text-red-400 mb-8">Tech Stack: {project.tech}</p>
                
                <div className="grid md:grid-cols-2 gap-10 mb-12">
                  <div>
                    <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Zap className="w-8 h-8 text-yellow-500" />
                      Key Features
                    </h4>
                    <ul className="space-y-4">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex gap-4 text-lg">
                          <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <AlertCircle className="w-8 h-8 text-orange-500" />
                      Challenges & Solutions
                    </h4>
                    {project.challenges.map((c, i) => (
                      <div key={i} className="mb-8 p-6 bg-black/40 rounded-2xl">
                        <p className="font-bold text-red-400 mb-2">Problem: {c.problem}</p>
                        <p className="text-green-400">Solution: {c.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-transparent p-8 rounded-3xl border border-green-900/50">
                  <p className="text-2xl font-bold text-green-400 mb-4">Perfect Interview Pitch:</p>
                  <p className="text-xl italic leading-relaxed">{project.pitch}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'coding' && (
          <div className="space-y-12">
            <h2 className="text-4xl font-black text-center mb-12">{comprehensiveContent.coding.title}</h2>
            {comprehensiveContent.coding.snippets.map((snippet, idx) => (
              <div key={idx} className="bg-black/50 rounded-3xl border border-red-900/50 overflow-hidden">
                <div className="bg-red-900/30 px-8 py-6 flex justify-between items-center">
                  <h3 className="text-2xl font-bold">{snippet.title}</h3>
                  <button
                    onClick={() => handleCopy(snippet.code)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition"
                  >
                    <Copy className="w-5 h-5" />
                    {copiedCode === snippet.code ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="p-8 overflow-x-auto">
                  <code className="text-green-400 font-mono text-lg leading-relaxed">{snippet.code}</code>
                </pre>
                <div className="px-8 py-6 bg-black/60 border-t border-red-900/30">
                  <p className="text-yellow-400 font-bold mb-2">Why this matters:</p>
                  <p className="text-lg">{snippet.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'strategy' && (
          <div className="space-y-16">
            <h2 className="text-4xl font-black text-center mb-12">{comprehensiveContent.strategy.title}</h2>
            {comprehensiveContent.strategy.sections.map((section, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900/20 to-transparent rounded-3xl p-10 border border-purple-900/40">
                <h3 className="text-3xl font-black mb-8">{section.name}</h3>
                {section.content && <p className="text-xl leading-relaxed mb-8">{section.content}</p>}
                {section.steps && (
                  <ol className="space-y-6">
                    {section.steps.map((step, i) => (
                      <li key={i} className="flex gap-4 text-xl">
                        <span className="font-black text-purple-400">{i+1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
                {section.qa && section.qa.map((item, i) => (
                  <div key={i} className="mb-10">
                    <p className="text-2xl font-bold text-purple-400 mb-4">Q: {item.q}</p>
                    <p className="text-xl leading-relaxed bg-black/40 p-6 rounded-2xl">A: {item.a}</p>
                  </div>
                ))}
                {section.list && (
                  <ul className="space-y-6">
                    {section.list.map((q, i) => (
                      <li key={i} className="flex gap-4 text-xl">
                        <ArrowRight className="w-8 h-8 text-purple-500 flex-shrink-0" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );

  function renderSection(section, index) {
    return (
      <div key={index} className="space-y-8">
        <div className="flex items-center gap-6 pb-6 border-b-2 border-red-900/50">
          {section.icon}
          <div>
            <h3 className="text-4xl font-black">{section.category}</h3>
            <p className="text-xl text-red-400 font-bold">{section.level}</p>
          </div>
        </div>
        
        <div className="grid gap-8">
          {section.questions.map((q, qIdx) => {
            const id = `${index}-${qIdx}`;
            const isExpanded = expandedQuestion === id;
            
            return (
              <div
                key={id}
                className="bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-red-900/40 overflow-hidden cursor-pointer hover:border-red-600 transition-all"
                onClick={() => setExpandedQuestion(isExpanded ? null : id)}
              >
                <div className="p-8 flex justify-between items-start">
                  <h4 className="text-2xl font-bold pr-8">{q.q}</h4>
                  <ChevronRight className={`w-8 h-8 text-red-500 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </div>
                
                {isExpanded && (
                  <div className="px-8 pb-8 space-y-8 border-t border-red-900/30 pt-8">
                    <div>
                      <p className="text-xl font-bold text-green-400 mb-4">Answer:</p>
                      <p className="text-lg leading-relaxed">{q.a}</p>
                    </div>
                    
                    {q.why && (
                      <div>
                        <p className="text-xl font-bold text-yellow-400 mb-4">Why Interviewers Ask This:</p>
                        <p className="text-lg leading-relaxed">{q.why}</p>
                      </div>
                    )}
                    
                    {q.example && (
                      <div>
                        <p className="text-xl font-bold text-blue-400 mb-4">Example:</p>
                        <pre className="bg-black/60 p-6 rounded-2xl overflow-x-auto">
                          <code className="text-green-300 font-mono">{q.example}</code>
                        </pre>
                      </div>
                    )}
                    
                    {q.tip && (
                      <div className="bg-yellow-900/20 p-6 rounded-2xl border border-yellow-900/50">
                        <p className="text-yellow-400 font-bold text-lg">Pro Tip: {q.tip}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default App;
