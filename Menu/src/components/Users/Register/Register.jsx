{/*import React, { useState } from "react";
import "./Register.scss";
import axios from "axios";

function Register({ setListUsers }) {
  const [userDetails, setUserDetails] = useState({ name: "",email: "", password: "" });

  const handleInput = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    setUserDetails({ ...userDetails, [id]: value });
  };


  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const response = await axios.post("https://664f8177ec9b4a4a602f06bd.mockapi.io/Users", userDetails);
      const newUser = response.data;
      setListUsers((prevUsers) => [...prevUsers, newUser]);
      alert("Usuario registrado con éxito");
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      alert("Error al registrar el usuario");
    }
  };


  return (
    <div className="container">
      <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre</label>
        <input type="text" id="name" value={userDetails.name} onChange={handleInput} />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={userDetails.email} onChange={handleInput} />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" value={userDetails.password} onChange={handleInput} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;

*/}


import React, { useState } from "react";
import "./Register.scss";
import axios from "axios";

function Register({ setListUsers }) {
  const [userDetails, setUserDetails] = useState({ name: "", email: "", password: "" });

  const handleInput = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    setUserDetails({ ...userDetails, [id]: value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post("https://664f8177ec9b4a4a602f06bd.mockapi.io/Users", userDetails);
      const newUser = response.data;
      setListUsers((prevUsers) => [...prevUsers, newUser]);
      alert("Usuario registrado con éxito");
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      alert("Error al registrar el usuario");
    }
  };

  return (
    <div className="container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" value={userDetails.name} onChange={handleInput} />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={userDetails.email} onChange={handleInput} />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" value={userDetails.password} onChange={handleInput} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
