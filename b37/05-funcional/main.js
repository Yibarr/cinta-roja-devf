
// MAP

const arraySenseis  = [
    {
        name:"JUANPA",
        cinta:"Roja",
        edad: 23
    },
    {
        name:"ARI",
        cinta:"NEGRA",
        edad: 25
    },
    {
        name:"YAEL",
        cinta:"BLANCA",
        edad: 22
    }
];

const senseiEdad = arraySenseis.map(sensei => sensei.edad + 1);
console.log(senseiEdad);

// Filter

const alumnosRoja = [
    {
        name: "Diana",
        cinta: "roja",
        calif: 7
    },
    {
        name: "Erick",
        cinta: "roja",
        calif: 4
    },
    {
        name: "Agus",
        cinta: "roja",
        calif: 10
    },
    {
        name: "Karla",
        cinta: "roja",
        calif: 8
    }
];

const aprobados = alumnosRoja.filter(alumno => alumno.calif > 5);
//console.log(aprobados);

const playerasAprob = aprobados.map(alumno => {
    alumno.talla = "M"
});
//console.log(aprobados)

// Spread Operator
const newArray = [...arraySenseis, ...alumnosRoja];
console.log(newArray);
