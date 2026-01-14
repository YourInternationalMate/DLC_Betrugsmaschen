import "./FinishButton.css";

function FinishButton({ onFinish }) {
  return (
    <button className="finish-btn" onClick={onFinish}>Weiter</button>
);
}

export default FinishButton;