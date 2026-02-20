import { useState, useRef, useEffect } from "react";
import "./HotspotQuiz.scss";
import Instruction from "../quiz-instruction/Instruction";
import { FaRedo } from "react-icons/fa";

export default function HotspotQuiz({ config }) {
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [revealedHotspots, setRevealedHotspots] = useState([]);
  const [theme, setTheme] = useState(
      document.documentElement.getAttribute("data-theme") || "light"
  );

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  const explanationRef = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setTheme(currentTheme || "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentImage = (() => {
    if (isMobile) {
      // Mobile
      return theme === "dark"
          ? config.quiz_meta.imageHandyFormat.replace("-w.jpg", "-s.jpg")
          : config.quiz_meta.imageHandyFormat;
    } else {
      // Desktop
      return theme === "dark"
          ? config.quiz_meta.image.replace("-w.jpg", "-s.jpg")
          : config.quiz_meta.image;
    }
  })();


  const handleHotspotClick = (hs) => {
    setSelectedHotspot(hs);

    if (hs.groupId) {
      const groupMemberIds = config.hotspots
          .filter((item) => item.groupId === hs.groupId)
          .map((item) => item.id);

      setRevealedHotspots((prev) => {
        const nextSet = new Set([...prev, ...groupMemberIds]);
        return Array.from(nextSet);
      });
    } else {
      setRevealedHotspots((prev) =>
          prev.includes(hs.id) ? prev : [...prev, hs.id]
      );
    }

    setTimeout(scrollToExplanation, 50);
  };

  const handleRestart = () => {
    setSelectedHotspot(null);
    setRevealedHotspots([]);
  };

  const allCorrectClicked = config.hotspots
      .filter((hs) => hs.isCorrect)
      .every((hs) => revealedHotspots.includes(hs.id));

  const scrollToExplanation = () => {
    if (!explanationRef.current) return;
    const rect = explanationRef.current.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (!isVisible) {
      explanationRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
      <div className="hotspot-quiz-container">
        <Instruction quizType="hotSpotQuiz" instructionclass="hotspot-instruction-mobile" toggleclass="hotspot-button-mobile" />
        <div className="image-wrapper">
          <img
              src={currentImage}
              alt="Hotspot Quiz"
              className="quiz-image"
          />

          {config.hotspots.map((hs) => {
            const isRevealed = revealedHotspots.includes(hs.id);

            const coords = isMobile ? hs.mobile : hs.desktop;

            return (
                <button
                    key={hs.id}
                    className={`hotspot ${
                        isRevealed
                            ? hs.isCorrect
                                ? "correct"
                                : "wrong"
                            : "hidden"
                    }`}
                    style={{
                      top: `${coords.y}%`,
                      left: `${coords.x}%`,
                      width: `${coords.width}%`,
                      height: `${coords.height}%`,
                    }}
                    onClick={() => handleHotspotClick(hs)}
                />
            );
          })}
        </div>

        {selectedHotspot && (
            <div
                ref={explanationRef}
                className={`explanation-box ${
                    selectedHotspot.isCorrect ? "correct" : "incorrect"
                }`}
            >
              <p
                  className={`explanation ${
                      selectedHotspot.isCorrect ? "correct" : "incorrect"
                  }`}
              >
                {selectedHotspot.explanation ||
                    "Kein Fehler – dieser Bereich ist korrekt."}
              </p>
            </div>
        )}

        {allCorrectClicked && (
            <div className="submit-container">
              <p className="success-message">
                Du hast alle Hotspots gefunden.
              </p>
              <button className="submit-btn" onClick={handleRestart}>
                <FaRedo />
              </button>
            </div>
        )}
      </div>
  );
}
