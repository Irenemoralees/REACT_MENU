import React, { useState } from "react";
import "./Login.scss";



 function Login({ setUser, listUsers }) {
    const [userLogin, setUserLogin] = useState({})
    const handleInput = (ev) => {
        const id = ev.target.id
        setUserLogin({ ...userLogin, [id]: ev.target.value })
    }
    const handleClick = (ev) => {
        ev.preventDefault()
        const findUser = listUsers.find((User) => User.email === userLogin.email && User.password === userLogin.password)
        if (findUser) {
            setUser(findUser)
          } else {
      alert("Usuario o contraseña no encontrado");
    }
  };
        
      

  return (
<form onChange={handleInput}>
  <label htmlFor="">Email</label>
  <input type="text"id="email"/>
  <label htmlFor="">Password</label>
  <input type="password"id="password"/>
  <input type="submit"value="Iniciar sesion"onClick={handleClick}/>
  </form>
  )
}

export default Login;
