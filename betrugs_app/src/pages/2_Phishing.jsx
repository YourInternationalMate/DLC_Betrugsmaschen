import HotspotQuiz from "../components/hotspot-quiz/HotspotQuiz.jsx";
import hotspotQuizConfig1 from "../data/configs/hotspotQuiz/HotspotQuizConfig1.json";
import FinishButton from "../components/finish-btn/FinishButton.jsx";
import VideoPlayer from "../components/video/Video.jsx";
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
      <VideoPlayer video_name={"test_Video.mp4"} subtitle_name={"subtitle_phishing"}/>
      <h3>Finde Sie alle Fehler!</h3>
      <HotspotQuiz config={hotspotQuizConfig1} />
      <FinishButton onFinish={onFinish} />
    </main>
  );
}

export default Phishing;
