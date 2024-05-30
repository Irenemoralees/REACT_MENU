import React, { useState } from 'react';
import './DeleteMenu.scss'; 


const DeleteMenu = ({ deleteMenu }) => {
  const [menuName, setMenuName] = useState('');

  const handleChange = (e) => {
    setMenuName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await deleteMenu(menuName);
    setMenuName('');
  };



  return (
    <div className="delete-menu-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Menú:</label>
          <input
            type="text" placeholder='Nombre del menú'
            value={menuName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Eliminar Menú</button>
      </form>
    </div>
  );
};

export default DeleteMenu;
