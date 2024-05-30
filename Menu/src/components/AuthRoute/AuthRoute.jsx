

import { Navigate } from "react-router-dom";
import Profile from "../Users/Profile/Profile"; 

function AuthRoute({ user, foods, filteredFoods, selectedDay, setSelectedDay, addMenu, deleteMenu }) {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Profile 
      user={user}
      foods={foods}
      filteredFoods={filteredFoods}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      addMenu={addMenu}
      deleteMenu={deleteMenu}
    />
  )
}
export default AuthRoute;
