import React from "react";
import { Advicecard } from "./components/Adivcecard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Advicecard />
    </>
  );
}

export default App;
