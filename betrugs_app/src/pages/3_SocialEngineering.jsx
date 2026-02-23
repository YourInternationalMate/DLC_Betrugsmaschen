import multipleChoiceConfig from "../data/configs/multipleChoice/SocialEngineeringMC.json";
import MultipleChoiceQuiz from "../components/multiple-choice/MultipleChoiceQuiz.jsx";
import FinishButton from "../components/finish-btn/FinishButton.jsx";
import { useEffect } from "react";

function SocialEngineering({ onFinish }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>SOCIAL ENGINEERING</h1>
      <MultipleChoiceQuiz config={multipleChoiceConfig} />
      <FinishButton onFinish={onFinish} />
    </main>
  );
}

export default SocialEngineering;
