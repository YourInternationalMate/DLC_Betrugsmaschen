import multipleChoiceConfig1 from "../data/configs/multipleChoice/MultipleChoiceConfig1.json";
import MultipleChoiceQuiz from "../components/multiple-choice/MultipleChoiceQuiz.jsx";

function KiBetrug() {
  return (
    <main>
        <MultipleChoiceQuiz config={multipleChoiceConfig1} />
    </main>
);
}

export default KiBetrug;