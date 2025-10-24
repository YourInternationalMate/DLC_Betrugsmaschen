import { useState } from "react";
import RadioButton2 from "../radio-buttons/RadioButton-2";
import RadioButton3 from "../radio-buttons/RadioButton-3";
import RadioButton4 from "../radio-buttons/RadioButton-4";

function MultipleChoiceQuiz({ variant, value1, value2, value3, value4 }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Ausgewählte Antwort:", selectedValue); // TODO: hier dann Bewertung
  };

  let content;

  switch (variant) {
    case 2:
      content = (
        <RadioButton2
          value1={value1}
          value2={value2}
          handleSubmit={handleSubmit}
          onChange={handleChange}
          selectedValue={selectedValue}
        />
      );
      break;
    case 3:
      content = (
        <RadioButton3
          value1={value1}
          value2={value2}
          value3={value3}
          handleSubmit={handleSubmit}
          onChange={handleChange}
          selectedValue={selectedValue}
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
          handleSubmit={handleSubmit}
          onChange={handleChange}
          selectedValue={selectedValue}
        />
      );
      break;
    default:
      content = null;
  }

  return (
    <div className="quiz-container">
      <div className="video-conatiner">
        {/* TODO: Video Component einfügen */}
      </div>
      <div className="radio-btn-container">{content}</div>
    </div>
  );
}

export default MultipleChoiceQuiz;
