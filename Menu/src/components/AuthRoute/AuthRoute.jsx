

import { Navigate } from "react-router-dom";
import Profile from "../Users/Profile/Profile"; // Asegúrate de importar Profile

function AuthRoute({ user, foods, filteredFoods, selectedDay, setSelectedDay, changeType,type, setType }) {
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
    />
  );
}

export default AuthRoute;
