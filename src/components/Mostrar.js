import React, { useEffect, useState } from "react";
import axios from "axios";

const Mostrar = ({ opcion, id, databuscar, setDatabuscar }) => {
  const [resultado, setResultado] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${opcion}/${id}/`)
      .then((res) => {
        console.log(res.data);
        const arreglo = [];
        for (const propiedad in res.data) {
          arreglo.push(`${propiedad}: ${res.data[propiedad]}`);
        }
        setResultado(arreglo.slice(0, 4));
        setDatabuscar(false);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setDatabuscar(false);
        setError("Esto no existe");
      });
  }, [databuscar]);

  // const mostrarDetalles = () => {
  //   const [detalle, setDetalle] = useState({});
  //   setDetalle(

  //   )
  // };

  return (
    <div>
      {/* <h2> {resultado.name ? resultado.name : resultado.title} </h2> */}
      {/* <pre> {JSON.stringify(resultado, null, 2)}</pre> */}
      {error.length > 1 ? (
        <h1>{error}</h1>
      ) : (
        resultado.map((atributo, indice) => <p key={indice}>{atributo}</p>)
      )}
    </div>
  );
};

export default Mostrar;
