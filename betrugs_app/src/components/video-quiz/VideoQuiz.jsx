import { useState } from "react";
import quizFlow from "./VideoQuiz.json";
import VideoPlayer from "../Video/Video.jsx";
import RadioButton4 from "../radio-buttons/RadioButton-4";
import "./VideoQuiz.scss";

export default function VideoQuiz() {
    const [currentSegment, setCurrentSegment] = useState("intro");
    const [selectedValue, setSelectedValue] = useState("");
    const [showExplanation, setShowExplanation] = useState(false);

    // Feedback pro Segment speichern
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

        // Prüfen, ob das nächste Segment das Quiz beenden soll
        if (nextSegment === "quiz_done") {
            setCurrentSegment("intro");
            setSelectedValue("");
            setShowExplanation(false);
        } else {
            setCurrentSegment(nextSegment);
            setSelectedValue("");
            setShowExplanation(false);
        }
    };

    const restartQuiz = () => {
        setCurrentSegment("intro");
        setSelectedValue("");
        setShowExplanation(false);
        setSegmentFeedback({});
    };

    // Feedback für das aktuelle Segment
    const currentFeedback = segmentFeedback[currentSegment] || "warning";

    // Prüfen, ob nach diesem Segment das Quiz vorbei ist
    const isNextQuizDone =
        segment.question &&
        (segment.question.next.correct === "quiz_done" ||
            segment.question.next.incorrect === "quiz_done");

    return (
        <div className="video-quiz-container">
            {/* Video nur anzeigen, wenn es existiert */}
            {segment.video && (
                <VideoPlayer
                    video_name={segment.video}
                    subtitle_name={segment.subtitles}
                />
            )}

            {/* RadioButton nur anzeigen, wenn es eine Frage gibt und noch keine Erklärung */}
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

            {/* Erklärung und Button anzeigen */}
            {segment.question && showExplanation && (
                <div className={`explanation-container ${currentFeedback}`}>
                    <p className="explanation">
                        {segment.question.explanations[
                            segment.question.values.indexOf(selectedValue)
                            ]}
                    </p>
                    <button className="submit-btn" onClick={handleNextSegment}>
                        {isNextQuizDone ? "Quiz wiederholen" : "Weiter"}
                    </button>
                </div>
            )}

            {/* Falls Segment quiz_done erreicht, Button zum Neustarten */}
            {!segment.question && !segment.video && (
                <button className="submit-btn" onClick={restartQuiz}>
                    Quiz wiederholen
                </button>
            )}
        </div>
    );
}
