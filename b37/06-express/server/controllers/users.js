
// Crear un arreglo de 3 usuarios.
/*
Agregar un usuario al arreglo con la funcion newUser
(hacer un push) 
*/
const dbUsers = [
  {
    id: 01,
    name: "Arturo",
    email: "arturo@mail.com",
    password: "123456"
  },
  {
    id: 02,
    name: "Yael",
    email: "yael@mail.com",
    password: "123456"
  },
  {
    id: 03,
    name: "Raul",
    email: "raul@mail.com",
    password: "123456"
}
]
/*
La funcion new user se ejecuta en main cuando 
mande a llamar el endpoint /new/user
el endpoint debe regresar como respuesta
el arreglo dbUser con 4 usuarios
los 3 anteriores y el que se creo de la funcion newUser 
*/

// exports.newUser...
const newUser = (user) => {
  console.log(user);
  dbUsers.push({...user});
  return dbUsers;
}

const updateUser = (id) => {
  // hacer una funcion que actualice el usuario del id que corresponda.
  // ej id = 3 actualizar a Raul;
}

const deleteUser = (id) => {
  // hacer una funcion que elimine el usuario del id que corresponda.
  // ej id = 1 eliminar a Arturo;
  // cuidado de no dejar espacios vacios en el array;
}

// si uso exports.algo ya no necesito el module exports
module.exports = {
  newUser
}