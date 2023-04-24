import{ Masajista} from "./masajista";
// composición  con clase masajista

export class cuerpoMedico{

    private masajista : Masajista;
    private numeroMatricula: number;

    constructor(masajista:Masajista, numeroMatricula : number){
    this.masajista=masajista
    this.numeroMatricula= numeroMatricula
}

public getNumeroMatricula ():number{
    return this.numeroMatricula;
}

public setNumeroMatricula (numeroMatricula: number) {
    this.numeroMatricula =  numeroMatricula;
}

}