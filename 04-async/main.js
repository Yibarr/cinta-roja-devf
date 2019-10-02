/// ejemplo 1
// console.log(1);
// console.log(2);
// console.log(3);

////ejemplo 3

// console.log(1);

// setTimeout(()=>{
//     console.log(2)
// },3000);

// console.log(3)

///ejemplo 3

// console.log(1);

// setTimeout(()=>{
//     console.log(2);
// },3000);

// for(let i = 0; i<=99999999;i++){
//     console.log(i)
// };
// console.log(4);

// var mensaje = function(msg){
//     console.log(msg)
// };

// var ordenSuperior= function (parametroQueEsUnaFuncion,msg){
//   z

// ordenSuperior(mensaje,'Hola Shavos')

// const ImprimeNumero = (numero) => {
//     return numero()
// };

// console.log(ImprimeNumero( ()=>'hola' ))


// const suma = ( y , x ) => {
//     return y + x;
// };

// const mult = ( y , x ) => {
//     return y * x;
// };


// const ordenSuperior = (operacion, numero1, numero2) => {
//     return operacion( numero1 , numero2)
// };


// console.log(ordenSuperior( suma , 1 , 2 ))


// ordenSuperior(ImprimirMensaje,'Hola')

// const mensaje(nombre) => {
//     return `hola ${nombre}`;
// }

// console.log(mensaje,Pedro);


// const imprimirMensaje = (msg) => {
//     return msg
// };

// const ordenSuperior = (callback,mensaje) => {
//     return callback(mensaje)
// };

// ordenSuperior(imprimirMensaje,'El mensaje')



// const esMayorDosHoras = (horas) => {
//     horas.forEach(minutos => {
//         if(minutos >= 120){
//             console.log(minutos);
//         };
//     });
    
// };

// const ordenSuperior = (...horas) => {
//     return esMayorDosHoras(horas);
// };

// console.log(ordenSuperior(120,140,160,90,60,40,120,130));


// const palindromo = "Anita lava la  tina";

// const palindromoValidator = (palabra) => {
//     const palabraProcesda = palabra.replace(/\s/g,'').toLowerCase()

//     const reversePalabra = palabraProcesda.split("").reverse().join().replace(/,/g,'')

//     if(reversePalabra === palabraProcesda){
//         return `La frase o palabra ${palabra} es palíndromo`
//     }else{
//         return `La frase o palabra '${palabra}' NO es palíndromo`
//     }
// };

// console.log(palindromoValidator(palindromo))
// const arr = [9,8,7,9,8,6,7,8,9,10,124321,12341235]

// const promediar = (calificaciones) => {
    
// };

// const medianar = (calificaciones) => {
//     const sortedCalificaciones = calificaciones.sort((a,b) => {
//         return a - b
//     })
//     const largo = sortedCalificaciones.length

//     const mitadLargo = Math.floor(largo/2)

//     if(largo % 2 === 0){
//         const mitad1 = sortedCalificaciones[mitadLargo];

//         const mitad2 = sortedCalificaciones[mitadLargo - 1]

//         return (mitad1 + mitad2)/2

//     }else{
//         return sortedCalificaciones[mitadLargo]
//     }
// };

// const ordenSuperior = (calificaciones,operacion) => {
//     return operacion(calificaciones)
// };

// console.log(ordenSuperior(arr,medianar))

let califMate = null 


const juegoPrometido = new Promise((resolve,reject)=>{
    if(califMate  !== null){
        resolve('Toma tu juego, bebito')
    }else{
        reject('Hijole, joven, pruebe en el siguiente parcial')
    }

});


juegoPrometido
    .then(response => {    console.log(response)})
    .catch(error => {    console.log(error)})