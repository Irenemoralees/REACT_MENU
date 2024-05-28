
import FilterbyType from "../../filters/FilterbyType/FilterbyType";
import FilterbyDay from "../../filters/FilterbyDay/FilterbyDay";
import Food from "../../foods/Food/Food";
import "./Profile.scss"

function Profile({ user, foods, filteredFoods, selectedDay, setSelectedDay, changeType }) {

return (
<div className="profile-container">
  <h2 className="profile-header">Bienvenido, {user.name}</h2>
  <div className="profile-content">
    <div className="filter-container">
      <FilterbyDay selectedDay={selectedDay} setSelectedDay={setSelectedDay} filteredFoods={filteredFoods}/>
    </div>
    <div className="filter-container">
      <FilterbyType changeType={changeType} />
    </div>
  </div>
  <Food data={filteredFoods} />
</div>
)
}


export default Profile;
