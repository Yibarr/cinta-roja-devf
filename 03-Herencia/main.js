class Maestro {
    constructor(nombre,workplace){
        this.nombre = nombre;
        this.workplace = workplace;
    }

    promediar(...array){
        let promediados = 0;
        array.forEach( argumento => {
            promediados += argumento

        })
        
        

        return promediados / array.length;
    }

}


class MaestroMusico extends Maestro{
    constructor(nombre,workplace,instrumento){
        super(nombre,workplace)
        this.instrumento = instrumento;
    }
}

const miguel = new MaestroMusico('Miguel','Instituto de Música','Clarinete')

console.log(miguel.promediar(5,6,8,9,7,10))