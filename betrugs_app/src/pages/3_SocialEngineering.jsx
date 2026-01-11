import VideoQuiz from "../components/video-quiz/VideoQuiz.jsx";
import videoQuizConfig1 from "../data/configs/videoQuiz/VideoQuizConfig1.json"
import FinishButton from "../components/finish-btn/FinishButton.jsx";

function SocialEngineering({ onFinish }) {
  return (
    <main>
        <VideoQuiz config={videoQuizConfig1}/>
        <FinishButton onFinish={onFinish}/>
    </main>
);
}

export default SocialEngineering;