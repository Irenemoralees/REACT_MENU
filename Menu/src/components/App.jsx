import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./Users/NavBar/NavBar";
import Login from "./Users/Login/Login";
import AuthRoute from "./AuthRoute/AuthRoute";
import DetailsFood from "./foods/DetailsFood/DetailsFood";
import Register from "./Users/Register/Register";
import Home from "./Home/Home"


function App() {
  const [user, setUser] = useState(null);
  const [listUsers, setListUsers] = useState([]);
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [selectedDay, setSelectedDay] = useState('');


  useEffect(() => {
    axios.get("https://664f8177ec9b4a4a602f06bd.mockapi.io/Foods")
      .then(response => {
        setFoods(response.data);
        setFilteredFoods(response.data);
      });
  }, []);

  useEffect(() => {
    axios.get("https://664f8177ec9b4a4a602f06bd.mockapi.io/Users")
      .then(response => {
        setListUsers(response.data);
      });
  }, []);

  useEffect(() => {
    if (selectedDay) {
        const filtered = foods.filter(food =>
            food.day && food.day.toLowerCase() === selectedDay.toLowerCase()
        );
        setFilteredFoods(filtered);
    } else {
        setFilteredFoods(foods);
    }
}, [selectedDay, foods]);


  const addMenu = async (menu) => {
    try {
      const response = await axios.post("https://664f8177ec9b4a4a602f06bd.mockapi.io/Foods", menu);
      const newMenu = response.data;
      setFoods([...foods, newMenu]);
      setFilteredFoods([...filteredFoods, newMenu]);
    } catch (error) {
      alert("Error al añadir el menú");
    }
  };
  const deleteMenu = async (menuName) => {
    try {
    
      const response = await axios.get('https://664f8177ec9b4a4a602f06bd.mockapi.io/Foods');
      const menuToDelete = response.data.find(menu => menu.name === menuName);
  
      if (menuToDelete) {
        
        await axios.delete(`https://664f8177ec9b4a4a602f06bd.mockapi.io/Foods/${menuToDelete.id}`);
        
        
        setFoods(foods.filter(menu => menu.name !== menuName));
        setFilteredFoods(filteredFoods.filter(menu => menu.name !== menuName));
  
        alert("Menú eliminado correctamente");
      } else {
        alert("Menú no encontrado");
      }
    } catch (error) {
      console.error(error);
      alert("Error al eliminar el menú");
    }
  };
  
  
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register setListUsers={setListUsers} />} />
        <Route path="/login" element={<Login listUsers={listUsers} setUser={setUser} />} />
        <Route path="/profile" element={
          <AuthRoute 
            user={user} 
            foods={foods} 
            filteredFoods={filteredFoods} 
            selectedDay={selectedDay} 
            setSelectedDay={setSelectedDay} 
            addMenu={addMenu}
            deleteMenu={deleteMenu}
          />
        } />
        <Route path="/detail/:idFoods" element={<DetailsFood data={foods} />} />
        <Route path="*" element= {<Navigate to ="/" />} />
      </Routes>
    </div>
  );
}

export default App;





