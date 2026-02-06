import DragAndDrop from "../components/drag-and-drop/DragAndDrop";
import dragAndDropConfig1 from "../data/configs/dragAndDrop/DragAndDropConfig1.json";
import FinishButton from "../components/finish-btn/FinishButton.jsx";
import { useEffect } from "react";

function KiBetrug({ onFinish }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>KI-FALLEN IM NETZ</h1>
      <DragAndDrop config={dragAndDropConfig1} />
      <FinishButton onFinish={onFinish} />
    </main>
  );
}

export default KiBetrug;
