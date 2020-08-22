
// Filter
// 1.- A partir del siguiente arreglo de animalitos: 
const animalitos = [
{ nombre: "carlitos"  , especie: "conejo" },    // 0
{ nombre: "esteban"   , especie: "perro" },     // 1
{ nombre: "fabiruchis", especie: "tortuga" },   // 2
{ nombre: "anita"     , especie: "gato" },      // 3
{ nombre: "miranda"   , especie: "conejo" },    // 4
{ nombre: "lucas"     , especie: "conejo" },    // 5
{ nombre: "Horacia"   , especie: "tortuga" }    // 6
];
// Genera un nuevo arreglo en el que solo se encuentren
// los conejos del arreglo original.  
const conejos = animalitos.filter(animalito => animalito.especie === 'conejo')

// Map

// 2.- A partir del siguiente arreglo de mascotas:
const mascotas = [
{ nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
{ nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
{ nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
{ nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
{ nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
];

const mascotasNames = mascotas.map(mascota => mascota.nombre)
// Genera un nuevo arreglo que contenga los nombres de todas 
// las mascotas. 

console.log(conejos, mascotasNames);
