

const getDataApiUsers = () => {
    return fetch ("https://664f8177ec9b4a4a602f06bd.mockapi.io/Users")
    .then((response) => response.json())
    .then((data) => {
    const dataApiUsers = data.map ((user) => {
        return {
            nombre: user.name,
            email: user.email,
            contraseña: user.password,
            rol: user.role,
            id: user.id
        }
    });
    return dataApiUsers
});
};

export default getDataApiUsers;
