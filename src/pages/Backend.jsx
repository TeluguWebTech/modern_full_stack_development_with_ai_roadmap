import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Globe, 
  Shield, 
  Rocket, 
  Layers, 
  Cpu, 
  Cloud,
  FileJson,
  Key,
  Search,
  Upload,
  Terminal,
  CheckCircle,
  Circle,
  ChevronRight,
  BookOpen,
  Zap,
  Lock,
  Users,
  GitBranch
} from 'lucide-react';

const BackendRoadmap = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [completedTopics, setCompletedTopics] = useState(new Set());
  const [progress, setProgress] = useState(0);

  const toggleComplete = (topicId) => {
    setCompletedTopics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(topicId)) {
        newSet.delete(topicId);
      } else {
        newSet.add(topicId);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const totalTopics = roadmapData.reduce((acc, section) => acc + (section.topics?.length || 1), 0);
    const completed = completedTopics.size;
    setProgress(Math.round((completed / totalTopics) * 100));
  }, [completedTopics]);

  const roadmapData = [
    {
      icon: Code,
      title: "Programming Language Fundamentals",
      color: "from-blue-500 to-cyan-500",
      topics: [
        { id: "lang1", name: "Variables & Data Types", desc: "Understanding primitive and reference types" },
        { id: "lang2", name: "Operators & Conditionals", desc: "if, else, switch, ternary operators" },
        { id: "lang3", name: "Loops & Functions", desc: "for, while, map, filter, reduce" },
        { id: "lang4", name: "OOP Concepts", desc: "Classes, Inheritance, Polymorphism, Encapsulation" },
        { id: "lang5", name: "Error Handling", desc: "try/catch, error boundaries, logging" }
      ]
    },
    {
      icon: Layers,
      title: "Backend Frameworks",
      color: "from-purple-500 to-pink-500",
      topics: [
        { id: "frame1", name: "Spring Boot (Java)", desc: "Enterprise-grade framework" },
        { id: "frame2", name: "Node.js + Express", desc: "JavaScript runtime & framework" },
        { id: "frame3", name: "Django/FastAPI (Python)", desc: "High-performance Python frameworks" },
        { id: "frame4", name: "ASP.NET Core", desc: "Microsoft's cross-platform framework" },
        { id: "frame5", name: "Gin/Fiber (Go)", desc: "Lightweight, high-performance Go frameworks" }
      ]
    },
    {
      icon: Globe,
      title: "Web Fundamentals",
      color: "from-green-500 to-emerald-500",
      topics: [
        { id: "web1", name: "HTTP/HTTPS Protocol", desc: "Methods, headers, status codes" },
        { id: "web2", name: "REST API Architecture", desc: "Resource-based API design" },
        { id: "web3", name: "Request/Response Cycle", desc: "How web requests flow" },
        { id: "web4", name: "JSON & Data Formats", desc: "Data serialization" },
        { id: "web5", name: "CORS & Security", desc: "Cross-origin resource sharing" }
      ]
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-yellow-500 to-orange-500",
      topics: [
        { id: "db1", name: "SQL (PostgreSQL, MySQL)", desc: "Relational databases, joins, indexing" },
        { id: "db2", name: "NoSQL (MongoDB)", desc: "Document-based databases" },
        { id: "db3", name: "Redis", desc: "In-memory caching" },
        { id: "db4", name: "Database Design", desc: "Normalization, relationships" },
        { id: "db5", name: "Query Optimization", desc: "Indexing, EXPLAIN plans" }
      ]
    },
    {
      icon: FileJson,
      title: "API Development & CRUD",
      color: "from-red-500 to-rose-500",
      topics: [
        { id: "api1", name: "REST API Design", desc: "Endpoints, versioning, documentation" },
        { id: "api2", name: "CRUD Operations", desc: "Create, Read, Update, Delete" },
        { id: "api3", name: "API Testing", desc: "Postman, automated testing" },
        { id: "api4", name: "GraphQL", desc: "Modern query language" },
        { id: "api5", name: "WebSockets", desc: "Real-time communication" }
      ]
    },
    {
      icon: Shield,
      title: "Authentication & Security",
      color: "from-indigo-500 to-blue-500",
      topics: [
        { id: "auth1", name: "JWT Tokens", desc: "JSON Web Tokens for auth" },
        { id: "auth2", name: "OAuth 2.0", desc: "Third-party authentication" },
        { id: "auth3", name: "Password Hashing", desc: "bcrypt, argon2" },
        { id: "auth4", name: "RBAC", desc: "Role-based access control" },
        { id: "auth5", name: "Input Validation", desc: "Sanitization, SQL injection prevention" }
      ]
    },
    {
      icon: Search,
      title: "Data Handling Features",
      color: "from-teal-500 to-cyan-500",
      topics: [
        { id: "data1", name: "Search & Filtering", desc: "Elasticsearch, complex queries" },
        { id: "data2", name: "Sorting & Pagination", desc: "Efficient data retrieval" },
        { id: "data3", name: "Caching Strategies", desc: "Redis, CDN" },
        { id: "data4", name: "Background Jobs", desc: "Queues, cron jobs" },
        { id: "data5", name: "File Upload", desc: "Multer, AWS S3, Cloud storage" }
      ]
    },
    {
      icon: Server,
      title: "Server & Deployment",
      color: "from-orange-500 to-red-500",
      topics: [
        { id: "deploy1", name: "Linux Basics", desc: "Command line, SSH" },
        { id: "deploy2", name: "Docker", desc: "Containerization" },
        { id: "deploy3", name: "CI/CD Pipelines", desc: "GitHub Actions, Jenkins" },
        { id: "deploy4", name: "Cloud Platforms", desc: "AWS, DigitalOcean, Railway" },
        { id: "deploy5", name: "Monitoring & Logging", desc: "Sentry, Winston, Log4j" }
      ]
    }
  ];

  const SectionCard = ({ section, index }) => {
    const Icon = section.icon;
    const isExpanded = activeSection === index;
    const sectionCompleted = section.topics?.every(topic => completedTopics.has(topic.id)) || false;

    return (
      <div className="mb-6">
        <div
          className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-l-8 border-l-${section.color.split(' ')[0].replace('from-', '')}`}
          onClick={() => setActiveSection(isExpanded ? null : index)}
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${section.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {sectionCompleted ? '✅ Completed' : `${section.topics?.filter(t => completedTopics.has(t.id)).length || 0}/${section.topics?.length || 0} topics mastered`}
                  </p>
                </div>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 ml-8 space-y-3 animate-fadeIn">
            {section.topics?.map((topic) => (
              <div
                key={topic.id}
                className={`bg-gray-50 rounded-xl p-4 transition-all duration-200 hover:shadow-md cursor-pointer ${completedTopics.has(topic.id) ? 'border-l-4 border-l-green-500 bg-green-50' : 'border-l-4 border-l-transparent'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleComplete(topic.id);
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      {completedTopics.has(topic.id) ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400" />
                      )}
                      <h4 className="font-semibold text-gray-800">{topic.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 ml-8">{topic.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
                <Rocket className="w-10 h-10" />
                Backend Development Roadmap
              </h1>
              <p className="text-indigo-200 text-lg">Master the art of building scalable, secure, and high-performance backend systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 min-w-[200px]">
              <div className="text-center">
                <p className="text-sm text-indigo-200 mb-2">Overall Progress</p>
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="white"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">{progress}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">{completedTopics.size} Topics Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-purple-500" />
                <span className="text-gray-600">{roadmapData.reduce((acc, s) => acc + (s.topics?.length || 0), 0)} Total Topics</span>
              </div>
            </div>
            <button
              onClick={() => {
                const allTopics = roadmapData.flatMap(s => s.topics?.map(t => t.id) || []);
                setCompletedTopics(new Set(allTopics));
              }}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg transition-all text-sm font-semibold"
            >
              Mark All Complete
            </button>
          </div>
        </div>
      </div>

      {/* Roadmap Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Learning Path Flow */}
          <div className="mb-12 bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <GitBranch className="w-6 h-6 text-purple-500" />
              Learning Path Flow
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "Programming", "Framework", "Web", "Database",
                "API", "CRUD", "Auth", "Data Handling", "Deployment"
              ].map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-md">
                    {step}
                  </div>
                  {idx < 8 && <ChevronRight className="w-4 h-4 text-gray-400" />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Sections */}
          {roadmapData.map((section, idx) => (
            <SectionCard key={idx} section={section} index={idx} />
          ))}

          {/* Final Message */}

        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BackendRoadmap;