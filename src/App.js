import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [actividad, setActividad] = useState("");

  // setActividad();

  return (
    <div>
      <div>
        <input type="text" />
        <button name="add">add</button>
        {/* <p>{actividad}</p> */}
      </div>
    </div>
  );
};

export default App;
