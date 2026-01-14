import VideoPlayer from "../components/video/Video.jsx";
import FinishButton from "../components/finish-btn/FinishButton.jsx";

function Zusammenfassung({ onFinish }) {
  return (
    <main>
      <VideoPlayer video_name={"videoQuizTest1.mp4"} />
      <FinishButton onFinish={onFinish} text="Fertig" />
    </main>
  );
}

export default Zusammenfassung;
