// const text = "Este es un texto guardado en la constante texto"
// var number = 9807
// let boolean = true

// let variable2 = number

// let arr1 = [1,2,3,4,5]


//Operadores Lógicos
// console.log( "1" === "1" );
// console.log("1" !== "1");



// console.log( "1" <= "1" );
// console.log( "1" >= "1" );
// console.log( "1" < "1" );
// console.log("1" > "1");

// let var2 = 200
// let var3 = 500

// console.log(var1 === var2 && var2 > var3) //ampersand
// console.log(var1 === var1 || var2 > var3) //pipe

// console.log((var1 === var1 && var3 > var2) || (var1 === var2 && var2 > var3))

// let saludo = prompt('Ingresa un saludo')

// const customMsg = saludo || 'Saludo por defecto'

// console.log(customMsg);

// let var1 = 100
// let var2 = 200

// console.log(var1 + var2)
// var1 = var1 + var2
// var1 += var2
// i = 0
// i += 1
// i += 1
// i += 1


// console.log(var1);

// let var1 = 2
// var1 *= 2
// var1 /= 4
// console.log(var1);


// let i = 0
// i++
// i++
// i++
// i++





// console.log(animals);
// animals.push(
//   {
//     name: 'Misha2',
//     age: 1,
//     favoriteFood: 'Banana'
//   }
// )

// console.log(animals);

// const emptyObj = {}

// emptyObj.age = 23

// console.log(emptyObj);

// let animals = [
//   {
//     name: 'Gunter',
//     age: 7,
//     favoriteFood: 'Sausages'
//   },
//   {
//     name: 'Robin',
//     age: 4,
//     favoriteFood: 'Fishes'
//   },
//   {
//     name: 'Misha',
//     age: 3,
//     favoriteFood: 'Banana'
//   },
//   {
//     name: 'Misha',
//     age: 3,
//     favoriteFood: 'Banana'
//   }
// ]


// const mappedAnimals = animals.map(animal => {
//   if (animal.age > 3) {
//     return animal
//   } else {
//     return 'hola'
//   }
// })

// const mayorTres = animals.map( animal => animal.age > 3)

// console.log(mayorTres);

// console.log(typeof animals);


// const obj1 = {
//   name: 'Gunter',
//   age: 1,
//   favoriteFood: 'Sausages'
// }


// console.log(obj1["name"])
// console.log(obj1.name)


// const arr2 = {
//   "0": {
//         name: 'Gunter',
//         age: 1,
//         favoriteFood: 'Sausages'
//   },
//   "1" :{
//         name: 'Robin',
//         age: 1,
//         favoriteFood: 'Fishes'
//       },
// }


// console.log(animals.length);


// if () {
  
// } else if (){  
// } else {

// }

//spread operator
// function fun1(parametro1 , parametro2, parametro3) {
//   console.log(parametro2);
// }
// const fun2 = function (parametro1 , parametro2, parametro3) {
//   console.log(parametro2);
// }

// const saludar = (parametro1) => {
//   parametro1 = 'Adios'
//   return parametro1
// }


// console.log(saludar('hola'))

// const saludar = (parametro1 = 'Saludo default') => {
//   return parametro1
// }

// console.log(saludar('hola'))

const perro = {
  name: 'Gunter',
  age: 1,
  favoriteFood: 'Sausages',
  fetch() {
    console.log('Traje la bola');
  }
}
// const perro2 = {
//   name: 'Gunter',
//   age: 1,
//   favoriteFood: 'Sausages',
//   fetch() {
//     console.log('Traje la bola');
//   }
// }

// const perro = 'perro'

perro.length = 2

console.log(perro.length);