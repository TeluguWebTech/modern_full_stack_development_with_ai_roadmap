import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Code,
  Terminal,
  Globe,
  Server,
  Database,
  Shield,
  Upload,
  Zap,
  Rocket,
  CheckCircle,
  Circle,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Target,
  Clock,
  Award,
  ArrowRight,
  Play,
  Lock,
  Search,
  Filter,
  SortAsc,
  Image,
  Cpu,
  Cloud
} from 'lucide-react';

const BackendPath = () => {
  const [completedWeeks, setCompletedWeeks] = useState(new Set());
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [progress, setProgress] = useState(0);

  const weeksData = [
    {
      week: 1,
      title: "Programming Fundamentals",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      duration: "7 days",
      topics: [
        "Variables & Data Types",
        "Operators & Expressions",
        "Conditional Statements (if, else, switch)",
        "Loops (for, while, do-while)",
        "Functions & Scope",
        "Arrays & Objects",
        "Basic Problem Solving"
      ],
      practice: [
        "Find largest number in array",
        "Reverse a string",
        "Count vowels in string",
        "Build a simple calculator"
      ],
      outcome: "Understanding how programming works"
    },
    {
      week: 2,
      title: "Advanced JavaScript Concepts",
      icon: Terminal,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      duration: "7 days",
      topics: [
        "Objects & Classes",
        "OOP Concepts (Encapsulation, Inheritance)",
        "Arrow Functions & Callbacks",
        "Promises & Async/Await",
        "Modules (import/export)",
        "Error Handling (try/catch)",
        "Event Loop & Asynchronous Programming"
      ],
      practice: [
        "Build a promise-based data fetcher",
        "Create a class-based user system",
        "Implement async error handling",
        "Build a module-based utility library"
      ],
      outcome: "Modern JavaScript mastery"
    },
    {
      week: 3,
      title: "Web Fundamentals",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      duration: "7 days",
      topics: [
        "How the Internet Works",
        "Client-Server Architecture",
        "HTTP & HTTPS Protocol",
        "Request & Response Cycle",
        "REST API Basics",
        "Status Codes (200, 404, 500)",
        "JSON Data Format"
      ],
      practice: [
        "Analyze HTTP requests using DevTools",
        "Create mock API documentation",
        "Test APIs with Postman",
        "Build a simple HTTP server"
      ],
      outcome: "Understanding web communication"
    },
    {
      week: 4,
      title: "Node.js Fundamentals",
      icon: Server,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      duration: "7 days",
      topics: [
        "What is Node.js & Architecture",
        "Event Loop Deep Dive",
        "Core Modules (fs, path, os)",
        "NPM Package Manager",
        "Creating HTTP Server",
        "File System Operations",
        "Environment Variables"
      ],
      practice: [
        "Create a file organizer CLI tool",
        "Build a simple HTTP server",
        "Create and publish npm package",
        "Build a weather CLI app"
      ],
      outcome: "Running backend JavaScript"
    },
    {
      week: 5,
      title: "Express.js Framework",
      icon: Rocket,
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      duration: "7 days",
      topics: [
        "Express.js Overview",
        "Routing & Route Parameters",
        "Middleware Concept",
        "Request & Response Handling",
        "REST API Development",
        "Error Handling Middleware",
        "API Structure & Organization"
      ],
      practice: [
        "Build User API (CRUD)",
        "Create custom middleware",
        "Implement error handling",
        "Build a blog API"
      ],
      outcome: "Building REST APIs"
    },
    {
      week: 6,
      title: "Databases (SQL)",
      icon: Database,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      duration: "7 days",
      topics: [
        "Database Concepts",
        "SQL Basics & Syntax",
        "Tables & Relationships",
        "Primary & Foreign Keys",
        "CRUD Operations",
        "Joins & Subqueries",
        "Indexes & Optimization"
      ],
      practice: [
        "Design e-commerce database",
        "Write complex JOIN queries",
        "Create database triggers",
        "Optimize slow queries"
      ],
      outcome: "SQL database proficiency"
    },
    {
      week: 7,
      title: "Database Integration",
      icon: Database,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      duration: "7 days",
      topics: [
        "Connecting Node with Database",
        "ORM (Prisma/Sequelize)",
        "Database Models",
        "CRUD APIs with Database",
        "Query Optimization",
        "Connection Pooling",
        "Migrations & Seeds"
      ],
      practice: [
        "Build complete CRUD API",
        "Implement user model",
        "Create product catalog API",
        "Add database validation"
      ],
      outcome: "Full-stack database integration"
    },
    {
      week: 8,
      title: "Authentication & Security",
      icon: Shield,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      duration: "7 days",
      topics: [
        "Authentication vs Authorization",
        "JWT Implementation",
        "Password Hashing (bcrypt)",
        "Login/Register APIs",
        "Role-Based Access Control",
        "Input Validation & Sanitization",
        "Security Best Practices"
      ],
      practice: [
        "Build auth system with JWT",
        "Implement password reset",
        "Add role-based permissions",
        "Protect routes with middleware"
      ],
      outcome: "Secure authentication system"
    },
    {
      week: 9,
      title: "Advanced API Features",
      icon: Search,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      duration: "7 days",
      topics: [
        "Search Implementation",
        "Filtering & Sorting",
        "Pagination Strategies",
        "API Versioning",
        "Rate Limiting",
        "API Documentation (Swagger)",
        "GraphQL Basics"
      ],
      practice: [
        "Add search to product API",
        "Implement sorting & filtering",
        "Create paginated endpoints",
        "Document API with Swagger"
      ],
      outcome: "Production-ready APIs"
    },
    {
      week: 10,
      title: "File Upload & Storage",
      icon: Upload,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      duration: "7 days",
      topics: [
        "File Upload Basics",
        "Multer Middleware",
        "Image Processing",
        "Cloud Storage (AWS S3)",
        "File Validation",
        "Chunk Upload",
        "CDN Integration"
      ],
      practice: [
        "Build profile picture upload",
        "Create document upload system",
        "Implement cloud storage",
        "Add image optimization"
      ],
      outcome: "File handling expertise"
    },
    {
      week: 11,
      title: "Performance & Production",
      icon: Zap,
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      duration: "7 days",
      topics: [
        "Caching Strategies (Redis)",
        "Database Optimization",
        "Logging (Winston)",
        "Error Tracking (Sentry)",
        "Performance Monitoring",
        "Load Balancing",
        "Background Jobs (Bull)"
      ],
      practice: [
        "Implement Redis caching",
        "Add logging system",
        "Set up error tracking",
        "Create background jobs"
      ],
      outcome: "Production-ready backend"
    },
    {
      week: 12,
      title: "Deployment",
      icon: Cloud,
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50",
      duration: "7 days",
      topics: [
        "Linux Basics",
        "Docker Containers",
        "CI/CD Pipelines",
        "Cloud Platforms (AWS/DigitalOcean)",
        "Environment Configuration",
        "Domain & SSL",
        "Monitoring & Scaling"
      ],
      practice: [
        "Deploy API to Railway/Render",
        "Set up CI/CD with GitHub Actions",
        "Configure SSL certificate",
        "Monitor with PM2"
      ],
      outcome: "Live backend deployment"
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

  const WeekCard = ({ data }) => {
    const isCompleted = completedWeeks.has(data.week);
    const isExpanded = expandedWeek === data.week;
    const Icon = data.icon;

    return (
      <div className={`rounded-2xl transition-all duration-300 mb-4 ${isExpanded ? 'shadow-xl' : 'shadow-md hover:shadow-lg'}`}>
        <div
          className={`bg-white rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${isCompleted ? 'border-green-400' : 'border-gray-200'}`}
        >
          <div
            className="p-6"
            onClick={() => toggleWeek(data.week)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${data.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-mono text-gray-500">Week {data.week}</span>
                    {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">{data.title}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {data.duration}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Target className="w-4 h-4 mr-1" />
                      {data.topics.length} topics
                    </span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleComplete(data.week);
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${isCompleted
                      ? 'bg-green-500 text-white hover:bg-green-600'
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
            <div className="border-t border-gray-100 p-6 bg-gray-50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Topics Covered
                  </h4>
                  <ul className="space-y-2">
                    {data.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <ChevronRight className="w-3 h-3 text-green-500 mr-2" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <Play className="w-4 h-4 mr-2" />
                    Practice Tasks
                  </h4>
                  <ul className="space-y-2">
                    {data.practice.map((task, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <ArrowRight className="w-3 h-3 text-blue-500 mr-2" />
                        {task}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
                    <p className="text-sm font-semibold text-gray-700">🎯 Outcome:</p>
                    <p className="text-sm text-gray-600 mt-1">{data.outcome}</p>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Celebration Toast */}
      {showCelebration && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-3">
            <Award className="w-8 h-8" />
            <div>
              <p className="font-bold text-lg">🎉 Amazing Achievement! 🎉</p>
              <p className="text-sm">You've completed the entire 12-week roadmap!</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 py-16 relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 mb-6">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-semibold">12-Week Intensive Program</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Backend Development
                <span className="h-18 block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                  Learning Path
                </span>
              </h1>
              <p className="text-lg text-indigo-200 mb-6 max-w-2xl">
                From zero to production-ready backend developer. Master JavaScript, Node.js, Express, databases, and deployment in just 12 weeks.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                  <Code className="w-4 h-4" />
                  <span>12 Weeks</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                  <Database className="w-4 h-4" />
                  <span>60+ Topics</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                  <Rocket className="w-4 h-4" />
                  <span>Real Projects</span>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 w-64 text-center">
                <p className="text-sm text-indigo-200 mb-2">Overall Progress</p>
                <div className="relative w-40 h-40 mx-auto">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="white"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 70}`}
                      strokeDashoffset={`${2 * Math.PI * 70 * (1 - progress / 100)}`}
                      className="transition-all duration-500"
                      style={{ strokeLinecap: 'round' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">{Math.round(progress)}%</span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-indigo-200">
                  {completedWeeks.size} of {weeksData.length} weeks completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex-1 mr-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-semibold text-gray-600">Journey Progress</span>
              <span className="text-sm font-bold text-green-600">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Learning Flow Visualization */}
        <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Rocket className="w-6 h-6 mr-2 text-purple-500" />
            12-Week Learning Journey
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
                        ? 'bg-green-500 text-white'
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
        <div className="max-w-4xl mx-auto">
          {weeksData.map((week) => (
            <WeekCard key={week.week} data={week} />
          ))}

          {/* Completion Certificate */}
          {progress === 100 && (
            <div className="mt-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-white text-center transform transition-all animate-pulse">
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">🏆 Backend Developer Certified! 🏆</h3>
              <p className="text-yellow-100">You've successfully completed the 12-week backend development roadmap!</p>
              <button className="mt-4 px-6 py-2 bg-white text-orange-600 rounded-lg font-semibold hover:shadow-lg transition-all">
                Download Certificate
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default BackendPath;