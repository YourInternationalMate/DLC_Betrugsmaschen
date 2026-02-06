import VideoPlayer from "../components/video/Video.jsx";
import FinishButton from "../components/finish-btn/FinishButton.jsx";
import { useEffect } from "react";

function Zusammenfassung({ onFinish }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>
        ZUSAMMENFASSUNG
      </h1>
      <VideoPlayer video_name={"videoQuizTest1.mp4"} />
      <FinishButton onFinish={onFinish} text="Fertig" />
    </main>
  );
}

export default Zusammenfassung;
