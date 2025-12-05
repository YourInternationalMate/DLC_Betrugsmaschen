import { useState } from "react";
import quizFlow from "./VideoQuiz.json";
import VideoPlayer from "../Video/Video.jsx";
import RadioButton4 from "../radio-buttons/RadioButton-4";
import Instruction from "../quiz-instruction/Instruction.jsx";
import "./VideoQuiz.scss";

export default function VideoQuiz() {
    const [currentSegment, setCurrentSegment] = useState("intro");
    const [selectedValue, setSelectedValue] = useState("");
    const [showExplanation, setShowExplanation] = useState(false);
    const [segmentFeedback, setSegmentFeedback] = useState({});

    const segment = quizFlow[currentSegment];

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleRadioSubmit = (event) => {
        event.preventDefault();
        if (!selectedValue) return;

        const correct = selectedValue === segment.question.correctValue;
        const status = correct ? "correct" : "incorrect";

        setSegmentFeedback(prev => ({
            ...prev,
            [currentSegment]: status
        }));

        setShowExplanation(true);
    };

    const handleNextSegment = () => {
        if (!segment.question) return;

        const correct = selectedValue === segment.question.correctValue;
        const nextSegment = correct
            ? segment.question.next.correct
            : segment.question.next.incorrect;

        if (nextSegment === "quiz_done") {
            setCurrentSegment("intro");
        } else {
            setCurrentSegment(nextSegment);
        }
        setSelectedValue("");
        setShowExplanation(false);
    };

    const restartQuiz = () => {
        setCurrentSegment("intro");
        setSelectedValue("");
        setShowExplanation(false);
        setSegmentFeedback({});
    };

    const currentFeedback = segmentFeedback[currentSegment] || "warning";

    const isNextQuizDone =
        segment.question &&
        (segment.question.next.correct === "quiz_done" ||
            segment.question.next.incorrect === "quiz_done");

    return (
        <div className="video-quiz-container">
            {segment.video && (
                <VideoPlayer
                    video_name={segment.video}
                    subtitle_name={segment.subtitles}
                />
            )}

            <Instruction quizType="videoQuiz"/>

            {segment.question && !showExplanation && (
                <RadioButton4
                    value1={segment.question.values[0]}
                    value2={segment.question.values[1]}
                    value3={segment.question.values[2]}
                    value4={segment.question.values[3]}
                    selectedValue={selectedValue}
                    onChange={handleRadioChange}
                    handleSubmit={handleRadioSubmit}
                    feedbackStatus={currentFeedback}
                />
            )}

            {segment.question && showExplanation && (
                <div className={`explanation-container ${currentFeedback}`}>
                    <p className="explanation">
                        {segment.question.explanations[
                            segment.question.values.indexOf(selectedValue)
                            ]}
                    </p>
                    {isNextQuizDone ? (
                        <button className="restart-btn" onClick={handleNextSegment}>
                            Quiz wiederholen
                        </button>
                    ) : (
                        <button className="submit-btn" onClick={handleNextSegment}>
                            Weiter
                        </button>
                    )}
                </div>
            )}

            {!segment.question && !segment.video && (
                <button className="restart-btn" onClick={restartQuiz}>
                    Quiz wiederholen
                </button>
            )}
        </div>
    );
}
