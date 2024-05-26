import { useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import getDataApiUsers from "../services/apiUsers";
import getDataApi from "../services/apiFoods";
import Login from "./Users/Login/Login";
import NavBar from "./Users/NavBar/NavBar";
import AuthRoute from "./AuthRoute/AuthRoute";
import Profile from "./Users/Profile/Profile";
import axios from "axios";
import DetailsFood from "./foods/DetailsFood/DetailsFood";


function App() {
  const [foods, setFoods] = useState ([]);
  const [name, setName] = useState ("all");
  const [type, setType] = useState ([]);
  const [day, setDay] = useState ("");
  const [user, setUser] = useState (null);
  const [listUsers, setListUsers] = useState ([]);

  useEffect(() => {
    getDataApi().then((dataApi) => {
      setFoods(dataApi)
    })
  }, [])

  useEffect(() => {
    axios.get("https://664f8177ec9b4a4a602f06bd.mockapi.io/Users")
      .then(response => {
        setListUsers(response.data)
      })
  }, [])
  
  return (
    <div>
    <NavBar />
    

    <Routes>
      <Route path="/" element={<h2>Home</h2>} />
      <Route path="/login" element={<Login listUsers={listUsers} setUser={setUser} />} />
      <Route path="/profile" element={
        <AuthRoute user={user}  foods={<Profile data={foods} />} />} />
            <Route path="/detail/:idFoods" element={<DetailsFood data={foods} />} />
     
    </Routes>


  </div>
  )
}

export default App
