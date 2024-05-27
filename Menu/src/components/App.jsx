import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import getDataApiUsers from "../services/apiUsers";
import apiFoods from "../services/apiFoods"; // Asegúrate de que la ruta sea correcta
import NavBar from "./Users/NavBar/NavBar";
import Login from "./Users/Login/Login";
import AuthRoute from "./AuthRoute/AuthRoute";
import Profile from "./Users/Profile/Profile";
import axios from "axios";
import DetailsFood from "./foods/DetailsFood/DetailsFood";


function App() {
  const [user, setUser] = useState(null); // Cambiamos 'users' a 'user' para manejar un solo usuario autenticado
  const [listUsers, setListUsers] = useState([]);
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [selectedDay, setSelectedDay] = useState('');

  useEffect(() => {
    axios.get("https://664f8177ec9b4a4a602f06bd.mockapi.io/Users")
    .then(response => {setListUsers(response.data)
    })
  }, [])


  useEffect(() =>{

    apiFoods().then((data) => {
      console.log("Alimentos:", data); // Depuración
      setFoods(data);
      setFilteredFoods(data); // Inicialmente mostrar todos los alimentos
    });
  }, []);

  useEffect(() => {
    console.log("Día seleccionado:", selectedDay); // Depuración
    if (selectedDay) {
      const filtered = foods.filter(food => food.día.toLowerCase() === selectedDay.toLowerCase());
      setFilteredFoods(filtered);
    } else {
      setFilteredFoods(foods); // Mostrar todos los alimentos si no hay día seleccionado
    }
    console.log("Alimentos filtrados:", filteredFoods); // Depuración
  }, [selectedDay, foods]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/login" element={<Login listUsers={listUsers} setUser={setUser} />} />
        <Route path="/profile" element={
          <AuthRoute 
            user={user} 
            component={
              <Profile 
                user={user} 
                foods={foods} 
                filteredFoods={filteredFoods} 
                selectedDay={selectedDay} 
                setSelectedDay={setSelectedDay} 
              />
            } 
          />
        } />
      </Routes>
    </div>
  );
}

export default App;




