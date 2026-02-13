import { useState } from "react";
import instructionsData from "../../data/QuizInstructions.json";
import "./Instruction.scss";

export default function Instruction({ quizType, toggleclass="", instructionclass="" }) {
    const [isOpen, setIsOpen] = useState(false);

    if (!instructionsData[quizType]) {
        return null;
    }

    const { text } = instructionsData[quizType];

    return (
        <div className="instruction-container">
            <button className={`toggle-btn ${toggleclass}`}
                onClick={() => setIsOpen(prev => !prev)}
            >
                ?
            </button>
            {isOpen && (
                <div className={`instruction-box ${instructionclass}`}>
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
}
