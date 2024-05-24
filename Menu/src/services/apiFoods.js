const getDataApi = () => {
    return fetch('https://664f8177ec9b4a4a602f06bd.mockapi.io/Foods')
      .then((response) => response.json())
      .then((data) => {
        const dataApi = data.map((item) => {
          return {
            day: item.day,
            name: item.name,
            type: item.type,
            description: item.description,
            id: item.id
          };
        });
        return dataApi;
      });
  };

  export default getDataApi;