import HotspotQuiz from "../components/hotspot-quiz/HotspotQuiz.jsx";
import hotspotQuizConfig1 from "../data/configs/hotspotQuiz/HotspotQuizConfig1.json";
import FinishButton from "../components/finish-btn/FinishButton.jsx";
import { useEffect } from "react";

function Phishing({ onFinish }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>
        PHISHING
      </h1>
      <HotspotQuiz config={hotspotQuizConfig1} />
      <FinishButton onFinish={onFinish} />
    </main>
  );
}

export default Phishing;
