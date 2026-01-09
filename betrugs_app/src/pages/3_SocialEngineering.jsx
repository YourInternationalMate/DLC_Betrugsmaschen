import VideoQuiz from "../components/video-quiz/VideoQuiz.jsx";
import videoQuizConfig1 from "../data/configs/videoQuiz/VideoQuizConfig1.json"

function SocialEngineering() {
  return (
    <main>
        <VideoQuiz config={videoQuizConfig1}/>
    </main>
);
}

export default SocialEngineering;