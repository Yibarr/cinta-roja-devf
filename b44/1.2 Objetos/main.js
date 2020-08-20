// class LivingPlace {

//   constructor(floors, bathrooms, rooms) {
//     this.floors = floors
//     this.bathrooms = bathrooms
//     this.rooms = rooms
//   }

//   autoDestruir() {
//     this.floors = 0
//     this.bathrooms = 0
//     this.rooms = 0
//   }

//   setNewFloor() {
//     this.floors +=1
//   }

//   getFloors() {
//     return this.floors
//   }

// }

// const casa = new LivingPlace(2, 2, 2)

// casa.floors 


// console.log(casa.getFloors());


// class BankAccount {
//   constructor() {
//     this.balance = 0
//   }

//   addFunds(money) {
//     this.balance =+ money
//   }

//   getFunds

//   transferFunds

//   getOutCash


// }

const perro = {
  name: 'Gunter',
  age: 1.5,
  come() {
    this.name
    perro.name
    return 'Estoy comiendo'
  }
}

perro.pelo = 'negro' 



// class Perro {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   come() {
//     return 'Estoy comiendo'
//   }
// }

// const Gunter = new Perro('Gunter', 1.5)
// const Milo = new Perro('Milo', 6)

// console.log(Gunter.come());


// const toMayus = (palabra) => {
//   return palabra.toUpperCase()
// }

// const nombreUsarioMayus = toMayus('Hola')





// class BankAccount {
//     constructor(name, initialAmount) {
//         this.userName = name
//         this.balance = initialAmount
//     }
//     // Get,  Set
//     getUserName(){
//       return this.userName
//     }
//     getBalance(){
//       console.log(`Your total amount is $ ${this.balance}.`)
//     }
//     //Operations
//     increaseBalance(amount){
//         this.balance += amount
//         console.log(this.balance)
//     }
//     makeTransfer(amount, userAccount){
//         const validation = this.helperBalance(amount)
//         if (validation) {
//           this.balance -= amount
//             const userName = userAccount.getUserName()
//             userAccount.increaseBalance(amount)
//             return `You now have $ ${this.balance}. Due to a deposit to ${userName}.`
//         } else {
//             return `You haven't enough resources.`
//         }
//     }
//     buy(concept, price){
//       const validation = this.helperBalance(price)
//       if (validation) {
//         this.balance -= price
//         return `You now have $ ${this.balance}. Due to a purchase of ${concept}.`
//       } else {
//         return `You have not enough money to continue with the operation.`
//       }
//     }
//     //Helper
//     helperBalance(amount){
//         if (this.balance < amount) {
//             return false
//         } else {
//             return true
//         }
//     }
// }


// const GunterBankAccount = new BankAccount('Gunter', 4005)

// const MiloBankAccount = new BankAccount('Milo', 5)



//11.
class Human {
  constructor(name, lastName, maidenName, birthdate, age, gender, weight, height) {
    this.name = name;
    this.lastName = lastName
    this.maidenName = maidenName
    this.birthdate = birthdate
    this.age = age
    this.gender = gender
    this.weight = weight
    this.height = height
    this.RFC = ""
  }
  validateAge() {
    const ageValidation = this.edad >= 18
    const userName = this.name
    if (ageValidation) {
      return `Eres mayor de edad ${userName}`
    } else {
      return `No eres mayor de edad ${userName}, eres chavito.`
    }
  }

  setName(newName) {
    this.name = newName
  }
  getName() {
    console.log(this.name);
    return this.name
  }

  createRFC() {
    const lastNameFirst2 = this.vowelSlice(this.lastName, 2)
    const maidenNameFisrtLetter = this.maidenName[0]
    const nameFisrtLetter= this.name[0]
    const birthdateArray = this.birthdate.split("/")
    console.log(birthdateArray);
    this.RFC += (lastNameFirst2 + maidenNameFisrtLetter + nameFisrtLetter + birthdateArray[0] + birthdateArray[1] + birthdateArray[2]).toUpperCase()

    return this.RFC
  }

  //Takes the first two bowels in the given string
  vowelSlice(nameString, sliceLimit) {
    const upperString = nameString.toUpperCase()
    let payload = ''
    for (let i = 0; i < nameString.length ; i++) {
      if (
        upperString[i] === 'A' ||
        upperString[i] === 'E' ||
        upperString[i] === 'I' ||
        upperString[i] === 'O' ||
        upperString[i] === 'U'
      ) {
        payload += nameString[i]
      }
    }
    return payload.slice(0, sliceLimit)
  }

  getIMC() {
    this.weight / this.height
  }
}

const Human1 = new Human('Yael', 'Ibarra', 'Garduño', '1997/07/03' ,23, 'M', 70, 1.80)

Human1.getName()

console.log(Human1.createRFC(), Human1)

// console.log(MayorEdad.esMayorDeEdad(28, 'Angel'));


// const userName = 'Yael'
// const batch = 44

//Template strings
// console.log(
//   `${userName} Está impartiendo el batch ${batch + 400}. Qué divertido!`,
//   userName + ' Está impartiendo el batch ' + batch + '. Qué divertido!'
// )

// let nombreSeparado = nombre.split(" ")
// let cadena = ""
// if( nombreSeparado.length == 3){         
//     cadena = nombreSeparado[1].slice(0,2) + nombreSeparado[2][0] + nombreSeparado[0].slice(0,2) + (2020-edad) + sexo;
// }
// else if(nombreSeparado.length == 4 ){
//     cadena = nombreSeparado[2].slice(0,2) + nombreSeparado[3][0] + nombreSeparado[0].slice(0,2) + (2020-edad) + sexo;
// }
// else{
//     return null
// }
// this.RFC = cadena.toUpperCase();