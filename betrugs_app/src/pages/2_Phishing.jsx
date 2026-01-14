import HotspotQuiz from "../components/hotspot-quiz/HotspotQuiz.jsx";
import hotspotQuizConfig1 from "../data/configs/hotspotQuiz/HotspotQuizConfig1.json"
import FinishButton from "../components/finish-btn/FinishButton.jsx";

function Phishing({ onFinish }) {
  return (
    <main>
        <HotspotQuiz config={hotspotQuizConfig1}/>
        <FinishButton onFinish={onFinish}/>
    </main>
);
}

export default Phishing;