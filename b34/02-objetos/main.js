const perro = {
    nombre: 'Firulais',
    edad: 5,
    comer:(comida)=>{
       return `Èl ${3 + 2} perro come ${'string'}`
    },
    habla:function(){
        console.log(this)
        // return `soy un perro que habla y mi nombre s ${this.nombre}`
    },
    pruebaThis: ()=>{
        console.log(this)
    }
}
perro.nombre = 'Xolo'
perro.nombre.length = 2

// console.log('texto cualquiera'.toUpperCase())


const array = [1,2,3,4,545]
// console.log(array)
// array.push('pepe')
// console.log(typeof array)

// console.log(perro['edad'],perro.edad)

perro.raza = 'Chihuahua'

// console.log(perro.raza)


class Gato{

    constructor(raza,vidas,nombre){
        
        this.raza = raza;
        this.vidas = vidas;
        this.nombre = nombre;
    }

    volar(){
        return 'Estoy volando weeee'
    }

    habla(){
        onsole.log(hola)
        this.nombre = 'Batman'
        return `mi nombre es ${this.nombre}`
    }

}

const Michi = new Gato('Sagrado de birmania', 7, 'Michi')

const Robin = new Gato('Egipcio',3,'Robin')

// console.log(Michi.habla(),Robin.habla())


class Cuenta {
    constructor(nombre,dinero){
        this.titular = nombre
        this.saldo = dinero
    }

    ingresar(dinero){
        if(this.saldo + dinero > 900){
            return 'Límite de saldo de la cuenta'
        }else{
            this.saldo += dinero;
            return `Saldo actual es de ${this.saldo}`
        }
    }

    retirar(dinero){
        if(this.saldo - dinero < 0){
            return 'Fondos insuficientes'
        }else{
            this.saldo -= dinero;
            return `Tu saldo es ahora de ${this.saldo}`
        }
    }

};

const eduardo = new Cuenta('Eduardo',700);

eduardo.ingresar(200)

// console.log(eduardo.saldo)

eduardo.retirar(100)
eduardo.retirar(800)
eduardo.retirar(600)
// console.log(eduardo.saldo)



// console.log(new Cuenta('Eduardo',700));

const evaluateLetter = (letter) => {
    console.log(letter === 'a'||'e'||'i'||'o'||'u')
    if(letter.toLowerCase() === 'a'||letter.toLowerCase() === 'e'|| letter.toLowerCase() ===  'i'||letter.toLowerCase() === 'o'|| letter.toLowerCase() === 'u'){
        return 'Vocal'
    }else{
        return "Consonante"
    }
};

evaluateLetter('N')