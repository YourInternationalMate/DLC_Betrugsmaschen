import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Einleitung from "./pages/1_Einleitung.jsx";
import Phishing from "./pages/2_Phishing.jsx";
import SocialEngineering from "./pages/3_SocialEngineering.jsx";
import OnlineShopping from "./pages/4_OnlineShopping.jsx";
import KiBetrug from "./pages/5_KiBetrug.jsx";
import Verhalten from "./pages/6_Verhalten.jsx";
import Zusammenfassung from "./pages/7_Zusammenfassung.jsx";

function App() {
  return (
    <>
    <Navigation />
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Einleitung />} />
        <Route path="/phishing" element={<Phishing />} />
        <Route path="/socialengineering" element={<SocialEngineering />} />
        <Route path="/onlineshopping" element={<OnlineShopping />} />
        <Route path="/kibetrug" element={<KiBetrug />} />
        <Route path="/verhalten" element={<Verhalten />} />
        <Route path="/zusammenfassung" element={<Zusammenfassung />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
