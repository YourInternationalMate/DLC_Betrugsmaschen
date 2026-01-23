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
import Impressum from "./pages/Impressum.jsx";

const COUNTER_KEY = "progress-count";
const ITEM_PREFIX = "progress";
const BASE_ITEMS = [
  { to: "/", label: "Kapitel 1", checked: false },
  { to: "/phishing", label: "Kapitel 2", checked: false },
  { to: "/socialengineering", label: "Kapitel 3", checked: false },
  { to: "/onlineshopping", label: "Kapitel 4", checked: false },
  { to: "/kibetrug", label: "Kapitel 5", checked: false },
  { to: "/verhalten", label: "Kapitel 6", checked: false },
  { to: "/zusammenfassung", label: "Kapitel 7", checked: false },
];

const getStoredProgress = () => {
  const count = Number(localStorage.getItem(COUNTER_KEY) || 0);
  return Array.from({ length: count }, (_, i) =>
    localStorage.getItem(`${ITEM_PREFIX}-${i + 1}`)
  ).filter(Boolean);
};

function App() {
  const navigate = useNavigate();
  const stored = getStoredProgress();
  const [items, setItems] = useState(
    BASE_ITEMS.map((item) =>
      stored.includes(item.to) ? { ...item, checked: true } : item
    )
  );

  const toggleChecked = (to, path) => {
    setItems((prev) =>
      prev.map((item) => (item.to === to ? { ...item, checked: true } : item))
    );

    const storedProgress = getStoredProgress();
    const count = Number(localStorage.getItem(COUNTER_KEY) || 0);
    const alreadyStored = storedProgress.includes(to);

    if (!alreadyStored && count < 7) {
      const next = count + 1;
      localStorage.setItem(`${ITEM_PREFIX}-${next}`, to);
      localStorage.setItem(COUNTER_KEY, String(next));
    }

    navigate(path);
  };

  return (
    <>
      <div className="app-root">
        <Navigation items={items} />
        <div className="app-shell">
          <Routes>
            <Route
              path="/"
              element={
                <Einleitung onFinish={() => toggleChecked("/", "/phishing")} />
              }
            />
            <Route
              path="/phishing"
              element={
                <Phishing
                  onFinish={() =>
                    toggleChecked("/phishing", "/socialengineering")
                  }
                />
              }
            />
            <Route
              path="/socialengineering"
              element={
                <SocialEngineering
                  onFinish={() =>
                    toggleChecked("/socialengineering", "/onlineshopping")
                  }
                />
              }
            />
            <Route
              path="/onlineshopping"
              element={
                <OnlineShopping
                  onFinish={() => toggleChecked("/onlineshopping", "/kibetrug")}
                />
              }
            />
            <Route
              path="/kibetrug"
              element={
                <KiBetrug
                  onFinish={() => toggleChecked("/kibetrug", "/verhalten")}
                />
              }
            />
            <Route
              path="/verhalten"
              element={
                <Verhalten
                  onFinish={() =>
                    toggleChecked("/verhalten", "/zusammenfassung")
                  }
                />
              }
            />
            <Route
              path="/zusammenfassung"
              element={
                <Zusammenfassung
                  onFinish={() =>
                    toggleChecked("/zusammenfassung", "/zusammenfassung")
                  }
                />
              }
            />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </div>
        <footer>
          <button className="footer-btn" onClick={() => navigate("https://dlc.sh/")}>DLC Modul Betrugsmaschen</button>
          <button className="footer-btn" onClick={() => navigate("/impressum")}>Impressum</button>
        </footer>
      </div>
    </>
  );
}

export default App;
