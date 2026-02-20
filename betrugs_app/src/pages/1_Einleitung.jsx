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
      <VideoPlayer video_name={"einleitung.mov"} subtitle_name={"subtitle_einleitung"}/>
      <FinishButton onFinish={onFinish} />
    </main>
  );
}

export default Einleitung;
