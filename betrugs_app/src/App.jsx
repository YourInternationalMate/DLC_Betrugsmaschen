import "./App.css";
import { Routes, Route } from "react-router-dom";
import Einleitung from "./pages/1_Einleitung.jsx";
import Phishing from "./pages/2_Phishing.jsx";
import SocialEngineering from "./pages/3_SocialEngineering.jsx";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
    <Navigation />
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Einleitung />} />
        <Route path="/" element={<Phishing />} />
        <Route path="/" element={<Einleitung />} />
        <Route path="/" element={<Einleitung />} />
        <Route path="/" element={<Einleitung />} />
        <Route path="/" element={<Einleitung />} />
        <Route path="/" element={<Einleitung />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
