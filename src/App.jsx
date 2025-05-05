import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hello from "./components/Hello.jsx";
import Fruits from "./components/Fruits.jsx";
import ConditionalComponent from "./components/ConditionalComponent.jsx";
// import './App.css'

function App() {
  const seatNumbers = [1, 4, 7];
  const person = {
    name: "Aiman",
    message: "Hi there ",
    makanan: "nasi goreng",
    emoji: "😘",
    seatNumbers: [1, 4, 7],
  };
  return (
    <>
      {/* <ConditionalComponent /> */}
      <Fruits />
    </>
  );
}

export default App;
