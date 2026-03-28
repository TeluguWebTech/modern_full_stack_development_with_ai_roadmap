// components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
<div className="fixed top-0 left-0 w-full z-50 
bg-black/60 backdrop-blur-lg border-b border-white/10 
text-white px-6 py-4 flex justify-between items-center">
      <Link to="/">
      <h1 className="text-xl font-bold">Moder Web dev Roadmap</h1>
      </Link>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/frontend">Frontend</Link>
        <Link to="/backend">Backend</Link>
        <Link to="/ai">AI</Link>
      </div>
    </div>
  );
}