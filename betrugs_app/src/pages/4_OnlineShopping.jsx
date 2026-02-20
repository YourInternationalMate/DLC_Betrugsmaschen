import multipleChoiceConfig from "../data/configs/multipleChoice/FakeShopMC.json";
import MultipleChoiceQuiz from "../components/multiple-choice/MultipleChoiceQuiz.jsx";
import FinishButton from "../components/finish-btn/FinishButton.jsx";
import { useEffect } from "react";
import HotspotQuiz from "../components/hotspot-quiz/HotspotQuiz";
import hotspotQuizConfig2 from "../data/configs/hotspotQuiz/HotspotQuizConfig2.json";

function OnlineShopping({ onFinish }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>FAKE SHOPS</h1>
        <HotspotQuiz config={hotspotQuizConfig2} />
        <FinishButton onFinish={onFinish} />
      <MultipleChoiceQuiz config={multipleChoiceConfig} />
      <FinishButton onFinish={onFinish} />
    </main>
  );
}

export default OnlineShopping;
