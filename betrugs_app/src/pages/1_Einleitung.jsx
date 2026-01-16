import FinishButton from "../components/finish-btn/FinishButton.jsx";
import VideoPlayer from "../components/video/Video.jsx";
import { useEffect } from "react";

function Einleitung({ onFinish }) {
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
      <VideoPlayer video_name={"videoQuizTest1.mp4"} />
      <FinishButton onFinish={onFinish} />
    </main>
  );
}

export default Einleitung;
