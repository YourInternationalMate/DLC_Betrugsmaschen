import DragAndDrop from "../components/drag-and-drop/DragAndDrop";
import dragAndDropConfig1 from "../data/configs/dragAndDrop/DragAndDropConfig1.json";
import FinishButton from "../components/finish-btn/FinishButton.jsx";

function KiBetrug({ onFinish }) {
  return (
    <main>
        <DragAndDrop config={dragAndDropConfig1}/>
        <FinishButton onFinish={onFinish}/>
    </main>
);
}

export default KiBetrug;