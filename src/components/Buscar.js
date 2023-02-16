import React, { useState } from "react";

const Buscar = ({ setOpcion, setIdbuscar, setDatabuscar }) => {
  const [opciones, setOpciones] = useState([
    "people",
    "planets",
    "films",
    "species",
  ]);
  const [seleccionada, setSeleccionada] = useState("");
  const [id, setId] = useState("");

  function buscar(e) {
    e.preventDefault();
    // console.log(e, "QUE CONTIENE EVENTO");
    if (seleccionada === "" || id === "") {
      return;
    }
    setOpcion(seleccionada);
    setIdbuscar(id);
    setDatabuscar(true);
  }

  return (
    <div>
      <div>
        <select onChange={(e) => setSeleccionada(e.target.value)}>
          <option value="">"Por favor elije una opcion</option>
          {opciones.map((e, indice) => (
            <option key={indice} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <form>
        <label> Ingresa un numero</label>
        <input type="number" onChange={(e) => setId(e.target.value)} />
        <button onClick={buscar}> Buscar </button>
      </form>
    </div>
  );
};

export default Buscar;
