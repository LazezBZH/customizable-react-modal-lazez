# A modal React component customize it with your favorite colors

## About

Simple component for React project.
Keep the default theme or chose your colors simply.

## Installation

You can install this component with npm or yarn:

    npm i customizable-react-modal-by-lazez

or

    yarn add customizable-react-modal-by-lazez

## Use in your React project

Import the Modal component into the file

    import { Modal } from customized-react-modal-lazez

## Example (file App.js in a React project)

    import { useState } from "react";
    import "./App.css";
    import { Modal } from "customizable-react-modal-by-lazez";

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

      //to open and close Modal
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

### CSS for this example ( file App.css not essential)

    .App {
      width: 100vw;
     height: 100vh;
     margin: auto;
     text-align: center;
     background-color: black;
    }
    .submit {
      width: 12rem;
      margin-top: 16.5rem;
      background-color: white;
      padding: 1.5rem;
      border-radius: 2rem;
    }

## Want to see what it's like?

[Demo on Netlify](https://customizable-react-modal-lazez.netlify.app/)

![demo1](https://raw.githubusercontent.com//LazezBZH/customizable-react-modal-lazez/master/src/docs/demo1.png)

![demo2](https://raw.githubusercontent.com//LazezBZH/customizable-react-modal-lazez/master/src/docs/demo2.png)
