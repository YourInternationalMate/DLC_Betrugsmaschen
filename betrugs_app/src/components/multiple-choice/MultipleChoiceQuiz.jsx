import { useMemo, useState } from "react";
import "./MultipleChoiceQuiz.css";
import RadioButton2 from "../radio-buttons/RadioButton-2";
import RadioButton3 from "../radio-buttons/RadioButton-3";
import RadioButton4 from "../radio-buttons/RadioButton-4";
import VideoPlayer from "../video/Video";
import Instruction from "../quiz-instruction/Instruction.jsx";

function MultipleChoiceQuiz({ config }) {

  const {
    variant: variantFromConfig,
    question,
    videoName,
    subtitleName,
    correctValue,
    options = [],
    explanations,
  } = config;

  const values = options.map((option) => option?.value).filter(Boolean);

  const computedVariant = variantFromConfig || values.length;
  const [selectedValue, setSelectedValue] = useState("");
  const [feedback, setFeedback] = useState(null);

  const explanationMap = useMemo(() => {
    const map = {};

    options.forEach((option) => {
      if (option?.explanation) {
        map[option.value] = option.explanation;
      }
    });

    if (explanations) {
      if (Array.isArray(explanations)) {
        values.forEach((value, index) => {
          const explanationText = explanations[index];
          if (explanationText) {
            map[value] = explanationText;
          }
        });
      } else {
        Object.assign(map, explanations);
      }
    }

    return map;
  }, [options, explanations, values]);

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

  switch (computedVariant) {
    case 2:
      content = (
        <RadioButton2 value1={values[0]} value2={values[1]} {...sharedProps} />
      );
      break;
    case 3:
      content = (
        <RadioButton3
          value1={values[0]}
          value2={values[1]}
          value3={values[2]}
          {...sharedProps}
        />
      );
      break;
    case 4:
      content = (
        <RadioButton4
          value1={values[0]}
          value2={values[1]}
          value3={values[2]}
          value4={values[3]}
          {...sharedProps}
        />
      );
      break;
    default:
      content = null;
  }

  return (
    <>
      {videoName && (
        <VideoPlayer video_name={videoName} subtitle_name={subtitleName} />
      )}
      
      <Instruction quizType="multipleChoiceQuiz" />
      
      <div className="radio-btn-container">
        <h3 className="quiz-question">{question}</h3>
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
    </>
  );
}

export default MultipleChoiceQuiz;
