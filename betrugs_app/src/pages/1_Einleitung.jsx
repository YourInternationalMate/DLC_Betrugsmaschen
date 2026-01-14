import FinishButton from "../components/finish-btn/FinishButton.jsx";
import VideoPlayer from "../components/video/Video.jsx";

function Einleitung({ onFinish }) {
  return (
    <main>
      <h1>
        BETRUGSMASCHEN
        <br />
        IM INTERNET.
      </h1>
      <VideoPlayer widthClass="w-80" video_name={"videoQuizTest1.mp4"} />
      <FinishButton onFinish={onFinish} />
    </main>
  );
}

export default Einleitung;
