import "./DragAndDrop.scss";
import { useState } from "react";
import Video from "../Video/Video";

//TODO: Text muss angepasst werden
//TODO: defaultWords + correctWords
//TODO:Buttons im Text platzieren
function DragAndDrop() {
  const defaultWords = {
    test: "test",
    test1: "test1",
  };

  const correctsWords = {
    test: "Ciao",
    test1: "Hallo",
  };

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
    const isCorrect = Object.keys(correctsWords).every(
      (key) => selectedWords[key] === correctsWords[key]
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
    <div className="quiz-container">
      <Video widthClass="w-60" path={"test_Video.mp4"} />
      <div className="dnd-container">
        <div className="dnd-btn-row">
          <button
            className="dnd-btn"
            disabled={isWordAssigned("Hallo")}
            onClick={() => handleClick_selection("Hallo")}
          >
            Hallo
          </button>
          <button
            className="dnd-btn"
            disabled={isWordAssigned("Ciao")}
            onClick={() => handleClick_selection("Ciao")}
          >
            Ciao
          </button>
          <button
            className="dnd-btn"
            disabled={isWordAssigned("Test")}
            onClick={() => handleClick_selection("Test")}
          >
            Test
          </button>
        </div>
        <div className="dnd-text">
          <p>
            Lorem ipsum dolor sit{" "}
            <button
              className="dnd-btn-txt"
              name="test"
              onClick={(event) => handleClick_Input(event, selectedWord)}
            >
              {selectedWords.test}
            </button>
            , consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit{" "}
            <button
              className="dnd-btn-txt"
              name="test1"
              onClick={(event) => handleClick_Input(event, selectedWord)}
            >
              {selectedWords.test1}
            </button>
            , consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </p>
        </div>
      </div>
      <button className="submit-btn" onClick={handleClick_check}>
        ✓
      </button>
    </div>
  );
}

export default DragAndDrop;
