import "./App.css";
import MultipleChoiceQuiz from "./components/multiple-choice/MultipleChoiceQuiz";

function App() {
  return (
    <div className="app-shell">
      <main>
        <h1>BETRUGSMASCHEN<br />IM INTERNET.</h1>
        <MultipleChoiceQuiz variant={2} value1={"test1"} value2={"test2"} explanations={["Test1 ist falsch", "test2 ist korrekt"]} correctValue={"test2"}/>
      </main>
    </div>
  );
}

export default App;
 