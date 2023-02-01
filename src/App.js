import React, { useState } from "react";
import "./App.css";
import MasFormularios from "./components/MasFormularios";
import Resultados from "./components/Resultados";

const App = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div>
      <MasFormularios inputs={state} setInputs={setState} />
      <Resultados data={state} />
    </div>
  );
};

export default App;
