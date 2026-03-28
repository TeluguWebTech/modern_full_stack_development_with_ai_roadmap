import React, { useState, useEffect } from 'react';
import {
  Brain,
  Zap,
  Bot,
  MessageSquare,
  Database,
  Search,
  GitBranch,
  Sparkles,
  Cpu,
  Globe,
  Code,
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
  Layers,
  Microscope,
  Network,
  Workflow,
  FileText,
  Settings,
  BarChart
} from 'lucide-react';

const AIRoadmap = () => {
  const [completedTopics, setCompletedTopics] = useState(new Set());
  const [expandedSection, setExpandedSection] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('roadmap'); // roadmap or flow

  const roadmapData = [
    {
      id: 1,
      title: "AI Fundamentals",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      gradient: "purple",
      duration: "1 week",
      topics: [
        { name: "What is Artificial Intelligence?", desc: "Understanding AI, ML, and Deep Learning concepts" },
        { name: "Machine Learning Basics", desc: "Supervised, unsupervised, and reinforcement learning" },
        { name: "Deep Learning Fundamentals", desc: "Neural networks, layers, and activation functions" },
        { name: "Natural Language Processing (NLP)", desc: "How AI understands and generates human language" },
        { name: "Generative AI", desc: "Creating new content with AI (text, images, code)" },
        { name: "Large Language Models (LLMs)", desc: "GPT, Claude, Gemini architecture and capabilities" }
      ],
      resources: [
        "AI for Everyone - Andrew Ng",
        "Introduction to LLMs",
        "Hugging Face Course",
        "Fast.ai Practical Deep Learning"
      ],
      outcome: "Understand how modern AI systems work"
    },
    {
      id: 2,
      title: "AI Tools & Platforms",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      gradient: "blue",
      duration: "1 week",
      topics: [
        { name: "OpenAI API", desc: "GPT-4, GPT-3.5, DALL-E, Whisper" },
        { name: "Claude AI", desc: "Anthropic's Claude models and API" },
        { name: "Google Gemini", desc: "Google's multimodal AI platform" },
        { name: "Hugging Face", desc: "Open-source models and inference API" },
        { name: "Prompt Engineering Basics", desc: "Crafting effective prompts for better results" },
        { name: "Model Capabilities & Limitations", desc: "Understanding context windows, pricing, and constraints" }
      ],
      resources: [
        "OpenAI API Documentation",
        "Claude API Guide",
        "Hugging Face Hub",
        "Prompt Engineering Guide"
      ],
      outcome: "Access and use modern AI platforms"
    },
    {
      id: 3,
      title: "AI APIs in Web Applications",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      gradient: "green",
      duration: "1.5 weeks",
      topics: [
        { name: "Making API Requests", desc: "HTTP requests to AI endpoints" },
        { name: "Handling AI Responses", desc: "Parsing and processing AI outputs" },
        { name: "Streaming Responses", desc: "Real-time token streaming" },
        { name: "Error Handling & Retries", desc: "Managing API failures and rate limits" },
        { name: "Building Chatbots", desc: "Conversational AI interfaces" },
        { name: "Text Generation Features", desc: "Summarization, translation, content creation" }
      ],
      practice: [
        "Build a simple chatbot",
        "Create a text summarizer",
        "Implement content generator",
        "Build a language translator"
      ],
      resources: [
        "OpenAI Node.js SDK",
        "Vercel AI SDK",
        "LangChain.js",
        "AI API Integration Patterns"
      ],
      outcome: "Integrate AI into web applications"
    },
    {
      id: 4,
      title: "Advanced Prompt Engineering",
      icon: MessageSquare,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      gradient: "yellow",
      duration: "1 week",
      topics: [
        { name: "System Prompts", desc: "Setting AI behavior and constraints" },
        { name: "Few-Shot Learning", desc: "Providing examples for better outputs" },
        { name: "Chain-of-Thought", desc: "Reasoning steps for complex tasks" },
        { name: "Prompt Templates", desc: "Reusable prompt structures" },
        { name: "Context Management", desc: "Handling conversation history" },
        { name: "Output Formatting", desc: "JSON, markdown, structured data" }
      ],
      practice: [
        "Create prompt templates for different use cases",
        "Build a prompt testing playground",
        "Implement chain-of-thought reasoning",
        "Design system prompts for different roles"
      ],
      resources: [
        "OpenAI Prompt Engineering Guide",
        "Anthropic Prompt Library",
        "Prompt Engineering Tools",
        "Awesome Prompts Repository"
      ],
      outcome: "Generate reliable, high-quality AI responses"
    },
    {
      id: 5,
      title: "AI Frameworks & Orchestration",
      icon: Workflow,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      gradient: "indigo",
      duration: "1.5 weeks",
      topics: [
        { name: "LangChain Framework", desc: "Building LLM applications with chains" },
        { name: "LangChain Components", desc: "Prompts, models, outputs, memory" },
        { name: "LlamaIndex", desc: "Data framework for LLM applications" },
        { name: "AI Agents", desc: "Autonomous AI systems" },
        { name: "Tool Calling", desc: "Integrating external tools and APIs" },
        { name: "Multi-Step Reasoning", desc: "Complex task decomposition" }
      ],
      practice: [
        "Build a LangChain application",
        "Create a research assistant",
        "Implement tool-calling AI",
        "Build a multi-step reasoning system"
      ],
      resources: [
        "LangChain Documentation",
        "LangChain.js Course",
        "LlamaIndex Tutorials",
        "AI Agent Examples"
      ],
      outcome: "Build sophisticated AI workflows"
    },
    {
      id: 6,
      title: "Vector Databases & Embeddings",
      icon: Database,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      gradient: "teal",
      duration: "1.5 weeks",
      topics: [
        { name: "Embeddings Explained", desc: "Converting text to vector representations" },
        { name: "Semantic Search", desc: "Finding similar content by meaning" },
        { name: "Vector Similarity", desc: "Cosine similarity, Euclidean distance" },
        { name: "Pinecone", desc: "Managed vector database" },
        { name: "Chroma & FAISS", desc: "Open-source vector stores" },
        { name: "Weaviate", desc: "Vector search with GraphQL" }
      ],
      practice: [
        "Build semantic search engine",
        "Implement document similarity search",
        "Create recommendation system",
        "Build a vector database application"
      ],
      resources: [
        "Pinecone Docs",
        "Chroma Tutorial",
        "FAISS Guide",
        "Vector Databases Explained"
      ],
      outcome: "Build semantic search and recommendation systems"
    },
    {
      id: 7,
      title: "Retrieval-Augmented Generation (RAG)",
      icon: Search,
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      gradient: "rose",
      duration: "2 weeks",
      topics: [
        { name: "RAG Architecture", desc: "Combining retrieval with generation" },
        { name: "Document Loading", desc: "Ingesting PDFs, websites, databases" },
        { name: "Text Chunking Strategies", desc: "Splitting documents effectively" },
        { name: "Embedding Generation", desc: "Creating vector representations" },
        { name: "Vector Search Retrieval", desc: "Finding relevant context" },
        { name: "Context-Augmented Generation", desc: "Enhancing prompts with retrieved data" }
      ],
      practice: [
        "Build document Q&A system",
        "Create customer support chatbot",
        "Implement knowledge base assistant",
        "Build PDF analysis tool"
      ],
      projects: [
        { name: "Document Assistant", desc: "Ask questions about your documents", difficulty: "Intermediate" },
        { name: "Support Bot", desc: "Answer questions from documentation", difficulty: "Intermediate" },
        { name: "Research Assistant", desc: "Summarize and query research papers", difficulty: "Advanced" }
      ],
      resources: [
        "RAG Guide",
        "LangChain RAG Tutorial",
        "LlamaIndex RAG Examples",
        "Advanced RAG Techniques"
      ],
      outcome: "Build AI apps using custom data and knowledge"
    },
    {
      id: 8,
      title: "AI Agents & Automation",
      icon: Bot,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      gradient: "orange",
      duration: "1.5 weeks",
      topics: [
        { name: "AI Agents Overview", desc: "Autonomous systems that take actions" },
        { name: "Function Calling", desc: "AI calling external functions" },
        { name: "ReAct Pattern", desc: "Reasoning and acting loop" },
        { name: "Multi-Agent Systems", desc: "Collaborating AI agents" },
        { name: "Tool Integration", desc: "Connecting to APIs, databases, actions" },
        { name: "Agent Memory", desc: "Short-term and long-term memory systems" }
      ],
      practice: [
        "Build a code assistant agent",
        "Create a research agent",
        "Implement task automation agent",
        "Build a multi-agent system"
      ],
      projects: [
        { name: "Code Assistant", desc: "Write, explain, and debug code", difficulty: "Advanced" },
        { name: "Meeting Scheduler", desc: "AI that manages calendar", difficulty: "Intermediate" },
        { name: "Research Agent", desc: "Autonomous web research", difficulty: "Advanced" }
      ],
      resources: [
        "OpenAI Function Calling",
        "LangChain Agents",
        "AutoGPT Tutorial",
        "Agent Design Patterns"
      ],
      outcome: "Build autonomous AI systems that take actions"
    },
    {
      id: 9,
      title: "AI Application Projects",
      icon: Rocket,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      gradient: "red",
      duration: "2 weeks",
      topics: [
        { name: "AI Chatbot", desc: "Conversational AI with memory and personality" },
        { name: "AI Blog Writer", desc: "Content generation with research" },
        { name: "AI Code Assistant", desc: "Code generation, explanation, debugging" },
        { name: "Document Search System", desc: "RAG-based document Q&A" },
        { name: "AI Resume Analyzer", desc: "Resume parsing and feedback" },
        { name: "Production Deployment", desc: "Deploying AI apps to production" }
      ],
      projects: [
        { name: "Customer Support Bot", desc: "Full chatbot with knowledge base", difficulty: "Advanced" },
        { name: "Content Generator Platform", desc: "Generate blogs, social posts, ads", difficulty: "Advanced" },
        { name: "AI-Powered Dev Tool", desc: "Code review, documentation generator", difficulty: "Advanced" },
        { name: "Knowledge Management System", desc: "Team documentation Q&A", difficulty: "Advanced" }
      ],
      resources: [
        "Vercel AI Templates",
        "OpenAI Cookbook",
        "AI Project Ideas",
        "Deployment Guides"
      ],
      outcome: "Build and deploy production-ready AI applications"
    }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const toggleTopic = (topicId) => {
    setCompletedTopics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(topicId)) {
        newSet.delete(topicId);
      } else {
        newSet.add(topicId);
        if (newSet.size === roadmapData.reduce((acc, section) => acc + section.topics.length, 0)) {
          setShowCelebration(true);
          setTimeout(() => setShowCelebration(false), 5000);
        }
      }
      return newSet;
    });
  };

  useEffect(() => {
    const totalTopics = roadmapData.reduce((acc, section) => acc + section.topics.length, 0);
    setProgress((completedTopics.size / totalTopics) * 100);
  }, [completedTopics]);

  const SectionCard = ({ section }) => {
    const isExpanded = expandedSection === section.id;
    const Icon = section.icon;
    const sectionCompleted = section.topics.every(topic => completedTopics.has(`${section.id}-${topic.name}`));

    return (
      <div className={`rounded-2xl transition-all duration-300 mb-5 ${isExpanded ? 'shadow-2xl scale-[1.01]' : 'shadow-lg hover:shadow-xl'}`}>
        <div
          className={`bg-white rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${sectionCompleted ? 'border-green-400' : 'border-gray-200'}`}
        >
          <div
            className="p-6"
            onClick={() => toggleSection(section.id)}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${section.color} shadow-lg flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 flex-wrap gap-2">
                    <span className="text-xs font-mono px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                      Module {section.id}
                    </span>
                    <span className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {section.duration}
                    </span>
                    {sectionCompleted && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mt-2">{section.title}</h3>
                </div>
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
                    {section.topics.map((topic, idx) => {
                      const topicId = `${section.id}-${topic.name}`;
                      const isTopicCompleted = completedTopics.has(topicId);
                      return (
                        <li
                          key={idx}
                          className={`flex items-start p-3 rounded-xl transition-all cursor-pointer ${isTopicCompleted ? 'bg-green-50 border-l-4 border-l-green-500' : 'bg-white hover:bg-gray-50'}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTopic(topicId);
                          }}
                        >
                          <div className="mr-3 mt-0.5">
                            {isTopicCompleted ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <Circle className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className={`font-medium ${isTopicCompleted ? 'text-green-800' : 'text-gray-800'}`}>
                              {topic.name}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">{topic.desc}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    Resources & Practice
                  </h4>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">📚 Learning Resources:</p>
                    <ul className="space-y-1">
                      {section.resources.map((resource, idx) => (
                        <li key={idx} className="flex items-center text-sm text-blue-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {section.practice && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-2">💻 Practice Tasks:</p>
                      <ul className="space-y-1">
                        {section.practice.map((task, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <ChevronRight className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {section.projects && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-2">🎯 Project Ideas:</p>
                      <ul className="space-y-2">
                        {section.projects.map((proj, idx) => (
                          <li key={idx} className="p-2 bg-white rounded-lg border border-gray-200">
                            <p className="text-sm font-medium text-gray-800">{proj.name}</p>
                            <p className="text-xs text-gray-500">{proj.desc}</p>
                            <span className="text-xs text-purple-600 mt-1 inline-block">{proj.difficulty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <p className="text-sm font-semibold text-purple-800">🎯 Learning Outcome:</p>
                    <p className="text-sm text-purple-700 mt-1">{section.outcome}</p>
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
        {/* Connection Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden lg:block"></div>
        
        <div className="space-y-8">
          {[
            { icon: Brain, title: "AI Basics", desc: "Understanding AI, ML, and LLMs", color: "from-purple-500 to-pink-500", week: "Week 1-2" },
            { icon: Globe, title: "AI APIs", desc: "OpenAI, Claude, Gemini integration", color: "from-blue-500 to-cyan-500", week: "Week 3-4" },
            { icon: MessageSquare, title: "Prompt Engineering", desc: "Crafting effective prompts", color: "from-yellow-500 to-orange-500", week: "Week 5" },
            { icon: Workflow, title: "AI Frameworks", desc: "LangChain, LlamaIndex", color: "from-indigo-500 to-purple-500", week: "Week 6-7" },
            { icon: Database, title: "Vector Databases", desc: "Semantic search & embeddings", color: "from-teal-500 to-cyan-500", week: "Week 8" },
            { icon: Search, title: "RAG Applications", desc: "Custom data integration", color: "from-rose-500 to-pink-500", week: "Week 9-10" },
            { icon: Bot, title: "AI Agents", desc: "Autonomous task execution", color: "from-orange-500 to-red-500", week: "Week 11" },
            { icon: Rocket, title: "AI Projects", desc: "Production AI applications", color: "from-red-500 to-pink-500", week: "Week 12" }
          ].map((item, idx) => (
            <div key={idx} className="relative flex flex-col lg:flex-row items-center lg:items-start gap-6">
              {idx % 2 === 0 ? (
                <>
                  <div className="flex-1 lg:text-right">
                    <div className="lg:mr-8">
                      <span className="text-sm text-gray-500">{item.week}</span>
                      <h3 className="text-xl font-bold text-gray-800 mt-1">{item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.desc}</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${item.color} shadow-lg z-10`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 hidden lg:block"></div>
                </>
              ) : (
                <>
                  <div className="flex-1 hidden lg:block"></div>
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${item.color} shadow-lg z-10`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="lg:ml-8">
                      <span className="text-sm text-gray-500">{item.week}</span>
                      <h3 className="text-xl font-bold text-gray-800 mt-1">{item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.desc}</p>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-2">🤖 AI Mastery Achieved! 🎉</h2>
            <p className="text-gray-600 mb-4">You've mastered the AI Integration roadmap!</p>
            <p className="text-sm text-gray-500 mb-6">Ready to build powerful AI-powered applications</p>
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
                <span className="text-sm font-semibold">AI Integration for Web Developers</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                AI Integration
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Roadmap
                </span>
              </h1>
              <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                Master AI development from fundamentals to production-ready applications. Learn to integrate LLMs, build RAG systems, and create AI-powered products.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 bg-white/10 rounded-xl px-5 py-2 backdrop-blur">
                  <Brain className="w-5 h-5" />
                  <span>9 Modules</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-xl px-5 py-2 backdrop-blur">
                  <Bot className="w-5 h-5" />
                  <span>LLM Integration</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-xl px-5 py-2 backdrop-blur">
                  <Rocket className="w-5 h-5" />
                  <span>AI Products</span>
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
                  {completedTopics.size} of {roadmapData.reduce((acc, s) => acc + s.topics.length, 0)} topics mastered
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
                <span className="text-sm font-medium text-gray-700">{completedTopics.size} Topics Done</span>
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
                onClick={() => setActiveTab('roadmap')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'roadmap'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                Module View
              </button>
              <button
                onClick={() => setActiveTab('flow')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'flow'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
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
        {/* Full Stack Integration Note */}
        <div className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Modern Full Stack Development Roadmap</h3>
              <p className="text-gray-600 mt-1">Your complete journey to becoming a modern web developer:</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="px-3 py-1 bg-white rounded-full text-sm text-indigo-600">Frontend Development</span>
                <ArrowRight className="w-4 h-4 text-gray-400 self-center" />
                <span className="px-3 py-1 bg-white rounded-full text-sm text-indigo-600">Backend Development</span>
                <ArrowRight className="w-4 h-4 text-gray-400 self-center" />
                <span className="px-3 py-1 bg-white rounded-full text-sm text-indigo-600">DevOps & Deployment</span>
                <ArrowRight className="w-4 h-4 text-gray-400 self-center" />
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm">AI Integration</span>
              </div>
            </div>
          </div>
        </div>

        {activeTab === 'flow' ? (
          <div className="max-w-5xl mx-auto">
            <FlowView />
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            {roadmapData.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}
          </div>
        )}

        {/* Completion Message */}
        {progress === 100 && (
          <div className="mt-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl p-10 text-white text-center transform transition-all animate-pulse">
            <Award className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-3">🤖 AI Developer Certified! 🏆</h3>
            <p className="text-xl mb-4">You've mastered the complete AI Integration roadmap!</p>
            <p className="text-lg mb-6">Ready to build cutting-edge AI-powered applications</p>
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

export default AIRoadmap;