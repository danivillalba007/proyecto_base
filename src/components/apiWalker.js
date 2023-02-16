import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Buscar from "./Buscar";
import Mostrar from "./Mostrar";

const ApiWalker = () => {
  // const params = useParams();
  const [opcion, setOpcion] = useState("");
  const [id, setIdbuscar] = useState("");
  const [databuscar, setDatabuscar] = useState(false);

  return (
    <div>
      <h1> apiWalker </h1>
      <Buscar
        setOpcion={setOpcion}
        setIdbuscar={setIdbuscar}
        setDatabuscar={setDatabuscar}
      />
      <Mostrar
        opcion={opcion}
        id={id}
        databuscar={databuscar}
        setDatabuscar={setDatabuscar}
      />
    </div>
  );
};

export default ApiWalker;
