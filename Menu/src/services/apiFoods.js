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

  export default getDataApi;