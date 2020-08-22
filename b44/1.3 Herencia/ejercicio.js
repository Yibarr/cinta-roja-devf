//Largometraje.js
class Largometraje {
  constructor(title, duration) {
    this.title = title
    this.duration = duration
  }

  play() {
    return `Reproduciendo ${this.title} durante ${this.duration} minutos.`
  }
}

//Movie.js
class Movie extends Largometraje {
  constructor(title, duration, genre) {
    super(title, duration)
    this.genre = genre
  }
}

//Documentary.js
class Documentary extends Largometraje{
  constructor(title, duration, subject) {
    super(title, duration)
    this.subject = subject
  }
}



//MovieTheater.js
class MovieTheater {
  constructor(location) {
    this.location =  location
  }

  playFeatureFilm(featureFilm) {
    const filmMsg = featureFilm.play()
    return `${filmMsg} En el cine ubicado en ${this.location}`
 }

}

//index
const Joker = new Movie('Joker', 180, 'Thriller')
const Earth = new Documentary('Earth', 50, 'Nature')

console.log(Earth);

const Cinemex = new MovieTheater('CDMX')


console.log(Cinemex.playFeatureFilm(Earth))




// const sum = (a, b) => a + b


// sum(1, 2)


// const perro = {
//   come() {
//     return 'comiendo...'
//   }
// }

// const gato = {
//   maulla() {
//     return 'maullando...'
//   }
// }


// const feedDog = (obj) => {
//   return obj.come()
// }

// feedDog(gato)


const suma = (a, b) => a + b


const operation = (callback, a, b) => {
  return callback(a,b)
}

operation(suma, 1, 3)