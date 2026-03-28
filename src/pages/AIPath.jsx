import React, { useState, useEffect } from 'react';
import {
  Brain,
  Sparkles,
  Zap,
  MessageSquare,
  Workflow,
  Database,
  Bot,
  Rocket,
  CheckCircle,
  Circle,
  ChevronRight,
  ChevronDown,
  Star,
  Target,
  Award,
  BookOpen,
  Clock,
  ArrowRight,
  Code,
  Globe,
  Search,
  FileText,
  Cpu,
  GraduationCap,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

const AIPath = () => {
  const [completedWeeks, setCompletedWeeks] = useState(new Set());
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeView, setActiveView] = useState('timeline');

  const weeksData = [
    {
      week: 1,
      title: "AI Basics",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      duration: "7 days",
      topics: [
        { name: "What is Artificial Intelligence?", desc: "Understanding AI, its history, and real-world applications" },
        { name: "Machine Learning Basics", desc: "Supervised, unsupervised, and reinforcement learning concepts" },
        { name: "Generative AI", desc: "How AI creates new content (text, images, code, music)" },
        { name: "Large Language Models (LLMs)", desc: "How GPT, Claude, Gemini work and their capabilities" },
        { name: "AI in Everyday Life", desc: "Examples of AI in apps, tools, and services" },
        { name: "Limitations of AI", desc: "Understanding hallucinations, biases, and constraints" }
      ],
      examples: [
        "ChatGPT - Conversational AI",
        "GitHub Copilot - AI coding assistant",
        "Midjourney - AI image generation",
        "Grammarly - AI writing assistant"
      ],
      resources: [
        "AI for Everyone - Andrew Ng (Coursera)",
        "Introduction to Generative AI (Google)",
        "What are LLMs? (YouTube)",
        "AI Explained Newsletter"
      ],
      outcome: "Understand how modern AI works"
    },
    {
      week: 2,
      title: "AI Tools for Developers",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      duration: "7 days",
      topics: [
        { name: "AI Coding Assistants", desc: "GitHub Copilot, Cursor, Codeium, Tabnine" },
        { name: "AI Design Tools", desc: "Figma AI, Canva AI, Uizard for UI generation" },
        { name: "AI Productivity Tools", desc: "Notion AI, Mem, Reclaim.ai" },
        { name: "Code Generation", desc: "Generating components, functions, and tests with AI" },
        { name: "UI Generation", desc: "Creating interfaces from prompts and screenshots" },
        { name: "Documentation Generation", desc: "AI-powered code documentation and comments" }
      ],
      practice: [
        "Set up GitHub Copilot in your editor",
        "Generate a React component with AI",
        "Use AI to write unit tests",
        "Create a UI design from a text prompt"
      ],
      resources: [
        "GitHub Copilot Documentation",
        "Cursor IDE Guide",
        "AI Tools Directory",
        "Best AI Tools for Developers"
      ],
      outcome: "Use AI tools to improve development workflow"
    },
    {
      week: 3,
      title: "AI APIs",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      duration: "7 days",
      topics: [
        { name: "OpenAI API", desc: "GPT-4, GPT-3.5, DALL-E, Whisper integration" },
        { name: "Claude API", desc: "Anthropic's Claude models" },
        { name: "Google Gemini API", desc: "Google's multimodal AI" },
        { name: "Making API Requests", desc: "HTTP requests to AI endpoints" },
        { name: "Handling Responses", desc: "Parsing and displaying AI outputs" },
        { name: "Streaming Responses", desc: "Real-time token streaming for better UX" }
      ],
      practice: [
        "Build a simple AI chatbot",
        "Create a text summarizer app",
        "Implement a content generator",
        "Build a language translator"
      ],
      resources: [
        "OpenAI API Docs",
        "Vercel AI SDK",
        "Claude API Guide",
        "Google AI Studio"
      ],
      outcome: "Integrate AI features into web applications"
    },
    {
      week: 4,
      title: "Prompt Engineering",
      icon: MessageSquare,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      duration: "7 days",
      topics: [
        { name: "Writing Effective Prompts", desc: "Clear instructions and context" },
        { name: "System Prompts", desc: "Setting AI behavior and constraints" },
        { name: "Few-Shot Prompting", desc: "Providing examples for better outputs" },
        { name: "Chain of Thought", desc: "Getting AI to show reasoning steps" },
        { name: "Structured Outputs", desc: "JSON, markdown, and formatted responses" },
        { name: "Prompt Templates", desc: "Reusable prompt structures" }
      ],
      practice: [
        "Create a prompt for code explanation",
        "Design prompts for content creation",
        "Build a prompt testing playground",
        "Implement dynamic prompt templates"
      ],
      resources: [
        "OpenAI Prompt Engineering Guide",
        "Anthropic Prompt Library",
        "Learn Prompting Course",
        "Awesome Prompts Repository"
      ],
      outcome: "Get better, more reliable results from AI models"
    },
    {
      week: 5,
      title: "AI Frameworks",
      icon: Workflow,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      duration: "7 days",
      topics: [
        { name: "LangChain", desc: "Building LLM applications with chains and agents" },
        { name: "LangChain Components", desc: "Prompts, models, memory, output parsers" },
        { name: "LlamaIndex", desc: "Data framework for LLM applications" },
        { name: "Pydantic AI", desc: "Type-safe AI interactions" },
        { name: "Building Chains", desc: "Connecting multiple AI operations" },
        { name: "Memory Management", desc: "Conversation history and context" }
      ],
      practice: [
        "Build a LangChain application",
        "Create a multi-step AI workflow",
        "Implement conversation memory",
        "Build a chain of AI operations"
      ],
      resources: [
        "LangChain Documentation",
        "LangChain.js Course",
        "LlamaIndex Tutorials",
        "Pydantic AI Guide"
      ],
      outcome: "Build advanced AI workflows and applications"
    },
    {
      week: 6,
      title: "Working With Your Own Data",
      icon: Database,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      duration: "7 days",
      topics: [
        { name: "Embeddings", desc: "Converting text to vector representations" },
        { name: "Vector Databases", desc: "Pinecone, Chroma, Weaviate, FAISS" },
        { name: "Semantic Search", desc: "Finding content by meaning, not keywords" },
        { name: "Document Loading", desc: "Ingesting PDFs, websites, databases" },
        { name: "Text Chunking", desc: "Splitting documents for better retrieval" },
        { name: "RAG Architecture", desc: "Retrieval-Augmented Generation" }
      ],
      practice: [
        "Build a document Q&A system",
        "Create a knowledge base chatbot",
        "Implement semantic search",
        "Build a PDF analyzer tool"
      ],
      projects: [
        { name: "Document Assistant", desc: "Ask questions about your PDFs and documents", difficulty: "Intermediate" },
        { name: "Support Bot", desc: "Answer questions from product documentation", difficulty: "Intermediate" },
        { name: "Research Assistant", desc: "Query and summarize research papers", difficulty: "Advanced" }
      ],
      resources: [
        "Pinecone Docs",
        "Chroma Tutorial",
        "RAG Guide",
        "LlamaIndex RAG Examples"
      ],
      outcome: "Create custom AI applications using your own data"
    },
    {
      week: 7,
      title: "AI Agents",
      icon: Bot,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      duration: "7 days",
      topics: [
        { name: "What are AI Agents?", desc: "Autonomous systems that take actions" },
        { name: "Function Calling", desc: "AI calling external tools and APIs" },
        { name: "ReAct Pattern", desc: "Reasoning and acting loop" },
        { name: "Tool Integration", desc: "Connecting to APIs, databases, services" },
        { name: "Agent Memory", desc: "Short-term and long-term memory" },
        { name: "Multi-Agent Systems", desc: "Collaborating agents for complex tasks" }
      ],
      practice: [
        "Build a research agent",
        "Create a task automation agent",
        "Implement a code assistant agent",
        "Build a meeting scheduler agent"
      ],
      projects: [
        { name: "Coding Assistant", desc: "Write, explain, and debug code", difficulty: "Advanced" },
        { name: "Research Agent", desc: "Autonomous web research and summarization", difficulty: "Advanced" },
        { name: "Task Manager Agent", desc: "AI that organizes and schedules tasks", difficulty: "Intermediate" }
      ],
      resources: [
        "OpenAI Function Calling",
        "LangChain Agents Guide",
        "AutoGPT Tutorial",
        "Agent Design Patterns"
      ],
      outcome: "Build AI-powered automation tools"
    },
    {
      week: 8,
      title: "AI Projects & Portfolio",
      icon: Rocket,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      duration: "7 days",
      topics: [
        { name: "AI Chatbot", desc: "Conversational AI with memory and personality" },
        { name: "AI Blog Writer", desc: "Content generation with research" },
        { name: "AI Resume Analyzer", desc: "Resume parsing and feedback generation" },
        { name: "Document Search Tool", desc: "RAG-based document Q&A system" },
        { name: "Portfolio Development", desc: "Showcasing AI projects" },
        { name: "Deployment", desc: "Deploying AI apps to production" }
      ],
      projectIdeas: [
        { name: "Customer Support Bot", desc: "Full chatbot with knowledge base", difficulty: "Advanced" },
        { name: "Content Generator Platform", desc: "Generate blogs, social posts, marketing copy", difficulty: "Advanced" },
        { name: "Code Documentation Tool", desc: "Auto-generate documentation from codebase", difficulty: "Advanced" },
        { name: "Meeting Notes Assistant", desc: "Summarize meetings, extract action items", difficulty: "Intermediate" },
        { name: "Personal AI Portfolio", desc: "Showcase your AI projects and skills", difficulty: "Beginner" }
      ],
      resources: [
        "Vercel AI Templates",
        "OpenAI Cookbook",
        "Deployment Guides",
        "Portfolio Examples"
      ],
      outcome: "Become a modern AI-enabled web developer"
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
                  <h3 className="text-xl font-bold text-gray-800 mt-2">{weekData.title}</h3>
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
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                    Topics Covered
                  </h4>
                  <ul className="space-y-3">
                    {weekData.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start p-2 rounded-lg">
                        <ChevronRight className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">{topic.name}</p>
                          <p className="text-sm text-gray-500">{topic.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  {weekData.examples && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                        <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                        Real-World Examples
                      </h4>
                      <ul className="space-y-2">
                        {weekData.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600 p-2 bg-white rounded-lg">
                            <Sparkles className="w-3 h-3 text-purple-500 mr-2" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {weekData.practice && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                        <Target className="w-5 h-5 mr-2 text-green-500" />
                        Practice Tasks
                      </h4>
                      <ul className="space-y-2">
                        {weekData.practice.map((task, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-1.5"></div>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {weekData.projects && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                        <Rocket className="w-5 h-5 mr-2 text-red-500" />
                        Project Ideas
                      </h4>
                      <ul className="space-y-2">
                        {weekData.projects.map((proj, idx) => (
                          <li key={idx} className="p-2 bg-white rounded-lg border border-gray-200">
                            <p className="text-sm font-medium text-gray-800">{proj.name}</p>
                            <p className="text-xs text-gray-500">{proj.desc}</p>
                            <span className="text-xs text-purple-600 mt-1 inline-block">{proj.difficulty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {weekData.projectIdeas && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                        <Rocket className="w-5 h-5 mr-2 text-red-500" />
                        Project Ideas
                      </h4>
                      <ul className="space-y-2">
                        {weekData.projectIdeas.map((proj, idx) => (
                          <li key={idx} className="p-2 bg-white rounded-lg border border-gray-200">
                            <p className="text-sm font-medium text-gray-800">{proj.name}</p>
                            <p className="text-xs text-gray-500">{proj.desc}</p>
                            <span className="text-xs text-purple-600 mt-1 inline-block">{proj.difficulty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                      <Star className="w-5 h-5 mr-2 text-yellow-500" />
                      Learning Resources
                    </h4>
                    <ul className="space-y-1">
                      {weekData.resources.map((resource, idx) => (
                        <li key={idx} className="flex items-center text-sm text-blue-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <p className="text-sm font-semibold text-purple-800">🎯 Learning Outcome:</p>
                    <p className="text-sm text-purple-700 mt-1">{weekData.outcome}</p>
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
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden lg:block"></div>
        
        <div className="space-y-8">
          {weeksData.map((week, idx) => (
            <div key={week.week} className="relative flex flex-col lg:flex-row items-center lg:items-start gap-6">
              {idx % 2 === 0 ? (
                <>
                  <div className="flex-1 lg:text-right">
                    <div className="lg:mr-8">
                      <span className="text-sm text-gray-500">Week {week.week}</span>
                      <h3 className="text-xl font-bold text-gray-800 mt-1">{week.title}</h3>
                      <p className="text-gray-600 mt-2">{week.outcome}</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${week.color} shadow-lg z-10`}>
                    <week.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 hidden lg:block"></div>
                </>
              ) : (
                <>
                  <div className="flex-1 hidden lg:block"></div>
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${week.color} shadow-lg z-10`}>
                    <week.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="lg:ml-8">
                      <span className="text-sm text-gray-500">Week {week.week}</span>
                      <h3 className="text-xl font-bold text-gray-800 mt-1">{week.title}</h3>
                      <p className="text-gray-600 mt-2">{week.outcome}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
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
            <h2 className="text-3xl font-bold text-gray-800 mb-2">🤖 AI Integration Mastered! 🎉</h2>
            <p className="text-gray-600 mb-4">You've completed the 8-week AI Integration roadmap!</p>
            <p className="text-sm text-gray-500 mb-6">You're now an AI-enabled web developer ready to build intelligent applications</p>
            <button
              onClick={() => setShowCelebration(false)}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold"
            >
              Continue Journey
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 py-16 lg:py-20 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">8-Week AI Integration Program</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                AI Integration
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  for Web Developers
                </span>
              </h1>
              <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                From AI basics to building intelligent applications. Learn to integrate LLMs, build RAG systems, and create AI-powered products in just 8 weeks.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 bg-white/10 rounded-xl px-5 py-2 backdrop-blur">
                  <Brain className="w-5 h-5" />
                  <span>8 Weeks</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-xl px-5 py-2 backdrop-blur">
                  <Bot className="w-5 h-5" />
                  <span>AI APIs</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-xl px-5 py-2 backdrop-blur">
                  <Rocket className="w-5 h-5" />
                  <span>AI-Powered Apps</span>
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
                        <stop offset="0%" stopColor="#a855f7" />
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
                <span className="text-sm font-medium text-gray-700">AI Ready</span>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveView('timeline')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeView === 'timeline'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                Week by Week
              </button>
              <button
                onClick={() => setActiveView('flow')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeView === 'flow'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                Learning Flow
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Developer Growth Path */}
        <div className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-lg">Developer Growth Path</h3>
              <p className="text-gray-600 mt-1">Your journey to becoming a modern AI-enabled web developer:</p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-indigo-600">Web Development</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-indigo-600">Full Stack Development</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium">AI Integration</span>
              </div>
              <p className="text-sm text-gray-500 mt-3">From building normal apps → building AI-powered applications 🚀</p>
            </div>
          </div>
        </div>

        {activeView === 'flow' ? (
          <div className="max-w-4xl mx-auto">
            <FlowView />
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            {weeksData.map((week) => (
              <WeekCard key={week.week} weekData={week} />
            ))}
          </div>
        )}

        {/* Completion Message */}
        {progress === 100 && (
          <div className="mt-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl p-10 text-white text-center transform transition-all animate-pulse">
            <Award className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-3">🤖 AI-Enabled Developer Certified! 🏆</h3>
            <p className="text-xl mb-4">You've mastered the complete AI Integration roadmap!</p>
            <p className="text-lg mb-6">Ready to build intelligent, AI-powered web applications</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold hover:shadow-xl transition-all">
                Download Certificate
              </button>
              <button className="px-6 py-3 bg-black/20 backdrop-blur text-white rounded-xl font-bold hover:bg-black/30 transition-all">
                Start AI Projects
              </button>
            </div>
          </div>
        )}
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

export default AIPath;