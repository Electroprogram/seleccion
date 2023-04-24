import {IntegrantesSeleccion} from "./IntegrantesSelecccion";
//clase para el entrenador , que hereda IntegrantesSeleccion .-

export class Entrenador extends IntegrantesSeleccion{
    private experiencia : number;
    private nombre: string;
    private apellido: string;
    presentacion: any;

    constructor(nombre: string, apellido: string, numeroPasaporte:string, fechaNacimiento : string , experiencia : number){
            super(nombre, apellido, numeroPasaporte, fechaNacimiento);
            this.experiencia= experiencia;
        }

public getNombre(): string {
    return this.nombre;
}
public setNombre(nombre:string): void{
    this.nombre = this.nombre;
}

public getApellido(): string {
    return this.apellido;
}
public setApellido(apellido:string): void{
    this.apellido = this.apellido;
}

public  getExperiencia(): number {
    return this.experiencia;
}

public setExperiencia (experiencia:number): void{
    this.experiencia = experiencia;
}

//Metodo donde aplico polimorfismo a esta clase hija 

public presentación(){
    console.log(`Hola, soy ${this.getNombre()} ${this.getApellido} y tengo ${this.experiencia} años de experiencia como entrenador`);

}

}



