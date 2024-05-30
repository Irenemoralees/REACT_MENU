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
  const [type, setType] = useState([]);

  useEffect(() => {
    axios.get("https://664f8177ec9b4a4a602f06bd.mockapi.io/Foods")
      .then(response => {
        
        setFilteredFoods(response.data);
      });
  }, []);

  useEffect(() => {
    axios.get("https://664f8177ec9b4a4a602f06bd.mockapi.io/Users")
      .then(response => {
        setListUsers(response.data);
      });
  }, []);

  useEffect(()=> {
    if (selectedDay){
      const filtered = foods.filter(food => 
        food.day && food.day.toLowerCase() === selectedDay.toLowerCase()

      );
      setFilteredFoods(filtered);
    }else {
      setFilteredFoods(foods);
    }
  },[selectedDay,foods]);

    const filterFoods = foods.filter((food) => {
        if (type.length === 0) {
            return true;
        } else {
            return type.includes(food.type);
        }
    });

  const changeType = (value) => {
    if (type.includes(value)) {
      const types = type.filter((item) => item !== value);
      setType(types);
    } else {
      setType([...type, value]);
    }
  };

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

  const deleteMenu = async (id) => {
    try {
      await axios.delete(`https://664f8177ec9b4a4a602f06bd.mockapi.io/Foods/${id}`);
      setFoods(foods.filter(menu => menu.id !== id));
      setFilteredFoods(filteredFoods.filter(menu => menu.id !== id));
      alert("Menú eliminado correctamente");
    } catch (error) {
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
            changeType={changeType}
            type={type}
            setType={setType}
            addMenu={addMenu}
            deleteMenu={deleteMenu}
          />
        } />
        <Route path="/detail/:idFoods" element={<DetailsFood data={foods} />} />
        <Route path="*" element = {<Navigate to= "/" />} />
      </Routes>
    </div>
  );
}

export default App;
