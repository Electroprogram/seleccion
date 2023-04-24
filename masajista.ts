import { IntegrantesSeleccion } from "./IntegrantesSeleccion";
// clase para el masajista, que hereda de integrantesSeleccion.

export class Masajista extends IntegrantesSeleccion{
    private especialidad : string

    constructor  ( nombre: string, apellido:string, numeroPasaporte:string, fechaNacimiento:string, 
        especialidad : string  ){
            super(nombre,apellido,numeroPasaporte,fechaNacimiento)
            this.especialidad = especialidad;
        }
        public getEspecialidad () : string {
            return this.especialidad;
        }

        public setEspecialidad (nombre: string): void{
            this.especialidad = this. especialidad;
        }

        //Metodo donde se Aplico polimorfismo en la clase hija 

        public presentacion() {
            console.log (`Hola soy ${ this.getNombre()} ${this.getApellido()} 
            y soy ${this.especialidad} de la selección `);
            
        }
}