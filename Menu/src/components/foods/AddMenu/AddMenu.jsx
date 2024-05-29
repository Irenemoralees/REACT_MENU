import React, { useState } from 'react';
import './AddMenu.scss'; // Importa tu archivo SCSS aquí

const AddMenu = ({ addMenu }) => {
  const [menuData, setMenuData] = useState({
    day: '',
    imagen: null,
    name: '',
    type: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuData({ ...menuData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setMenuData({ ...menuData, imagen: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting menu data:", menuData);
    await addMenu(menuData);
    setMenuData({
      day: '',
      imagen: null,
      name: '',
      type: '',
      description: ''
    });
  };

  console.log("AddMenu props:", addMenu);

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
          <label>Imagen:</label>
          <input
            type="file"
            name="imagen"
            accept="image/*"
            onChange={handleImageChange}
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
