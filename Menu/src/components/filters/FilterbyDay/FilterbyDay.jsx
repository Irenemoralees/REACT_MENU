import React from 'react';

const FoodList = ({ foods, filteredFoods, selectedDay, setSelectedDay }) => {
  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  return (
    <div>
      <select onChange={handleDayChange} value={selectedDay}>
        <option value="">Selecciona un día</option>
        <option value="lunes">Lunes</option>
        <option value="martes">Martes</option>
        <option value="miércoles">Miércoles</option>
        <option value="jueves">Jueves</option>
        <option value="viernes">Viernes</option>
        <option value="sábado">Sábado</option>
        <option value="domingo">Domingo</option>
      </select>

      <ul>
        {filteredFoods.map(food => (
          <li key={food.id}>
            <h3>{food.nombre}</h3>
            <p>Tipo: {food.tipo}</p>
            <p>{food.descripción}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;



