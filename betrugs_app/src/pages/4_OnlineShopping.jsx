import FinishButton from "../components/finish-btn/FinishButton.jsx";
import { useEffect } from "react";
import HotspotQuiz from "../components/hotspot-quiz/HotspotQuiz";
import hotspotQuizConfig2 from "../data/configs/hotspotQuiz/HotspotQuizConfig2.json";
import VideoPlayer from "../components/video/Video";

function OnlineShopping({ onFinish }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>FAKE SHOPS</h1>
        <VideoPlayer video_name="fake_shops.mov" subtitle_name="subtitle_fake_shops" />
        <HotspotQuiz config={hotspotQuizConfig2} />
        <FinishButton onFinish={onFinish} />
    </main>
  );
}

export default OnlineShopping;
