import { useState } from "react";
import "./HotspotQuiz.scss";
import Instruction from "../quiz-instruction/Instruction";

export default function HotspotQuiz( {config}) {
    const [selectedHotspot, setSelectedHotspot] = useState(null);
    const [revealedHotspots, setRevealedHotspots] = useState([]);

    const handleHotspotClick = (hs) => {
        setSelectedHotspot(hs);

        setRevealedHotspots(prev =>
            prev.includes(hs.id) ? prev : [...prev, hs.id]
        );
    };

    const handleRestart = () => {
        setSelectedHotspot(null);
        setRevealedHotspots([]);
    };

    const allCorrectClicked = config.hotspots
        .filter(hs => hs.isCorrect)
        .every(hs => revealedHotspots.includes(hs.id));

    return (
        <div className="hotspot-quiz-container">

            <div className="image-wrapper">
                <img
                    src={config.quiz_meta.image}
                    alt="Hotspot Quiz"
                    className="quiz-image"
                />

                {config.hotspots.map(hs => {
                    const isRevealed = revealedHotspots.includes(hs.id);

                    return (
                        <button
                            key={hs.id}
                            className={`hotspot ${
                                isRevealed
                                    ? (hs.isCorrect ? "correct" : "wrong")
                                    : "hidden"
                            }`}
                            style={{
                                top: `${hs.y}%`,
                                left: `${hs.x}%`,
                                width: `${hs.width}%`,
                                height: `${hs.height}%`,
                            }}
                            onClick={() => handleHotspotClick(hs)}
                        />
                    );
                })}
            </div>

            <Instruction quizType="hotSpotQuiz" />

            {selectedHotspot && (
                <div
                    className={`explanation-box ${
                        selectedHotspot.isCorrect ? "correct" : "incorrect"
                    }`}
                >
                    <p>{selectedHotspot.explanation || "Kein Fehler – dieser Bereich ist korrekt."}</p>
                </div>
            )}

            {allCorrectClicked && (
                <div className="finished-container">
                    <p className="success-message">Du hast alle Hotspots gefunden. Gut gemacht!</p>
                    <div className="button-row">
                        <button className="restart-btn" onClick={handleRestart}>Quiz wiederholen</button>
                        <button className="next-btn">Weiter</button>
                    </div>
                </div>
            )}
        </div>
    );
}
