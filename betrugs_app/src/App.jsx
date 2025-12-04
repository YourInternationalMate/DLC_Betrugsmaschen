import "./App.css";
import DragAndDrop from "./components/drag-and-drop/DragAndDrop";
import VideoQuiz from "./components/video-quiz/VideoQuiz.jsx";

function App() {
  return (
    <div className="app-shell">
      <main>
        <h1>BETRUGSMASCHEN<br />IM INTERNET.</h1>
          <VideoQuiz/>
      </main>
    </div>
  );
}

export default App;
 