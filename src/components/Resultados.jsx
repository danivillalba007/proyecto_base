import React from "react";

const Resultados = (props) => {
  const { firstName, lastName, email, password, confirmPassword } = props.data;
  console.log(props);
  return (
    <div>
      <h2>Resultados</h2>
      <p>First Name : {firstName}</p>
      <p>Last Name : {lastName}</p>
      <p>Email : {email}</p>
      <p>Pasword : {password}</p>
      <p>Confirm Password : {confirmPassword}</p>
    </div>
  );
};

export default Resultados;
