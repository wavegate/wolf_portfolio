import { useState } from "react";
import drawing from "./assets/drawing.svg";
import "./App.css";

function App() {
  return (
    <div className="min-h-[100vh] w-[100vw] bg-gradient-to-r from-[#0C171D] to-[#2F4044]">
      <div className={`container mx-auto`}>
        <img src={drawing} className={`pt-4 w-[70%] absolute right-0`} />
        <h1 className={`text-white text-2xl tracking-wider font-light`}>
          Whereas recognition of the inherent dignity
        </h1>
      </div>
    </div>
  );
}

export default App;
