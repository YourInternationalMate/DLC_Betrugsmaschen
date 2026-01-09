import DragAndDrop from "../components/drag-and-drop/DragAndDrop";
import dragAndDropConfig1 from "../data/configs/dragAndDrop/DragAndDropConfig1.json";

function KiBetrug() {
  return (
    <main>
        <DragAndDrop config={dragAndDropConfig1}/>
    </main>
);
}

export default KiBetrug;