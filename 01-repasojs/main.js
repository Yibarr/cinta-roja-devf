'use strict'

var variableUno = 13;
let variable_dos = 'perro'
const variableTres = true;

let conejo = 'conejo';


// console.log(variable_dos !== 'perro' ? 'es un perro' : '  no es un perro');

// if(variable_dos === 'perro')
// console.log('hola, voy después del if');

// console.log(15 + 14)
// console.log(14 - 15)
// console.log(15 / 3);
// console.log(4 * 4)


// let  numero1 = 15;
// numero1 = numero1 + 15;
// numero1 += 15

// numero ++
// numero ++
// numero --
// numero --

// let edad = 15

// if(edad <= 18 ){
//     console.log('es menor de edad')
// }else{
//     console.log('es mayor de edad')
// }

// let numero2 = undefined

// let numero1 = undefined

// let incognita = numero1 || numero2

// console.log( incognita)


// let edad = 17;
 
// let ine = true;

// if(edad <= 18 && ine ){
//     console.log('puedes pasar')
// }else if(edad >= 18 || ine ){
//     console.log('puedes pasar')
// }else{
//     console.log('no puedes pasar')
// }


// for(let counter = 0; counter < 10; counter ++ ){
//     console.log(counter)
// }

// console.log('después del for')


//Fizz 3    Buzz 5


// for(let i = 1;  i <= 100; i++){
//     if(i% 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz ')
//     }else if(i % 3 === 0){
//         console.log('Fizz '+i)
//     }else if (i % 5 === 0){
//         console.log('BUzz '+i)
//     }else{
//         console.log(i)
//     }
// }


// let array = [0, 'numero', true, [1,2,3]];
//array.length
// console.log(array[2])

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
    
// }

// let array1 = [['oso','oso','oso'],['ṕerro','ṕerro','ṕerro','ṕerro'],['gato','gato','gato','gato','gato']]

// for (let i = 0; i < array1.length; i++) {
//     for(let j = 0; j < array1[i].length; j++){
//         console.log(array1[i][j])
//     }

// }


function Hola(){

    var numero3 = 3, numero2  = 2; 


    return numero3 * numero2;
    console.log(numero3)
}

let numeroA = 10

const funcion1 = function(numeroA = 2,numeroB){
    return numeroA + numeroB
}

// console.log(funcion1(undefined,3))

// console.log(Hola() + 7);
 

const hola2 = (numeroA,numeroB) => {
     return numeroB - numeroA
}

console.log(hola2(1,2))