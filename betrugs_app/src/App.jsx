import "./App.css";
import DragAndDrop from "./components/drag-and-drop/DragAndDrop";
import VideoQuiz from "./components/video-quiz/VideoQuiz.jsx";
import HotspotQuiz from "./components/hotspot-quiz/HotspotQuiz.jsx";
import hotspotQuizConfig1 from "./data/configs/hotspotQuiz/HotspotQuizConfig1.json"
import videoQuizConfig1 from "./data/configs/videoQuiz/VideoQuizConfig1.json"
import dragAndDropConfig1 from "./data/configs/dragAndDrop/DragAndDropConfig1.json";
import multipleChoiceConfig1 from "./data/configs/multipleChoice/MultipleChoiceConfig1.json";
import VideoPlayer from "./components/video/Video.jsx";
import MultipleChoiceQuiz from "./components/multiple-choice/MultipleChoiceQuiz.jsx";

function App() {
  return (
    <div className="app-shell">
      <main>
        <h1>BETRUGSMASCHEN<br />IM INTERNET.</h1>
        <section>
          <VideoPlayer video_name={"videoQuizTest1.mp4"} />
        </section>
        <section>
          <HotspotQuiz config={hotspotQuizConfig1}/>
        </section>
        <section>
          <VideoQuiz config={videoQuizConfig1}/>
        </section>
        <section>
          <MultipleChoiceQuiz config={multipleChoiceConfig1}/>
        </section>
        <section>
          <DragAndDrop config={dragAndDropConfig1}/>
        </section>
        <section>
          <MultipleChoiceQuiz config={multipleChoiceConfig1} />
        </section>
        <section>
          <VideoPlayer video_name={"videoQuizTest1.mp4"} />
        </section>
      </main>
    </div>
  );
}

export default App;
