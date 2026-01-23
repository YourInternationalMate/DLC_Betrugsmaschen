import "./DragAndDrop.scss";
import { Fragment, useState } from "react";
import VideoPlayer from "../video/Video";
import Instruction from "../quiz-instruction/Instruction";

function DragAndDrop({ config }) {

  const {
    paragraphParts = [],
    defaultWords = {},
    correctWords = {},
    wordOptions = [],
    videoName,
    subtitleName
  } = config;

  const [selectedWords, setSelectedWords] = useState(defaultWords);
  const [selectedWord, setSelectedWord] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [wrongSlots, setWrongSlots] = useState([]);

  const handleClick_Input = ({ target: { name } }, selectedWord) => {
    setFeedback(null);
    if (selectedWord === null) {
      setSelectedWords((prev) => ({ ...prev, [name]: defaultWords[name] }));
    } else {
      setSelectedWords((prev) => ({ ...prev, [name]: selectedWord }));
      setSelectedWord(null);
    }

    setWrongSlots((prev) => prev.filter((slot) => slot !== name));
  };

  const handleClick_check = () => {
    const slots = Object.keys(correctWords);

    const hasMissing = slots.some((slot) => {
      const currentWord = selectedWords[slot];
      const defaultWord = defaultWords[slot];
      const correctWord = correctWords[slot];

      return currentWord === defaultWord && correctWord !== defaultWord;
    });

    if (hasMissing) {
      setFeedback({
        status: "warning",
        message: "Bitte fülle alle Lücken aus.",
      });
      setWrongSlots([]);
      return;
    }

    const wrong = slots.filter(
        (slot) => selectedWords[slot] !== correctWords[slot]
    );
    setWrongSlots(wrong);

    const isCorrect = slots.every((key) => selectedWords[key] === correctWords[key]);

    setFeedback({
      status: isCorrect ? "correct" : "incorrect",
      message: isCorrect
        ? "Richtige Antwort!"
        : "Noch nicht ganz richtig.",
    });
  };

  const handleClick_selection = (value) => {
    setSelectedWord(value);
    setFeedback(null);
  };

  const isWordAssigned = (value) =>
    Object.entries(selectedWords).some(([slot, word]) => {
      return defaultWords[slot] !== word && word === value;
    });

  return (
    <>
      <VideoPlayer video_name={videoName} subtitle_name={subtitleName}/>
      <Instruction quizType="dragAndDropQuiz" />
      <div className="dnd-container">
        <div className="dnd-btn-row">
          {wordOptions.map(({ label, value }) => (
            <button
              key={label}
              className={`dnd-btn ${selectedWord === value ? "selected" : ""}`}
              disabled={isWordAssigned(value)}
              onClick={() => handleClick_selection(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="dnd-txt">
          <p>
            {paragraphParts.map((part, index) =>
              typeof part === "string" ? (
                <Fragment key={`text-${index}`}>{part}</Fragment>
              ) : (
                <button
                  key={`slot-${part.slot}-${index}`}
                  className={`dnd-btn-txt ${wrongSlots.includes(part.slot) ? "wrong" : ""}`}
                  name={part.slot}
                  onClick={(event) => handleClick_Input(event, selectedWord)}
                >
                  {selectedWords[part.slot]}
                </button>
              )
            )}
          </p>
          {feedback && feedback.status !== "warning" && (
              <p className={`quiz-feedback ${feedback.status}`}>
                {feedback.message}
              </p>
          )}
          {feedback?.status === "warning" && (
              <p className="quiz-feedback warning">{feedback.message}</p>
          )}
          <button className="submit-btn" onClick={handleClick_check}>
            ✓
          </button>
        </div>
      </div>
    </>
  );
}

export default DragAndDrop;
