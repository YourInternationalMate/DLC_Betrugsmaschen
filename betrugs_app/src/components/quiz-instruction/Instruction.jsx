import { useState } from "react";
import instructionsData from "../../data/QuizInstructions.json";
import "./Instruction.scss";

export default function Instruction({ quizType }) {
    const [isOpen, setIsOpen] = useState(false);

    if (!instructionsData[quizType]) {
        return null;
    }

    const { text } = instructionsData[quizType];

    return (
        <div className="instruction-container">
            <button className="toggle-btn"
                onClick={() => setIsOpen(prev => !prev)}
            >
                ?
            </button>
            {isOpen && (
                <div className="instruction-box">
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
}
