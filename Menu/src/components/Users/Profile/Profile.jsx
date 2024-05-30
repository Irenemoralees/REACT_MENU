import React from 'react';
import FilterbyType from "../../filters/FilterbyType/FilterbyType";
import FilterbyDay from "../../filters/FilterbyDay/FilterbyDay";
import Food from "../../foods/Food/Food";
import AddMenu from "../../foods/AddMenu/AddMenu";
import DeleteMenu from "../../foods/DeleteMenu/DeleteMenu";
import "./Profile.scss";

function Profile({ user, filteredFoods, selectedDay, setSelectedDay, changeType, addMenu, deleteMenu }) {
  return (
    <div className="profile-container">
      <h2 className="profile-header">Bienvenido {user.name} y buen provecho 😋🍽️</h2>
      <div className="profile-content">
        <section className="filter-container">
          <FilterbyDay selectedDay={selectedDay} setSelectedDay={setSelectedDay} filteredFoods={filteredFoods} />
          <FilterbyType changeType={changeType} />
        </section>
      </div>
      <Food data={filteredFoods} />
      <AddMenu addMenu={addMenu} />
      <DeleteMenu deleteMenu={deleteMenu}/>
    </div>
  );
}

export default Profile;

