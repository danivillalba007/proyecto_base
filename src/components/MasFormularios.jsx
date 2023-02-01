import React from "react";

const MasFormularios = (props) => {
  const { inputs, setInputs } = props;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <p>
        <label htmlFor="firstName">First Name </label>
        <input onChange={onChange} type="text" name="firstName" />
      </p>
      <p>
        <label htmlFor="lastName">Last Name </label>
        <input onChange={onChange} type="text" name="lastName" />
      </p>
      <p>
        <label htmlFor="email">Email </label>
        <input onChange={onChange} type="text" name="email" />
      </p>
      <p>
        <label htmlFor="password">Password </label>
        <input onChange={onChange} type="password" name="password" />
      </p>
      <p id="labelConfirm">
        <label htmlFor="confirmPassword">
          Confirm <br />
          Password <br />
        </label>
        <input onChange={onChange} type="password" name="confirmPassword" />
      </p>
    </div>
  );
};

export default MasFormularios;
