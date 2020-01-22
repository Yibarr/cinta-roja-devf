//Tipos de variables.
var variable = "variable"; //Alcance (scope) global, mala práctica.
let variableLocal = "variable local"; //Alcance local.
const constante = "Variable constante"; //Variable a la que no se puede volver asignar algún valor.

//Tipo de datos principales:
const cadena = "string";
const numero =   101.5; //Javascript no hace la diferencia estricta entre enteros y decimales.
const booleano = true;

//Operadores lógicos.
console.log( 1 == "1") //true
console.log( 1 === "1") //false
console.log( 1 != "1") //false
console.log( 1 !== "1") //true

console.log(1 < 1) //false
console.log(2 > 1) //true
console.log(1 <= 1) //true
console.log(2 >= 1) // true

console.log(2 > 1 && 1 !== "1")// true (and)
console.log(2 > 1 || 1 === "1") //true (or)

console.log(true ? "Es true" : "No es true") //Operador ternario

console.log(2 > 1 || (1 === "1" && 1 !== "1")) // true con jerarquización de operadores


let numero_1 = 1, numero_2 = 2;

numero_1 + numero_2; //suma

numero_1 - numero_2; //resta

numero_1 * numero_2; //multiplicación

numero_1 / numero_2; // división

numero_1 % numero_2; // módulo (realiza la operación de la división pero regresará el residuo de dicha operación)


//sinónimos

let numero_x = 0;

numero_x = numero_x + 1;

numero_x += 1;

numero_x ++


//Estgructuras de datos

const array = []; //con corchetes para inicializar arreglo;

const array_2 = [1, 2, 3, 4];

array_2[2] //posición dos del arreglo, sería: 3

const obj = {};// inicializar objeto con llaves

const obj_1 = {
    //llave : valor
    name: "Mario",
    last_name: "Bros"
}

obj_1.name //Mario, para ingresar a una propiedad del objeto
obj_1["name"] //acceder a un objeto dinámicamente

//Iterar un arreglo con un ciclo for.
for (let index = 0; index < array_2.length; index++) {
    const element = array_2[index];
    console.log(element)
}

//  dónde empieza; donde termina; de cuánto en cuánto avanza
for (let i = 0   ; i < 10       ; i++                      ) ;


if(true){
    "si es true se hace el código de acá"
} else if (true) {
    "si la primera no se cumple y aparte se cumple la condición de este if"
} else {
    "si es default y no cumple ninguna condición"
}

//Funciones
function clasica(){
   return "hola" // una función siempre tendrá el valor de su return
}

const funcionAnonima = function (mensaje){//parámetros, variables dinámicas con alcance exclusivo dentro de la función.
    return mensaje
}

funcionAnonima('Hola');

                //más de un parámetro
const flecha = (x, y) => {
    let z = y * x;//más de una operación por función
    return z + x;
}

const double = x => x * 2 // si sólo hay un parámetro y sólo regresa una cosa, puede acortarse en esta sintáxis;




