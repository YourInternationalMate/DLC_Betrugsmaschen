import { useMemo, useState } from "react";
import "./MultipleChoiceQuiz.css";
import RadioButton2 from "../radio-buttons/RadioButton-2";
import RadioButton3 from "../radio-buttons/RadioButton-3";
import RadioButton4 from "../radio-buttons/RadioButton-4";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import VideoPlayer from "../video/Video";
import Instruction from "../quiz-instruction/Instruction.jsx";

function MultipleChoiceQuiz({ config }) {
  const { videoName, subtitleName } = config;

  const questionItems = useMemo(() => {
    if (Array.isArray(config.questions) && config.questions.length > 0) {
      return config.questions;
    }

    return [
      {
        variant: config.variant,
        question: config.question,
        correctValue: config.correctValue,
        correctValues: config.correctValues,
        allowMultiple: config.allowMultiple,
        options: config.options ?? [],
        explanations: config.explanations,
      },
    ];
  }, [config]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedValues, setSelectedValues] = useState([]);
  const [feedback, setFeedback] = useState(null);

  const currentQuestion =
    questionItems[currentQuestionIndex] ?? questionItems[0] ?? {};
  const {
    variant: variantFromConfig,
    question = "",
    correctValue = "",
    correctValues: correctValuesFromConfig,
    allowMultiple,
    options = [],
    explanations,
  } = currentQuestion;

  const values = options.map((option) => option?.value).filter(Boolean);
  const computedVariant = variantFromConfig || values.length;
  const hasNextQuestion = currentQuestionIndex < questionItems.length - 1;
  const showContinueButton = feedback?.status === "correct" && hasNextQuestion;
  const selectedValue = selectedValues[0] ?? "";

  const correctValues = useMemo(() => {
    if (Array.isArray(correctValuesFromConfig) && correctValuesFromConfig.length > 0) {
      return correctValuesFromConfig.filter(Boolean);
    }

    return correctValue ? [correctValue] : [];
  }, [correctValue, correctValuesFromConfig]);

  const isMultiAnswerQuestion =
    typeof allowMultiple === "boolean"
      ? allowMultiple
      : correctValues.length > 1;

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

  const handleSingleChange = (event) => {
    setSelectedValues([event.target.value]);
    setFeedback(null);
  };

  const handleMultiChange = (event) => {
    const { value, checked } = event.target;

    setSelectedValues((prev) => {
      if (checked) {
        return Array.from(new Set([...prev, value]));
      }

      return prev.filter((item) => item !== value);
    });

    setFeedback(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanedSelection = Array.from(new Set(selectedValues.filter(Boolean)));

    if (cleanedSelection.length === 0) {
      setFeedback({
        status: "warning",
        message: isMultiAnswerQuestion
          ? "Bitte wähle mindestens eine Antwort aus."
          : "Bitte wähle eine Antwort aus.",
      });
      return;
    }

    console.log("Ausgewählte Antwort(en):", cleanedSelection);

    const isCorrect =
      cleanedSelection.length === correctValues.length &&
      correctValues.every((value) => cleanedSelection.includes(value));

    const correctExplanationText = correctValues
      .map((value) => explanationMap[value])
      .filter(Boolean)
      .join(" ");

    setFeedback({
      status: isCorrect ? "correct" : "incorrect",
      message: isCorrect
        ? correctExplanationText ||
          (isMultiAnswerQuestion ? "Richtige Antworten!" : "Richtige Antwort!")
        : isMultiAnswerQuestion
        ? "Leider nicht vollständig richtig. Versuche es nochmal."
        : "Leider falsch. Versuche es nochmal.",
    });
  };

  const handleNextQuestion = () => {
    if (!hasNextQuestion) {
      return;
    }

    setCurrentQuestionIndex((prev) => prev + 1);
    setSelectedValues([]);
    setFeedback(null);
  };

  const getOptionStyles = (optionValue) => {
    if (!feedback || feedback.status === "warning") {
      return {};
    }

    if (!selectedValues.includes(optionValue)) {
      return {};
    }

    const colorMap = {
      correct: "#1b5e20",
      incorrect: "#b71c1c",
    };

    const matchedColor = colorMap[feedback.status];

    if (!matchedColor) {
      return {};
    }

    return {
      "& .MuiSvgIcon-root": { color: matchedColor },
      "& .MuiFormControlLabel-label": { color: matchedColor },
    };
  };

  const sharedProps = {
    handleSubmit,
    onChange: handleSingleChange,
    selectedValue,
    feedbackStatus: feedback?.status,
    showSubmitButton: !showContinueButton,
  };

  let content;

  if (isMultiAnswerQuestion) {
    content = (
      <form onSubmit={handleSubmit}>
        <FormControl className="form-container">
          <FormGroup className="radio-btn">
            {values.map((value) => (
              <FormControlLabel
                key={value}
                control={
                  <Checkbox
                    value={value}
                    onChange={handleMultiChange}
                    checked={selectedValues.includes(value)}
                  />
                }
                label={value}
                sx={getOptionStyles(value)}
              />
            ))}
          </FormGroup>
          {!showContinueButton && (
            <button type="submit" className="submit-btn">
              ✓
            </button>
          )}
        </FormControl>
      </form>
    );
  } else {
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
  }

  return (
    <>
      {videoName && (
        <VideoPlayer video_name={videoName} subtitle_name={subtitleName} />
      )}
      
      <Instruction quizType="multipleChoiceQuiz" />
      
      <div className="radio-btn-container">
        {questionItems.length > 1 && (
          <p className="quiz-progress">
            Frage {currentQuestionIndex + 1} von {questionItems.length}
          </p>
        )}
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
          {showContinueButton && (
            <button className="submit-btn quiz-next-btn" onClick={handleNextQuestion}>
              Weiter
            </button>
          )}
      </div>
    </>
  );
}

export default MultipleChoiceQuiz;
