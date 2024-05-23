const getDataApi = () => {
    return fetch('https://mockapi.io/clone/664f8177ec9b4a4a602f06be')
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