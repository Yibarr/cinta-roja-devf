class Pet {
  constructor(name, favoriteFood) {
    this.name = name
    this.favoriteFood = favoriteFood
  }

  eat(food = this.favoriteFood) {
    return `Acá echando un emparedado de ${food}`
  }

}


const Gunter = new Pet('Gunter', 'Sausages')






class Dog extends Pet {
  constructor(name, favoriteFood, color) {
    super(name, favoriteFood)
    this.color = color
  }

  ladrar() {
    return `Toy ladrando`
  }

}


const Milo = new Dog('Milo', 'Banana', 'black')

console.log(Milo.eat())


const feedPet = (pet, food = 'Acelgas') => {
  console.log(pet.eat(food))
}


// feedPet(Gunter)

console.log(Gunter, Milo);

console.log(typeof(Gunter))