import { IntegrantesSeleccion } from "./IntegrantesSeleccion";


// clase para los futbolistas, que hereda de IntegrantesSeleccion .-

export class futbolista extends IntegrantesSeleccion {
   //[x: string]: any;
   
    private posicion : string;

    constructor (nombre:string, apellido: string,NumeroPasaporte:string,FechaNacimiento:string,posicion:string) {
        super(nombre, apellido,NumeroPasaporte, posicion);
        this.nombre = nombre;
        this.apellido = apellido;    
        this.posicion =this.posicion;
    }

    public getPosicion():string {
        return this.posicion ;

    }

    public setPosicion(posicion:string): void{
        this.posicion = posicion;
    }

    //Método donde se aplico polimorfismo e esta clase hija .

    public presentacion() {
        console.log(`Hola, soy ${this.getNombre ()} ${this.getApellido ()} y juego como ${this.posicion}`);
    }

}