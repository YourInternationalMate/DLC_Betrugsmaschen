import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import Einleitung from "./pages/1_Einleitung.jsx";
import Phishing from "./pages/2_Phishing.jsx";
import SocialEngineering from "./pages/3_SocialEngineering.jsx";
import OnlineShopping from "./pages/4_OnlineShopping.jsx";
import KiBetrug from "./pages/5_KiBetrug.jsx";
import Verhalten from "./pages/6_Verhalten.jsx";
import Zusammenfassung from "./pages/7_Zusammenfassung.jsx";

function App() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
      { to: "/", label: "Einleitung", checked: false },
      { to: "/phishing", label: "Phishing", checked: false },
      { to: "/socialengineering", label: "Social Engineering", checked: false },
      { to: "/onlineshopping", label: "Online Shopping", checked: false },
      { to: "/kibetrug", label: "KI-Betrug", checked: false },
      { to: "/verhalten", label: "Verhalten", checked: false },
      { to: "/zusammenfassung", label: "Zusammenfassung", checked: false },
    ]);

  const toggleChecked = (to, path) => {
    setItems((prev) =>
      prev.map((item) => (item.to === to ? { ...item, checked: true } : item))
    );
    navigate(path);
  };

  return (
    <>
    <Navigation items={items} />
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Einleitung onFinish={() => toggleChecked("/", "/phishing")} />} />
        <Route path="/phishing" element={<Phishing onFinish={() => toggleChecked("/phishing", "/socialengineering")} />} />
        <Route path="/socialengineering" element={<SocialEngineering onFinish={() => toggleChecked("/socialengineering", "/onlineshopping")} />} />
        <Route path="/onlineshopping" element={<OnlineShopping onFinish={() => toggleChecked("/onlineshopping", "/kibetrug")} />} />
        <Route path="/kibetrug" element={<KiBetrug onFinish={() => toggleChecked("/kibetrug", "/verhalten")} />} />
        <Route path="/verhalten" element={<Verhalten onFinish={() => toggleChecked("/verhalten", "/zusammenfassung")} />} />
        <Route path="/zusammenfassung" element={<Zusammenfassung onFinish={() => toggleChecked("/zusammenfassung", "/zusammenfassung")} />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
