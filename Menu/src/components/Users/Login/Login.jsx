import React, { useState } from "react";

const Login = ({ listUsers, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Si necesitas manejar contraseña

  const handleLogin = () => {
    const user = listUsers.find((user) => user.email === email);
    if (user) {
      setUser(user); // Autenticar usuario
    } else {
      alert("Usuario no encontrado");
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
