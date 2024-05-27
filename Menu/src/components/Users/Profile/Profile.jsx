import React from "react";
import FoodList from "../../filters/FilterbyDay/FilterbyDay";

const Profile = ({ user, foods, filteredFoods, selectedDay, setSelectedDay }) => {
  if (!user) {
    return <h2>Por favor, inicia sesión</h2>;
  }

  return (
    <div>
      <h2>Bienvenido, {user.name}</h2>
      <FoodList
        foods={foods}
        filteredFoods={filteredFoods}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
    </div>
  );
};

export default Profile;

