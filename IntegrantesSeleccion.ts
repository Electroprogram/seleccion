/* implementar una seleccion de futbol, conformada por Futbolistas, entranador  y masajista
   cada integrantes possee nombre,apellido, numero de pasaporte y fecha de nacimiento
   Aplicar herenia  donde sea posible ; 
   aplicar composicion y una clase hija
   elejir el metodo de la clase padre y aplicar polimorfirsmo en las clases hijas */

   // clase padre para los integrantes de la Seleccion.-

   export class IntegrantesSeleccion{
    public nombre: string;
    public apellido: string;
    private numeroPasaporte: string;
    private fechaNacimiento: string;

    constructor (nombre: string, apellido : string,numeroPasaporte: string,fechaNacimiento:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.numeroPasaporte = numeroPasaporte;
        this.fechaNacimiento = fechaNacimiento;
    }
   
public getNombre(): string {
    return this.nombre;
}

public setNombre (nombre: string) : void {
this.nombre = nombre;
}


public getApellido () : string {
    return this.apellido;
}

public setApellido (apellido : string ) : void{
    this.apellido = apellido;

}

public getnumeroPasaporte() : string{
   return this.numeroPasaporte = this.numeroPasaporte;
}

public setnumeroPasaporte (numeroPasaporte: string ) : void{
    this.numeroPasaporte = numeroPasaporte;
}

public getFechaNacimiento() : string {
    return this.fechaNacimiento;

}

public setFechaNacimiento( fechaNacimiento: string): void{
    this.fechaNacimiento = fechaNacimiento;
}


}

