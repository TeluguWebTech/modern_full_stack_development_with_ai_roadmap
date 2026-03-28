import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Code,
  Palette,
  Smartphone,
  Brain,
  Zap,
  MousePointer,
  Plug,
  Atom,
  Layers,
  GitBranch,
  TestTube,
  Rocket,
  CheckCircle,
  Circle,
  ChevronRight,
  ChevronDown,
  Star,
  Target,
  Award,
  Layout,
  BookOpen,
  Clock,
  Sparkles,
  ArrowRight,
  Globe,

} from 'lucide-react';

const FrontendPath = () => {
  const [completedWeeks, setCompletedWeeks] = useState(new Set());
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeView, setActiveView] = useState('timeline'); // timeline or flow

  const weeksData = [
    {
      week: 1,
      title: "HTML & CSS Fundamentals",
      icon: Code,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      gradient: "orange",
      duration: "7 days",
      topics: [
        "HTML5 Document Structure",
        "Semantic HTML Tags",
        "Headings, Paragraphs, Links",
        "Images, Lists, Tables",
        "Forms & Input Elements",
        "CSS Syntax & Selectors",
        "Colors, Fonts, Typography",
        "Box Model (Margin, Padding, Border)"
      ],
      practice: [
        "Build a personal profile page",
        "Create a simple landing page",
        "Design a contact form",
        "Style a blog post layout"
      ],
      resources: [
        "MDN Web Docs - HTML",
        "CSS Diner Game",
        "FreeCodeCamp HTML/CSS",
        "W3Schools Tutorials"
      ],
      outcome: "Create basic web pages with styling"
    },
    {
      week: 2,
      title: "Advanced CSS & Responsive Design",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      gradient: "green",
      duration: "7 days",
      topics: [
        "Flexbox (Complete Guide)",
        "CSS Grid Layout",
        "Responsive Design Principles",
        "Media Queries",
        "Mobile-First Approach",
        "CSS Animations & Transitions",
        "CSS Variables (Custom Properties)",
        "Modern CSS Features"
      ],
      practice: [
        "Build responsive landing page",
        "Create product card grid",
        "Design mobile-first portfolio",
        "Implement animated navigation"
      ],
      resources: [
        "Flexbox Froggy Game",
        "Grid Garden Game",
        "CSS Tricks Guides",
        "Responsive Web Design"
      ],
      outcome: "Build modern responsive UIs"
    },
    {
      week: 3,
      title: "JavaScript Fundamentals",
      icon: Brain,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      gradient: "yellow",
      duration: "7 days",
      topics: [
        "Variables (var, let, const)",
        "Data Types & Type Coercion",
        "Operators & Expressions",
        "Conditional Statements",
        "Loops (for, while, do-while)",
        "Functions & Scope",
        "Arrays & Array Methods",
        "Objects & Object Methods"
      ],
      practice: [
        "Reverse a string program",
        "Find largest/smallest in array",
        "Build simple calculator",
        "Create number guessing game"
      ],
      resources: [
        "JavaScript.info",
        "Eloquent JavaScript",
        "FreeCodeCamp JS",
        "JavaScript30 Challenge"
      ],
      outcome: "Master JavaScript programming basics"
    },
    {
      week: 4,
      title: "Advanced JavaScript (ES6+)",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      gradient: "purple",
      duration: "7 days",
      topics: [
        "Arrow Functions",
        "Destructuring Assignment",
        "Spread & Rest Operators",
        "Template Literals",
        "ES6 Modules (import/export)",
        "Callbacks & Higher-Order Functions",
        "Promises & Promise Chaining",
        "Async/Await Pattern"
      ],
      practice: [
        "Build promise-based data loader",
        "Create module-based utilities",
        "Implement async/await flows",
        "Practice array methods (map, filter, reduce)"
      ],
      resources: [
        "ES6 Features Guide",
        "JavaScript Promises",
        "Async/Await Tutorial",
        "Modern JS Guide"
      ],
      outcome: "Write modern, clean JavaScript code"
    },
    {
      week: 5,
      title: "DOM Manipulation & Events",
      icon: MousePointer,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      gradient: "blue",
      duration: "7 days",
      topics: [
        "DOM Tree & Node Types",
        "Selecting DOM Elements",
        "Traversing the DOM",
        "Manipulating Elements",
        "Event Listeners & Handlers",
        "Event Delegation",
        "Form Validation",
        "Local Storage & Session Storage"
      ],
      practice: [
        "Build interactive todo list",
        "Create counter application",
        "Implement form validation",
        "Build modal/popup system"
      ],
      resources: [
        "DOM Manipulation Guide",
        "Event Handling Tutorial",
        "Local Storage Guide",
        "Interactive DOM Examples"
      ],
      outcome: "Create interactive web applications"
    },
    {
      week: 6,
      title: "API Integration",
      icon: Plug,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      gradient: "teal",
      duration: "7 days",
      topics: [
        "HTTP Protocol Basics",
        "REST API Concepts",
        "Fetch API Deep Dive",
        "Axios Library",
        "Async/Await with APIs",
        "Error Handling",
        "JSON Parsing",
        "API Authentication"
      ],
      practice: [
        "Build weather application",
        "Create user list with API",
        "Build movie search app",
        "Implement GitHub profile viewer"
      ],
      resources: [
        "JSONPlaceholder API",
        "OpenWeatherMap API",
        "GitHub REST API",
        "Postman Tutorial"
      ],
      outcome: "Consume backend APIs effectively"
    },
    {
      week: 7,
      title: "React Fundamentals",
      icon: Atom,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      gradient: "cyan",
      duration: "7 days",
      topics: [
        "What is React?",
        "JSX Syntax",
        "Functional Components",
        "Props & PropTypes",
        "State Management (useState)",
        "Event Handling in React",
        "Conditional Rendering",
        "Lists & Keys"
      ],
      practice: [
        "Build counter app with React",
        "Create todo list application",
        "Build component library",
        "Implement user profile card"
      ],
      resources: [
        "React Official Docs",
        "React Beta Docs",
        "FullStack Open React",
        "React Tutorial for Beginners"
      ],
      outcome: "Build basic React applications"
    },
    {
      week: 8,
      title: "Advanced React (Hooks)",
      icon: Layers,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      gradient: "indigo",
      duration: "7 days",
      topics: [
        "useState Deep Dive",
        "useEffect & Lifecycle",
        "Custom Hooks",
        "useContext for State",
        "useReducer Hook",
        "useRef & DOM Refs",
        "useMemo & useCallback",
        "Performance Optimization"
      ],
      practice: [
        "Build advanced todo app with filters",
        "Create custom hooks library",
        "Implement dark mode toggle",
        "Build shopping cart with reducer"
      ],
      resources: [
        "React Hooks Guide",
        "Custom Hooks Recipes",
        "useEffect Complete Guide",
        "React Performance Tips"
      ],
      outcome: "Master React hooks and patterns"
    },
    {
      week: 9,
      title: "React Ecosystem & Router",
      icon: Globe,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      gradient: "pink",
      duration: "7 days",
      topics: [
        "React Router v6",
        "Navigation & Routing",
        "Protected Routes",
        "Axios with React",
        "Component Architecture",
        "Folder Structure",
        "State Management (Redux Basics)",
        "Reusable Components"
      ],
      practice: [
        "Build multi-page React app",
        "Create blog with routing",
        "Implement authentication flow",
        "Build dashboard layout"
      ],
      resources: [
        "React Router Docs",
        "Redux Toolkit Guide",
        "Axios React Tutorial",
        "React Project Structure"
      ],
      outcome: "Build production-ready React applications"
    },
    {
      week: 10,
      title: "Git & GitHub Collaboration",
      icon: GitBranch,
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50",
      gradient: "gray",
      duration: "7 days",
      topics: [
        "Git Fundamentals",
        "Repository Management",
        "Commits & History",
        "Branching Strategies",
        "Merging & Rebasing",
        "Remote Repositories",
        "Pull Requests",
        "GitHub Workflow"
      ],
      practice: [
        "Upload projects to GitHub",
        "Practice branching workflow",
        "Create pull requests",
        "Collaborate on open source"
      ],
      resources: [
        "Git Official Docs",
        "GitHub Skills",
        "Oh My Git! Game",
        "Pro Git Book"
      ],
      outcome: "Professional version control workflow"
    },
    {
      week: 11,
      title: "Testing Fundamentals",
      icon: TestTube,
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      gradient: "violet",
      duration: "7 days",
      topics: [
        "Why Testing Matters",
        "Unit Testing Concepts",
        "Jest Framework",
        "React Testing Library",
        "Testing Components",
        "Testing Hooks",
        "Mocking Functions",
        "Debugging Techniques"
      ],
      practice: [
        "Write unit tests for utilities",
        "Test React components",
        "Mock API calls",
        "Implement test-driven development"
      ],
      resources: [
        "Jest Documentation",
        "React Testing Library",
        "Testing JavaScript",
        "Vitest Guide"
      ],
      outcome: "Write reliable, tested code"
    },
    {
      week: 12,
      title: "Fullstack Project & Portfolio",
      icon: Rocket,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      gradient: "red",
      duration: "7 days",
      topics: [
        "Fullstack Project Planning",
        "React Frontend Design",
        "API Integration",
        "Authentication Implementation",
        "Database Integration",
        "Deployment Strategies",
        "Portfolio Website",
        "Resume & Interview Prep"
      ],
      practice: [
        "Build task management app",
        "Create blog platform",
        "Develop e-commerce frontend",
        "Build personal portfolio"
      ],
      projectIdeas: [
        { name: "Task Manager Pro", desc: "Drag-drop tasks, filters, local storage", difficulty: "Intermediate" },
        { name: "Blog Platform", desc: "Markdown support, comments, user auth", difficulty: "Advanced" },
        { name: "E-commerce Store", desc: "Shopping cart, filters, checkout", difficulty: "Advanced" },
        { name: "Portfolio Website", desc: "Projects, skills, GitHub links", difficulty: "Beginner" }
      ],
      resources: [
        "Vercel/Netlify Deployment",
        "Portfolio Examples",
        "Tech Interview Guide",
        "Resume Templates"
      ],
      outcome: "Job-ready frontend developer with portfolio"
    }
  ];

  const toggleWeek = (week) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };

  const toggleComplete = (week) => {
    setCompletedWeeks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(week)) {
        newSet.delete(week);
      } else {
        newSet.add(week);
        if (newSet.size === weeksData.length) {
          setShowCelebration(true);
          setTimeout(() => setShowCelebration(false), 5000);
        }
      }
      return newSet;
    });
  };

  useEffect(() => {
    setProgress((completedWeeks.size / weeksData.length) * 100);
  }, [completedWeeks]);

  const WeekCard = ({ weekData }) => {
    const isCompleted = completedWeeks.has(weekData.week);
    const isExpanded = expandedWeek === weekData.week;
    const Icon = weekData.icon;

    return (
      <div className={`rounded-2xl transition-all duration-300 mb-4 ${isExpanded ? 'shadow-2xl scale-[1.01]' : 'shadow-lg hover:shadow-xl'}`}>
        <div
          className={`bg-white rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${isCompleted ? 'border-green-400' : 'border-gray-200'}`}
        >
          <div
            className="p-6"
            onClick={() => toggleWeek(weekData.week)}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${weekData.color} shadow-lg flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 flex-wrap gap-2">
                    <span className="text-xs font-mono px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                      Week {weekData.week}
                    </span>
                    <span className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {weekData.duration}
                    </span>
                    {isCompleted && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mt-2 truncate">{weekData.title}</h3>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleComplete(weekData.week);
                  }}
                  className={`px-5 py-2 rounded-xl font-semibold transition-all transform hover:scale-105 flex-shrink-0 ${isCompleted
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {isCompleted ? 'Completed ✓' : 'Mark Complete'}
                </button>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </div>
            </div>
          </div>

          {isExpanded && (
            <div className="border-t border-gray-100 p-6 bg-gradient-to-br from-gray-50 to-white">
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                    Topics Covered
                  </h4>
                  <ul className="space-y-2">
                    {weekData.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <ChevronRight className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                    <Target className="w-5 h-5 mr-2 text-purple-500" />
                    Practice Projects
                  </h4>
                  <ul className="space-y-2">
                    {weekData.practice.map((task, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5"></div>
                        {task}
                      </li>
                    ))}
                  </ul>
                  {weekData.projectIdeas && (
                    <div className="mt-4">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">🎯 Project Ideas:</h4>
                      {weekData.projectIdeas.map((proj, idx) => (
                        <div key={idx} className="text-xs text-gray-600 mb-1">• {proj.name} ({proj.difficulty})</div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    Resources
                  </h4>
                  <ul className="space-y-2">
                    {weekData.resources.map((resource, idx) => (
                      <li key={idx} className="flex items-center text-sm text-blue-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {resource}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <p className="text-sm font-semibold text-green-800">🎯 Learning Outcome:</p>
                    <p className="text-sm text-green-700 mt-1">{weekData.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const FlowView = () => (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl inline-block mb-4">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-lg mb-2">Foundation</h3>
          <p className="text-sm text-gray-600">HTML → CSS → JavaScript</p>
          <p className="text-xs text-gray-500 mt-2">Weeks 1-5</p>
        </div>
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-2xl inline-block mb-4">
            <Atom className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-lg mb-2">Framework</h3>
          <p className="text-sm text-gray-600">React + Ecosystem</p>
          <p className="text-xs text-gray-500 mt-2">Weeks 7-9</p>
        </div>
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-4 rounded-2xl inline-block mb-4">
            <GitBranch className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-lg mb-2">Professional Skills</h3>
          <p className="text-sm text-gray-600">Git → Testing</p>
          <p className="text-xs text-gray-500 mt-2">Weeks 10-11</p>
        </div>
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4 rounded-2xl inline-block mb-4">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-lg mb-2">Real Development</h3>
          <p className="text-sm text-gray-600">Fullstack Project → Portfolio</p>
          <p className="text-xs text-gray-500 mt-2">Week 12</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Celebration Modal */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 text-center transform animate-bounceIn max-w-md mx-4">
            <Award className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">🎉 Congratulations! 🎉</h2>
            <p className="text-gray-600 mb-4">You've completed the 12-week frontend roadmap!</p>
            <p className="text-sm text-gray-500 mb-6">You're now a job-ready frontend developer</p>
            <button
              onClick={() => setShowCelebration(false)}
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold"
            >
              Continue Journey
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 py-16 lg:py-20 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 mb-6">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-semibold">12-Week Intensive Program</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Frontend Development
                <span className="h-18 block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Learning Path
                </span>
              </h1>
              <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                From zero to job-ready frontend developer. Master HTML, CSS, JavaScript, React, and build stunning web applications in 12 weeks.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 bg-white/10 rounded-xl px-5 py-2 backdrop-blur">
                  <Layout className="w-5 h-5" />
                  <span>12 Weeks</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-xl px-5 py-2 backdrop-blur">
                  <Smartphone className="w-5 h-5" />
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-xl px-5 py-2 backdrop-blur">
                  <Atom className="w-5 h-5" />
                  <span>React Expert</span>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-sm">
              <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20">
                <p className="text-center text-indigo-200 mb-4">Your Progress</p>
                <div className="relative w-48 h-48 mx-auto">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 88}`}
                      strokeDashoffset={`${2 * Math.PI * 88 * (1 - progress / 100)}`}
                      className="transition-all duration-500"
                      style={{ strokeLinecap: 'round' }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#ec489a" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-bold">{Math.round(progress)}%</span>
                      <p className="text-sm text-indigo-200 mt-1">Complete</p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-indigo-200 mt-4">
                  {completedWeeks.size} of {weeksData.length} weeks completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar & View Toggle */}
      <div className="sticky top-0 z-20 bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">{completedWeeks.size} Weeks Done</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">Job Ready</span>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-500 to-pink-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveView('timeline')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeView === 'timeline'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                Timeline View
              </button>
              <button
                onClick={() => setActiveView('flow')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeView === 'flow'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                Flow View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {activeView === 'flow' && (
          <div className="mb-12">
            <FlowView />
          </div>
        )}

        {/* Learning Path Visualization */}
        <div className="mb-12 bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <ArrowRight className="w-6 h-6 mr-2 text-purple-500" />
            Your 12-Week Learning Journey
          </h2>
          <div className="flex flex-wrap items-center justify-between gap-2">
            {weeksData.map((week, idx) => (
              <React.Fragment key={week.week}>
                <div
                  className={`flex flex-col items-center ${completedWeeks.has(week.week) ? 'opacity-100' : 'opacity-60'
                    }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${completedWeeks.has(week.week)
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                      }`}
                  >
                    {week.week}
                  </div>
                  <span className="text-xs text-gray-500 mt-1 hidden md:block">{week.title.split(' ')[0]}</span>
                </div>
                {idx < weeksData.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-300 hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Weeks List */}
        <div className="max-w-5xl mx-auto">
          {weeksData.map((week) => (
            <WeekCard key={week.week} weekData={week} />
          ))}

          {/* Completion Certificate */}
          {progress === 100 && (
            <div className="mt-12 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 rounded-2xl p-10 text-white text-center transform transition-all animate-pulse">
              <Award className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-3">🏆 Frontend Developer Certified! 🏆</h3>
              <p className="text-xl mb-4">You've mastered the complete frontend development roadmap!</p>
              <p className="text-lg mb-6">Ready to build amazing web applications and start your career</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="px-6 py-3 bg-white text-orange-600 rounded-xl font-bold hover:shadow-xl transition-all">
                  Download Certificate
                </button>
                <button className="px-6 py-3 bg-black/20 backdrop-blur text-white rounded-xl font-bold hover:bg-black/30 transition-all">
                  Build Portfolio
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-bounceIn {
          animation: bounceIn 0.5s ease-out;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default FrontendPath;