import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.scss";

function Register({ setListUsers }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://664f8177ec9b4a4a602f06bd.mockapi.io/Users", {
                username,
                email,
                password,
            });
            setListUsers(prevUsers => [...prevUsers, response.data]);
            navigate("/login");
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        
        const hasMinLength = newPassword.length >= 8;
        const hasLetters = /[a-zA-Z]/.test(newPassword);
        const hasNumbers = /\d/.test(newPassword);

        if (hasMinLength && hasLetters && hasNumbers) {
            setError(""); 
        } else {
            setError("La contraseña debe tener al menos 8 caracteres e incluir letras y números.");
        }
    };

    return (
        <div className="container">
            <form className="register-form" onSubmit={handleRegister}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
                <button type="submit">Registrate</button>
            </form>
        </div>
    );
}

export default Register;
