import React, { useState } from 'react';
import './AddMenu.scss'; 

const AddMenu = ({ addMenu }) => {
  const [menuData, setMenuData] = useState({
    day: '',
    imagen: '',
    name: '',
    type: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuData({ ...menuData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    await addMenu(menuData);
    setMenuData({
      day: '',
      imagen: '',
      name: '',
      type: '',
      description: ''
    });
  };



  return (
    <div className="add-menu-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Día:</label>
          <input
            type="text"
            name="day"
            value={menuData.day}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>URL de la Imagen:</label>
          <input
            type="text"
            name="imagen"
            value={menuData.imagen}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nombre del Menú:</label>
          <input
            type="text"
            name="name"
            value={menuData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tipo:</label>
          <input
            type="text"
            name="type"
            value={menuData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={menuData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Añadir Menú</button>
      </form>
    </div>
  );
};

export default AddMenu;
