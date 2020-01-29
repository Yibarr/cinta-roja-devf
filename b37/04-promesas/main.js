const calif = 7;

// const madrePromesa = new Promise((resolve, reject) => {
//     if(calif === 10) {
//         resolve('Toma tu iphone, pequeñe.');
//     } else {
//         reject('Suerte para la próxima, burre.');
//     }
// });


madrePromesa
    .then( (response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    });


const hacerExamen = (calificacion) => {
    return new Promise((resolve, reject) => {
        if (calificacion === 10) {
            resolve( `Felicidades por tu ${calificacion}, toma tu iphone, pequeñe`);
        } else {
            reject(`Hiiijole, sacaste ${calificacion}`);
        }
    })
};

hacerExamen(10)
    .then( res => console.log(res))
    .catch( error => console.log(error))