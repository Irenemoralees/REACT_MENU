const getDataApi = () => {
    return fetch('https://664f8177ec9b4a4a602f06bd.mockapi.io/Foods')
      .then((response) => response.json())
      .then((data) => {
        const dataApi = data.map((item) => {
          return {
            imagen: item.imagen,
            día: item.day,
            nombre: item.name,
            tipo: item.type,
            descripción: item.description,
            id: item.id
          };
        });
        return dataApi;
      });
  };

  const deleteDataByName = async (name) => {
    try {
    
      const data = await getDataApi();
      const itemToDelete = data.find((item) => item.nombre === name);
  
      if (itemToDelete && itemToDelete.id) {
        console.log(`Eliminando elemento con id: ${itemToDelete.id}`);
        
        
        const response = await fetch(`https://664f8177ec9b4a4a602f06bd.mockapi.io/Foods/${itemToDelete.id}`, {
          method: 'DELETE'
        });
  
        if (!response.ok) {
          throw new Error('Error al eliminar el elemento');
        }
  
        const deletedData = await response.json();
        console.log('Elemento eliminado:', deletedData);
        return deletedData;
      } else {
        console.log('Elemento no encontrado con el nombre especificado');
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  export { getDataApi, deleteDataByName };
  
  
