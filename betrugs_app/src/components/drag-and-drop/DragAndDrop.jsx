import "./DragAndDrop.scss";
import { Fragment, useState } from "react";
import VideoPlayer from "../Video/Video";
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

  const handleClick_Input = ({ target: { name } }, selectedWord) => {
    if (selectedWord === null) {
      setSelectedWords((prev) => ({ ...prev, [name]: defaultWords[name] }));
      return;
    } else {
      setSelectedWords((prev) => ({ ...prev, [name]: selectedWord }));
      setSelectedWord(null);
    }
  };

  const handleClick_check = () => {
    const isCorrect = Object.keys(correctWords).every(
      (key) => selectedWords[key] === correctWords[key]
    );
    console.log(isCorrect ? "PASST SO" : "PASST NICHT");
  };

  const handleClick_selection = (value) => {
    setSelectedWord(value);
  };

  const isWordAssigned = (value) =>
    Object.entries(selectedWords).some(([slot, word]) => {
      return defaultWords[slot] !== word && word === value;
    });

  return (
    <>
      <VideoPlayer widthClass="w-80" video_name={videoName} subtitle_name={subtitleName}/>
      <Instruction quizType="dragAndDropQuiz" />
      <div className="dnd-container">
        <div className="dnd-btn-row">
          {wordOptions.map(({ label, value }) => (
            <button
              key={value}
              className="dnd-btn"
              disabled={isWordAssigned(value)}
              onClick={() => handleClick_selection(value)}
            >
              {label}
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
                  className="dnd-btn-txt"
                  name={part.slot}
                  onClick={(event) => handleClick_Input(event, selectedWord)}
                >
                  {selectedWords[part.slot]}
                </button>
              )
            )}
          </p>
        </div>
      </div>
      <button className="submit-btn" onClick={handleClick_check}>
        ✓
      </button>
    </>
  );
}

export default DragAndDrop;
