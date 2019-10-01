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


const imprimirMensaje = (msg) => {
    return msg
};

const ordenSuperior = (callback,mensaje) => {
    return callback(mensaje)
};

console.log(ordenSuperior(imprimirMensaje,'El mensaje'))