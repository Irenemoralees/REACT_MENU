

import { Navigate } from "react-router-dom";
import Profile from "../Users/Profile/Profile"; 

function AuthRoute({ user, foods, filteredFoods, selectedDay, setSelectedDay, changeType,type, addMenu, deleteMenu }) {
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
      changeType={changeType}
      type={type}
      addMenu={addMenu}
      deleteMenu={deleteMenu}
    />
  )
}
export default AuthRoute;
