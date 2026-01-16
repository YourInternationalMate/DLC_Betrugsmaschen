import VideoQuiz from "../components/video-quiz/VideoQuiz.jsx";
import videoQuizConfig1 from "../data/configs/videoQuiz/VideoQuizConfig1.json";
import FinishButton from "../components/finish-btn/FinishButton.jsx";
import { useEffect } from "react";

function SocialEngineering({ onFinish }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>
        BETRUGSMASCHEN
        <br />
        IM INTERNET.
      </h1>
      <VideoQuiz config={videoQuizConfig1} />
      <FinishButton onFinish={onFinish} />
    </main>
  );
}

export default SocialEngineering;
