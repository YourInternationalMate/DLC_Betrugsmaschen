import multipleChoiceConfig1 from "../data/configs/multipleChoice/MultipleChoiceConfig1.json";
import MultipleChoiceQuiz from "../components/multiple-choice/MultipleChoiceQuiz.jsx";
import FinishButton from "../components/finish-btn/FinishButton.jsx";

function KiBetrug({ onFinish }) {
  return (
    <main>
        <MultipleChoiceQuiz config={multipleChoiceConfig1} />
        <FinishButton onFinish={onFinish}/>
    </main>
);
}

export default KiBetrug;