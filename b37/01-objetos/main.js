// const perro = {
//     nombre: "Milaneso",
//     raza: "Labradorcito",
//     comer: () => 'toy comiendo, Karen',
//     correr(){
//         return 'Toy corriendo'
//     },
//     setNombre(){
//         return this.nombre = "Firulais"
//     },
//     getNombre(contraseña){
//         if(contraseña === "123"){
//             return this.nombre;
//         }else{
//             return "Sin autorización"
//         }
//     },
//     setKey(key, value){
//         this[key] = value
//     }
// };

// console.log(perro.setKey("tamaño","mediano"))

// console.log(perro)


// console.log(perro.setNombre());


// console.log(perro.getNombre('123'));
// console.log(perro.nombre);

// console.log(perro['nombre']);

// console.log(perro.comer())

// console.log(perro.correr())




// class Gadget {
//     constructor(brand, consumoEnergia, cargador, serie){
//         this.marca = brand;
//         this.consumo = consumoEnergia;
//         this.cargador = cargador;
//         this.serie = serie;
//     }

//     getNombre(){
//         return this.marca;
//     }


// }

// const smartphone = new Gadget("Sony","120Watts","type c", "dsbjband32124132oitrq");

// const Miwatch = new Gadget("Xiaomi","0.5Watts","type c", "1232341");

// console.log(Miwatch.getNombre())




class Mascota {
    constructor(dueño, especie, dieta, color){
        this.dueño = dueño || "persona";
        this.especie = especie;
        this.dieta = dieta;
        this.color = color;
        this.estado = "vivo";
    }

    comer(comida){
        return `Mi dieta se basa  en ${this.dieta}, y me diste de comer ${comida}`;
    }
}


class Gato extends Mascota {
    constructor(dueño, especie, dieta, color, vidas){
        super(dueño, especie, dieta, color)
        this.vidas = vidas;
    }
}

const Magu = new Gato("Rodrigo", "Sagrado de Birmania", "pescado", "cafe y blanco", 8);

console.log(Magu.comer('Mojarrita'));