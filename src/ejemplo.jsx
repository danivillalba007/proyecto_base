import React from "react";
import "./App.css";
import { useState } from "react";

// const App = () => {
const [datos, setDatos] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
});

const onInputChange = ({ target }) => {
    //del evento de desestructura el  target
    const { name, value } = target;
    // cambio del state
    setDatos({
        ...datos, //se desestructura los datos, para mantener  todos los valores del formulario porque pueen ser cientos de campos acá, pero sólo quiero cambiar la que el main esté siendo modificada
        [name]: value, // para esto existe en js las propiedades computadas de los objetos, colocando [] voy a decir que la propiedad name es la que voy a establecer en el objeto y el valor va a ser al valor del nuevo 'value'
    });
};

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [firstNameError, setFirstNameError] = useState("");
const [lastNameError, setLastNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [confirmPasswordError, setConfirmPasswordError] = useState("");

const handleFirstNameError = (e) => {
    setFirstName(e);
    if (e.length < 2) {
        if ((e = "")) {
            setFirstNameError("");
        } else if (e.length < 2) {
            setFirstNameError("El Nombre debe tener al menos 2 caracteres");
        }
    } else {
        setFirstNameError("");
    }
};
const handleLastNameError = (e) => {
    setLastName(e);
    if (e.length < 2) {
        if ((e = "")) {
            setLastNameError("");
        } else if (e.length < 2) {
            setLastNameError("El Apellido debe tener al menos 2 caracteres");
        }
    } else {
        setLastNameError("");
    }
};

const handleEmail = (e) => {
    setEmail(e);
    if (e.length < 5) {
        if ((e = "")) {
            setEmailError("");
        } else if (e.length < 5) {
            setEmailError("El Email debe tener al menos 5 caracteres");
        }
    } else {
        setEmailError("");
    }
};

const handlePassword = (e) => {
    setPassword(e);
    if (e.length < 8) {
        if ((e = "")) {
            setPasswordError("");
        } else if (e.length < 8) {
            setPasswordError("El Password debe tener al menos 5 caracteres");
        }
    } else {
        setPasswordError("");
    }
};

const handleConfirmPassword = (e) => {
    setConfirmPassword(e);
    if (e.length < 8) {
        if ((e = "")) {
            setConfirmPasswordError("");
        } else if (e.length < 8) {
            setConfirmPasswordError("El Password debe tener al menos 8 caracteres");
        }
    } else if (password != e) {
        setConfirmPasswordError("El password no es el mismo");
    }
};

return (<
    div >
    <
    p >
        <
    label htmlFor="firstName" > First Name < /label> <
                input type="text"
                name="firstName"
                onBlur={
                    (e) => handleFirstNameError(e.target.value)}
            /> <
    p > {firstNameError} < /p> <
    /p> <
    p >
                    <
    label htmlFor="lastName" > Last Name < /label> <
                            input type="text"
                            name="lastName"
                            onBlur={
                                (e) => handleLastNameError(e.target.value)}
                        /> <
    p > {lastNameError} < /p> <
    /p> <
    p >
                                <
    label htmlFor="email" > Email < /label> <
                                        input type="text"
                                        name="email"
                                        onBlur={
                                            (e) => handleEmail(e.target.value)}
                                    /> <
    p > {emailError} < /p> <
    /p> <
    p >
                                            <
    label htmlFor="password" > Password < /label> <
                                                    input type="password"
                                                    name="password"
                                                    onBlur={
                                                        (e) => handlePassword(e.target.value)}
                                                /> <
    p > {passwordError} < /p> <
    /p> <
    p id="labelConfirm" >
                                                        <
    label htmlFor="confirmPassword" >
                                                            Confirm < br />
                                                            Password < br />
                                                            <
    /label> <
                                                                input type="password"
                                                                name="confirmPassword"
                                                                onBlur={
                                                                    (e) => handleConfirmPassword(e.target.value)}
                                                            /> <
    /p> <
    p > {confirmPasswordError} < /p> <
    /div>
                                                                );
};

// export default App;