import "./FinishButton.css";

function FinishButton({ onFinish, text = "Weiter" }) {
  return (
    <button className="finish-btn" onClick={onFinish}>{ text }</button>
);
}

export default FinishButton;