import { useState } from "react";
import "./App.css";
import Modal from "./lib/components/Modal";

function App() {
  // Set here your own colors or keep  my theme if you like it
  const myTheme = {
    containerBg: "rgba(146, 146, 96, 1)",
    messageBg: "#444444",
    messageHoverBg: "#aebf8e",
    messageHoverTxt: "black",
    borderColor: "#d5db99",
    buttonBg: "#d5db99",
    buttonHoverBg: "#444444",
    buttonHoverTxt: "white",
  };

  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenModal();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <button type="submit" className="submit">
          Clic to open Modal
        </button>
      </form>

      {openModal && (
        <Modal
          theme={myTheme}
          close={onCloseModal}
          text="Write here whatever you want!"
        />
      )}
    </div>
  );
}

export default App;
