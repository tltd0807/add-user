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
        <Form onErrorHandler={errorMessageHandler} />
        <Modal closeModal={closeModal} messageError={errorMessage} />
      </div>
    );
  return (
    <div className="App">
      <Form onErrorHandler={errorMessageHandler} />
    </div>
  );
}

export default App;
