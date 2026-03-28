import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode, FaRoute, FaServer, FaDatabase, FaBrain, FaRobot } from "react-icons/fa";

export default function Home() {

  const navigate = useNavigate();

  const cards = [
    {
      title: "Frontend Development",
      desc: "Build modern responsive UIs using HTML, CSS, JavaScript, and React.",
      icon: <FaCode />,
      link: "/frontend"
    },
    {
      title: "Frontend Learning Path",
      desc: "Step-by-step path from basics to advanced frontend development.",
      icon: <FaRoute />,
      link: "/frontend-learning-path"
    },
    {
      title: "Backend Development",
      desc: "Build APIs, servers, and scalable backend systems.",
      icon: <FaServer />,
      link: "/backend"
    },
    {
      title: "Backend Learning Path",
      desc: "Learn databases, authentication, APIs, and deployment.",
      icon: <FaDatabase />,
      link: "/backend-learning-path"
    },
    {
      title: "AI for Developers",
      desc: "Understand AI concepts and tools used in modern applications.",
      icon: <FaBrain />,
      link: "/ai"
    },
    {
      title: "AI Integration",
      desc: "Integrate chatbots, automation, and AI features into apps.",
      icon: <FaRobot />,
      link: "/ai-learning-path"
    }
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-[#020617]">

      {/* 🌌 Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-pink-800/40"></div>

      {/* Glow blobs */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-pink-500 opacity-20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <div className="text-center pt-24 px-6 relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Modern Full Stack
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Development with AI 🚀
          </span>
        </motion.h1>

        <p className="text-gray-300 text-lg mb-10">
         Frontend → Backend → Testing → Deployment → AI Integration
        </p>

        {/* <div className="flex justify-center gap-4 mb-20">
          <button
            onClick={() => navigate("/frontend")}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Start Learning
          </button>

          <button
            onClick={() => navigate("/backend")}
            className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
          >
            Explore Roadmap
          </button>
        </div> */}
      </div>

      {/* CARDS */}
      <div className="px-6 pb-20 grid md:grid-cols-3 gap-8 relative z-10">

        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(card.link)}
            className="cursor-pointer group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            <div className="relative z-10">
              <div className="text-indigo-400 text-3xl mb-4">
                {card.icon}
              </div>

              <h2 className="text-xl font-semibold mb-2">
                {card.title}
              </h2>

              <p className="text-gray-400">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}