import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login({ setUser, listUsers }) {
  const [userLogin, setUserLogin] = useState({});
  const navigate = useNavigate();

  const handleInput = (ev) => {
    const id = ev.target.id;
    setUserLogin({ ...userLogin, [id]: ev.target.value });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    const findUser = listUsers.find(
      (User) => User.email === userLogin.email && User.password === userLogin.password
    );
    if (findUser) {
      setUser(findUser);
      navigate("/profile");
    } else {
      alert("Usuario o contraseña no encontrado");
    }
  };

  return (
    <div className="container">
<form className = "login-form"onChange={handleInput}>
  <label htmlFor="email">Email</label>
  <input type="text"id="email"/>
  <label htmlFor="password">Password</label>
  <input type="password"id="password"/>
  <input type="submit"value="Iniciar sesion"onClick={handleClick}/>
  </form>
  </div>

  )
}

export default Login;

