// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import AI from "./pages/AI";
import Navbar from "./components/Navbar";
import BackendPath from "./pages/BackendPath";
import FrontendPath from "./pages/FrontendPath";
import AIPath from "./pages/AIPath";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element = {<LandingPage />} /> */}
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/backend-learning-path" element={<BackendPath />} />
        <Route path="/frontend-learning-path" element={<FrontendPath />} />
        <Route path="/ai-learning-path" element={<AIPath/>} />
        <Route path="/ai" element={<AI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;