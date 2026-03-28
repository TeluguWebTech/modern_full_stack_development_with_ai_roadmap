
import React, { useState, useEffect } from 'react';
import {
  Code,
  Palette,
  Brain,
  MousePointer,
  Plug,
  Atom,
  GitBranch,
  TestTube,
  Briefcase,
  CheckCircle,
  Circle,
  ChevronRight,
  ChevronDown,
  Star,
  Rocket,
  Target,
  Award,
  Layout,
  Smartphone,
  Zap,
  Layers,
  Sparkles
} from 'lucide-react';

const FrontendRoadmap = () => {
  const [completedModules, setCompletedModules] = useState(new Set());
  const [expandedModule, setExpandedModule] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const modulesData = [
    {
      id: 1,
      title: "HTML & CSS",
      icon: Palette,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      gradient: "orange",
      duration: "2 weeks",
      topics: [
        "HTML5 Semantic Structure",
        "Forms & Input Validation",
        "CSS3 Selectors & Properties",
        "Flexbox Layout",
        "CSS Grid System",
        "Responsive Design (Mobile First)",
        "CSS Animations & Transitions",
        "CSS Variables & Custom Properties"
      ],
      practice: [
        "Build a responsive portfolio page",
        "Create a landing page with animations",
        "Design a mobile-first e-commerce card",
        "Build a complete blog layout"
      ],
      resources: [
        "MDN Web Docs",
        "CSS Tricks Guide",
        "Flexbox Froggy Game",
        "Grid Garden Game"
      ],
      outcome: "Build beautiful, responsive web pages"
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      icon: Code,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      gradient: "yellow",
      duration: "3 weeks",
      topics: [
        "Variables (var, let, const)",
        "Data Types & Type Conversion",
        "Operators & Expressions",
        "Conditional Statements",
        "Loops (for, while, forEach)",
        "Functions (declarations, expressions, arrow)",
        "Arrays & Array Methods",
        "Objects & Object Methods",
        "Error Handling (try/catch)",
        "ES6+ Features"
      ],
      practice: [
        "Build a calculator app",
        "Create a todo list manager",
        "Implement array manipulation tools",
        "Build a weather app logic"
      ],
      resources: [
        "JavaScript.info",
        "Eloquent JavaScript",
        "FreeCodeCamp JS Course",
        "JavaScript30 Challenge"
      ],
      outcome: "Master JavaScript programming logic"
    },
    {
      id: 3,
      title: "DOM Manipulation",
      icon: MousePointer,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      gradient: "green",
      duration: "1.5 weeks",
      topics: [
        "DOM Tree & Nodes",
        "Selecting DOM Elements",
        "Traversing the DOM",
        "Manipulating Elements",
        "Event Listeners",
        "Event Delegation",
        "Form Validation",
        "Dynamic Content Creation",
        "Local Storage & Session Storage"
      ],
      practice: [
        "Build an interactive quiz app",
        "Create a dynamic shopping cart",
        "Implement dark mode toggle",
        "Build a modal/popup system"
      ],
      resources: [
        "DOM Manipulation Reference",
        "Event Handling Guide",
        "Local Storage Tutorial"
      ],
      outcome: "Create interactive web applications"
    },
    {
      id: 4,
      title: "API Integration",
      icon: Plug,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      gradient: "blue",
      duration: "1.5 weeks",
      topics: [
        "HTTP Protocol Basics",
        "REST API Concepts",
        "Fetch API",
        "Axios Library",
        "Async/Await with APIs",
        "Error Handling in API Calls",
        "JSON Data Parsing",
        "API Authentication (API Keys)",
        "CORS & Security"
      ],
      practice: [
        "Fetch and display weather data",
        "Build a movie search app",
        "Create a GitHub profile viewer",
        "Implement infinite scroll with API"
      ],
      resources: [
        "JSONPlaceholder API",
        "OpenWeatherMap API",
        "GitHub REST API",
        "Postman API Testing"
      ],
      outcome: "Connect frontend with backend services"
    },
    {
      id: 5,
      title: "React Fundamentals",
      icon: Atom,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      gradient: "cyan",
      duration: "4 weeks",
      topics: [
        "React Components (Functional)",
        "JSX Syntax",
        "Props & PropTypes",
        "State Management (useState)",
        "Lifecycle with useEffect",
        "Event Handling",
        "Forms in React",
        "Conditional Rendering",
        "Lists & Keys",
        "React Router v6",
        "Custom Hooks",
        "Context API"
      ],
      practice: [
        "Build a task management app",
        "Create a blog with routing",
        "Build an e-commerce product page",
        "Implement authentication flow"
      ],
      resources: [
        "React Official Docs",
        "React Beta Docs",
        "FullStack Open",
        "React Router Tutorial"
      ],
      outcome: "Build production-ready React applications"
    },
    {
      id: 6,
      title: "Git & GitHub",
      icon: GitBranch,
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50",
      gradient: "gray",
      duration: "1 week",
      topics: [
        "Git Fundamentals",
        "Repository Management",
        "Commits & History",
        "Branching Strategies",
        "Merging & Rebasing",
        "Remote Repositories",
        "Pull Requests",
        "GitHub Workflow",
        "Collaboration Tools",
        "Open Source Contribution"
      ],
      practice: [
        "Create and manage repositories",
        "Practice branching workflow",
        "Collaborate with pull requests",
        "Contribute to open source"
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
      id: 7,
      title: "Testing",
      icon: TestTube,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      gradient: "purple",
      duration: "1.5 weeks",
      topics: [
        "Unit Testing Concepts",
        "Jest Framework",
        "React Testing Library",
        "Testing Components",
        "Testing Hooks",
        "Mock Functions",
        "Integration Testing",
        "E2E Testing Basics",
        "Test Driven Development",
        "Debugging Techniques"
      ],
      practice: [
        "Write unit tests for utilities",
        "Test React components",
        "Mock API calls in tests",
        "Implement TDD workflow"
      ],
      resources: [
        "Jest Documentation",
        "React Testing Library",
        "Testing JavaScript",
        "Vitest Guide"
      ],
      outcome: "Write reliable, bug-free code"
    },
    {
      id: 8,
      title: "Final Project & Portfolio",
      icon: Briefcase,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      gradient: "pink",
      duration: "3 weeks",
      topics: [
        "Project Planning",
        "Architecture Design",
        "State Management",
        "API Integration",
        "Authentication Implementation",
        "Deployment Strategies",
        "Portfolio Website",
        "Resume & LinkedIn",
        "Interview Preparation",
        "Job Application Tips"
      ],
      practice: [
        "Build a full-stack e-commerce app",
        "Create a social media dashboard",
        "Develop a portfolio with projects",
        "Deploy to Vercel/Netlify"
      ],
      projects: [
        {
          name: "Task Manager Pro",
          desc: "Complete task management with drag-drop, filters, and local storage",
          difficulty: "Intermediate"
        },
        {
          name: "Blog Platform",
          desc: "Full blog with markdown support, comments, and user auth",
          difficulty: "Advanced"
        },
        {
          name: "E-commerce Store",
          desc: "Shopping cart, product filters, payment integration",
          difficulty: "Advanced"
        },
        {
          name: "Weather Dashboard",
          desc: "Real-time weather, forecasts, interactive maps",
          difficulty: "Intermediate"
        }
      ],
      resources: [
        "Portfolio Examples",
        "Deployment Guides",
        "Interview Questions",
        "Tech Resume Tips"
      ],
      outcome: "Job-ready frontend developer with portfolio"
    }
  ];

  const toggleModule = (id) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  const toggleComplete = (id) => {
    setCompletedModules(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
        if (newSet.size === modulesData.length) {
          setShowCelebration(true);
          setTimeout(() => setShowCelebration(false), 5000);
        }
      }
      return newSet;
    });
  };

  useEffect(() => {
    setProgress((completedModules.size / modulesData.length) * 100);
  }, [completedModules]);

  const ModuleCard = ({ module }) => {
    const isCompleted = completedModules.has(module.id);
    const isExpanded = expandedModule === module.id;
    const Icon = module.icon;

    return (
      <div className={`rounded-2xl transition-all duration-300 mb-5 ${isExpanded ? 'shadow-2xl scale-[1.02]' : 'shadow-lg hover:shadow-xl'}`}>
        <div
          className={`bg-white rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${isCompleted ? 'border-green-400' : 'border-gray-200'}`}
        >
          <div
            className="p-6"
            onClick={() => toggleModule(module.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${module.color} shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                      Module {module.id}
                    </span>
                    {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mt-2">{module.title}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="flex items-center text-sm text-gray-500">
                      <Rocket className="w-4 h-4 mr-1" />
                      {module.duration}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Target className="w-4 h-4 mr-1" />
                      {module.topics.length} topics
                    </span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleComplete(module.id);
                  }}
                  className={`px-5 py-2 rounded-xl font-semibold transition-all transform hover:scale-105 ${isCompleted
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {isCompleted ? 'Completed ✓' : 'Mark Complete'}
                </button>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>
          </div>

          {isExpanded && (
            <div className="border-t border-gray-100 p-6 bg-gradient-to-br from-gray-50 to-white">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                    <Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
                    Topics Covered
                  </h4>
                  <ul className="space-y-2">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <ChevronRight className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                    <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                    Practice Projects
                  </h4>
                  <ul className="space-y-2">
                    {module.practice.map((task, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5"></div>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    Resources
                  </h4>
                  <ul className="space-y-2">
                    {module.resources.map((resource, idx) => (
                      <li key={idx} className="flex items-center text-sm text-blue-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {resource}
                      </li>
                    ))}
                  </ul>
                  {module.projects && (
                    <div className="mt-4">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">🎯 Project Ideas:</h4>
                      {module.projects.map((proj, idx) => (
                        <div key={idx} className="text-xs text-gray-600 mb-1">• {proj.name} ({proj.difficulty})</div>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <p className="text-sm font-semibold text-green-800">🎯 Learning Outcome:</p>
                    <p className="text-sm text-green-700 mt-1">{module.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Celebration Modal */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 text-center transform animate-bounceIn max-w-md mx-4">
            <Award className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">🏆 Congratulations! 🏆</h2>
            <p className="text-gray-600 mb-4">You've mastered the frontend development roadmap!</p>
            <p className="text-sm text-gray-500 mb-6">You're now ready to build amazing web applications</p>
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
        <div className="container mx-auto px-6 py-20 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Complete Frontend Roadmap 2024</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Frontend Development
                <span className="h-24 block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Mastery Roadmap
                </span>
              </h1>
              <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                 Master HTML, CSS, JavaScript, React, and build stunning web applications.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 bg-white/10 rounded-xl px-5 py-2 backdrop-blur">
                  <Layout className="w-5 h-5" />
                  <span>8 Modules</span>
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
                  {completedModules.size} of {modulesData.length} modules completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Summary Bar */}
      <div className="sticky top-0 z-20 bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">{completedModules.size} Modules Done</span>
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
            <button
              onClick={() => {
                const allModules = modulesData.map(m => m.id);
                setCompletedModules(new Set(allModules));
              }}
              className="px-4 py-2 text-sm bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Complete All
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Skill Stack Visualization */}
        <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Layers className="w-6 h-6 mr-2 text-purple-500" />
            Technology Stack You'll Master
          </h2>
          <div className="flex flex-wrap gap-3">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind', 'Git', 'REST API', 'Jest', 'Vercel'].map((tech, idx) => (
              <div key={idx} className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:shadow-md transition-all">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Modules */}
        <div className="max-w-5xl mx-auto">
          {modulesData.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}

          {/* Final Motivation */}
          {progress === 100 && (
            <div className="mt-12 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 rounded-2xl p-10 text-white text-center transform transition-all animate-pulse">
              <Award className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-3">🌟 Frontend Developer Certified! 🌟</h3>
              <p className="text-xl mb-4">You've mastered the complete frontend development roadmap!</p>
              <p className="text-lg mb-6">Ready to build amazing web applications and start your career</p>
              <div className="flex gap-4 justify-center">
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

export default FrontendRoadmap;