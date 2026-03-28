import { motion } from "framer-motion";

export default function PremiumCard({ title, desc, Icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="backdrop-blur-lg bg-gray-800/5 border border-white/10 p-6 rounded-2xl shadow-lg"
    >
      <div className="text-indigo-400 text-3xl mb-4">
        <Icon />
      </div>

      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <p className="text-gray-400">{desc}</p>
    </motion.div>
  );
}