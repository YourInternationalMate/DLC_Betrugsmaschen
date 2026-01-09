import HotspotQuiz from "../components/hotspot-quiz/HotspotQuiz.jsx";
import hotspotQuizConfig1 from "../data/configs/hotspotQuiz/HotspotQuizConfig1.json"

function Phishing() {
  return (
    <main>
        <HotspotQuiz config={hotspotQuizConfig1}/>
    </main>
);
}

export default Phishing;