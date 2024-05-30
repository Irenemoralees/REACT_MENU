

import React from 'react';
import "./filterByDay.scss"

const FilterbyDay = ({ filteredFoods, selectedDay, setSelectedDay }) => {
  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  return (
    <div className="filter-by-day">
      <select className="day-select" onChange={handleDayChange} value={selectedDay}>
        <option className='optionStyle' value="">Selecciona un día</option>
        <option className='optionStyle' value="lunes">Lunes</option>
        <option className='optionStyle' value="martes">Martes</option>
        <option className='optionStyle' value="miércoles">Miércoles</option>
        <option className='optionStyle' value="jueves">Jueves</option>
        <option className='optionStyle' value="viernes">Viernes</option>
        <option className='optionStyle' value="sábado">Sábado</option>
        <option className='optionStyle' value="domingo">Domingo</option>
      </select>
      
     <section >
      <div className='div'>
      <ul className="food-list">
        {filteredFoods.map(food => (
          <li key={food.id} className="food-item">
            <div className="food-details">
              <h3 className="food-name">{food.name}</h3>
              <p className="food-description">{food.description}</p>
              <p className="food-type">{food.type}</p>
            </div>
            <img className="food-image" src={food.imagen} alt="" />
          </li>
        ))}
      </ul>
      </div>
      </section>
    </div>
  );
};

export default FilterbyDay;
