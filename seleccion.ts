import {Entrenador} from "./entrenador";
import {futbolista} from "./futbolistas";
import {Masajista} from "./masajista";

//Aplico composicion de las clases Entrenador , Futbolista , Masajista en la clase seleccion .

export class Seleccion {

private pais: string;
private futbolistas: futbolista[];
private entrenador: Entrenador;
private masajista: Masajista;

constructor(pais: string, futbolistas:futbolista[], entrenador : Entrenador , masajista: Masajista) {
    this.pais= pais;
    this.futbolistas = [];
    this.entrenador = entrenador ;
    this.masajista = masajista;
}
    public getPais():string {
    return this.pais;
    }

    public setPais(pais:string): void{
        this.pais = pais;
    }
    public getfutbolistas():futbolista[] {
        return this.futbolistas;
        }
    
        public setfutbolistas(futbolistas:futbolista[]): void{
            this.futbolistas = futbolistas;
        }

    public getentrenador():Entrenador {
        return this.entrenador;
        }
    
    public setentrenador(entrenador:Entrenador): void{
            this.entrenador = entrenador;
        }
        public getmasajista():Masajista {
            return this.masajista;
            }
        
            public setmasajista(masajista:Masajista){
                this.masajista = masajista;
            }

    public incluirFutbolista (futbolista: futbolista): void{
        this.futbolistas.push (futbolista);
    }
}
