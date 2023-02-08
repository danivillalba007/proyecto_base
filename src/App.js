import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [actividad, setActividad] = useState([]);

  const guardarInputs = (e) => {
    e.preventDefault();

    setActividad([...actividad, e.target[0].value]);
  };

  // const nuevaActividad = () => {
  //   actividad.map(setActividad, nuevaActividad);
  // };

  return (
    <div>
      <form onSubmit={guardarInputs}>
        <input type="text" name="input" />
        <button name="addButton">add</button>
      </form>
      <h2>Actividades</h2>
      <p>
        {actividad.map((actividad) => {
          return (
            <div>
              <p>
                {actividad}
                <button> Delete</button>
              </p>
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default App;
