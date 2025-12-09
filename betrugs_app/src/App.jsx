import "./App.css";
import DragAndDrop from "./components/drag-and-drop/DragAndDrop";
import VideoQuiz from "./components/video-quiz/VideoQuiz.jsx";
import HotspotQuiz from "./components/hotspot-quiz/HotspotQuiz.jsx";
import config1 from "./components/hotspot-quiz/HotspotQuiz.json"

function App() {
  return (
    <div className="app-shell">
      <main>
        <h1>BETRUGSMASCHEN<br />IM INTERNET.</h1>
          <VideoQuiz/>
          <HotspotQuiz config={config1}/>
          <DragAndDrop/>
      </main>
    </div>
  );
}

export default App;
