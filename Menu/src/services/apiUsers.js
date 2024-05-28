

const getDataApiUsers = () => {
    return fetch ("https://664f8177ec9b4a4a602f06bd.mockapi.io/Users")
    .then((response) => response.json())
    .then((data) => {
    const dataApiUsers = data.map ((item) => {
        return {
            nombre: item.name,
            email: item.email,
            contraseña: item.password,
            rol: item.role,
            id: item.id
        }
    });
    return dataApiUsers
});
};

export default getDataApiUsers;
