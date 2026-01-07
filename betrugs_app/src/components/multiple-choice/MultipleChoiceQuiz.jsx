import { useMemo, useState } from "react";
import "./MultipleChoiceQuiz.css";
import RadioButton2 from "../radio-buttons/RadioButton-2";
import RadioButton3 from "../radio-buttons/RadioButton-3";
import RadioButton4 from "../radio-buttons/RadioButton-4";
import Video from "../Video/Video";

// variant={Zahl, wieviele Möglichkeiten 2-4} 
// value1={""}-value4 
// explanations={["Test1 ist falsch", ..4]} 
// correctValue={""}-Wert der auch in Value eingetragen wird
function MultipleChoiceQuiz({
  variant,
  question,
  value1,
  value2,
  value3,
  value4,
  correctValue,
  explanations,
}) {
  const [selectedValue, setSelectedValue] = useState("");
  const [feedback, setFeedback] = useState(null);
  const answerOptions = useMemo(
    () =>
      [value1, value2, value3, value4].filter((option) => option !== undefined),
    [value1, value2, value3, value4]
  );

  const explanationMap = useMemo(() => {
    if (!explanations) {
      return {};
    }

    if (Array.isArray(explanations)) {
      return answerOptions.reduce((map, optionValue, index) => {
        const explanationText = explanations[index];
        if (explanationText) {
          map[optionValue] = explanationText;
        }
        return map;
      }, {});
    }

    return explanations;
  }, [answerOptions, explanations]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setFeedback(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedValue) {
      setFeedback({
        status: "warning",
        message: "Bitte wähle eine Antwort aus.",
      });
      return;
    }

    console.log("Ausgewählte Antwort:", selectedValue);

    const isCorrect = selectedValue === correctValue;
    const explanationText = explanationMap[selectedValue];

    setFeedback({
      status: isCorrect ? "correct" : "incorrect",
      message:
        explanationText ??
        (isCorrect
          ? "Richtige Antwort!"
          : "Leider falsch. Schau dir die Hinweise an."),
    });
  };

  const sharedProps = {
    handleSubmit,
    onChange: handleChange,
    selectedValue,
    feedbackStatus: feedback?.status,
  };

  let content;

  switch (variant) {
    case 2:
      content = (
        <RadioButton2 value1={value1} value2={value2} {...sharedProps} />
      );
      break;
    case 3:
      content = (
        <RadioButton3
          value1={value1}
          value2={value2}
          value3={value3}
          {...sharedProps}
        />
      );
      break;
    case 4:
      content = (
        <RadioButton4
          value1={value1}
          value2={value2}
          value3={value3}
          value4={value4}
          {...sharedProps}
        />
      );
      break;
    default:
      content = null;
  }

  return (
    <div className="quiz-container">
      <Video widthClass="w-80" path={"test_Video.mp4"} />
      <h3 className="quiz-question">{question}</h3>
      <div className="radio-btn-container">
        {content}
        {feedback && feedback.status !== "warning" && (
          <p className={`quiz-feedback ${feedback.status}`}>
            {feedback.message}
          </p>
        )}
        {feedback?.status === "warning" && (
          <p className="quiz-feedback warning">{feedback.message}</p>
        )}
      </div>
    </div>
  );
}

export default MultipleChoiceQuiz;
