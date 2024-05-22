# React + Vite

Planificación de un menú semanal.
 En la página web podremos introducir los datos de 2 comidas por día para una semana entera, con unos filtros (nombre ,tipo y día). Para ello vamos a utilizar un listado de 14 platos utilizando la web https://mockapi.io/ para que nos devuelva un archivo de API demo.
 Nuestra web será privada,  solo podrá ser utilizada por usuarios registrados.

 ## Lista de tareas

 - Instalar dependencias: react-router-dom, sass.
 - Definir componentes: ListFoods, Food, FilterbyName, FilterbyType, FilterbyDay, DetailsFood.
 - Variables de Estado: foods -> [], name ->"", type -> [], day -> ""
 - Pintar Food (recorrer el array de ListFoods, coger la información necesaria y enviarla por props )
 - Pedir los datos de la API, cuando carga la página.
 - Pintar las comidas (recorrer el array )
 - Filtrar por nombre (select) -> obtener las comidas de la semana.
 - Filtrar por tipo (checkbox) -> Lista de almuerzos o cenas.
 - Filtrar por día (select) -> obtener los dias de la semana.
 - Detalles: Al clicar en una comida usando las rutas nos mostraría los detalles de cada comida, react-router-dom.
 - Registro.
-  Login.