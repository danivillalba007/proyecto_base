import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [actividad, setActividad] = useState([]);

  console.log(actividad, "que es actividad");

  const guardarInputs = (e) => {
    e.preventDefault();

    setActividad([...actividad, e.target[0].value]);
  };

  const deleteActividad = (i) => {
    console.log(i, "este es el índice de esta actividad");
    setActividad([
      ...actividad.filter(
        (actividad, indiceActividad) => i !== indiceActividad
      ),
    ]);
  };

  return (
    <div>
      <form onSubmit={guardarInputs}>
        <input type="text" name="input" />
        <button name="addButton">add</button>
      </form>
      <h2>Actividades</h2>
      <>
        {actividad.map((actividad, i) => {
          return (
            <div key={i} className="actividades">
              <input type="checkbox" value="checked" />
              <p>{actividad}</p>
              <button onClick={() => deleteActividad(i)}> Delete</button>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default App;
