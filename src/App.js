import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";

function App() {
  const [errorMessage, setErrorMessage] = useState("Wrong Input Fomat!!");
  const [validInput, setvalidInput] = useState(true);
  const errorMessageHandler = (message) => {
    setErrorMessage(message);
    setvalidInput(false);
  };
  const closeModal = () => {
    setvalidInput(true);
  };
  if (!validInput)
    return (
      <div className="App">
        <Form errorMessageHandler={errorMessageHandler} />
        <Modal closeModal={closeModal} />
      </div>
    );
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
