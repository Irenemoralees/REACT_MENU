import { useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import getDataApiUsers from "../services/apiUsers";
import getDataApi from "../services/apiFoods";
import Login from "./Users/Login/Login";
import NavBar from "./Users/NavBar/NavBar";
import AuthRoute from "./AuthRoute/AuthRoute";
import Profile from "./Users/Profile/Profile";

function App() {
  const [foods, setFoods] = useState ([]);
  const [name, setName] = useState ("");
  const [type, setType] = useState ([]);
  const [day, setDay] = useState ("");
  const [users, setUsers] = useState ([]);
  const [listUsers, setListUsers] = useState ([]);

  useEffect(() => {
    getDataApi().then((dataApi) => {
      setFoods(dataApi)
    })
  }, [])

  useEffect(() => {
    getDataApiUsers().then((dataApiUsers) => {
setListUsers (dataApiUsers)
    })
  }, [])
  
  return (
    <div>
    <NavBar />

    <Routes>
      <Route path="/" element={<h2>Home</h2>} />
      <Route path="/login" element={<Login listUsers={listUsers} setUser={setUsers} />} />
      <Route path="/profile" element={
        <AuthRoute user={users} component={<Profile />} />} />
    </Routes>


  </div>
  )
}

export default App
