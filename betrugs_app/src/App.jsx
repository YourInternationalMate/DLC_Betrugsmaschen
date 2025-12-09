import "./App.css";
import DragAndDrop from "./components/drag-and-drop/DragAndDrop";
import VideoQuiz from "./components/video-quiz/VideoQuiz.jsx";
import HotspotQuiz from "./components/hotspot-quiz/HotspotQuiz.jsx";
import hotspotQuizConfig1 from "./data/configs/hotspotQuiz/HotspotQuizConfig1.json"
import videoQuizConfig1 from "./data/configs/videoQuiz/VideoQuizConfig1.json"

function App() {
  return (
    <div className="app-shell">
      <main>
        <h1>BETRUGSMASCHEN<br />IM INTERNET.</h1>
          <VideoQuiz config={videoQuizConfig1}/>
          <HotspotQuiz config={hotspotQuizConfig1}/>
          <DragAndDrop/>
      </main>
    </div>
  );
}

export default App;
