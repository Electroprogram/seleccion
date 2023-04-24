//import {cuerpoMedico} from "/.cuerpoMedico";
import {cuerpoMedico} from "./cuerpoMedico";
import{ Entrenador} from "./entrenador";
import {futbolista} from "./futbolistas";
import {IntegrantesSeleccion} from "./IntegrantesSeleccion";
import {Masajista} from"./masajista";
import { Seleccion } from "./Seleccion";


const Futbolista1 = new futbolista ("Lionel", "Messi","789654","24/6/1987", "Delantero");
const Futbolista2 = new futbolista ("Emiliano" , "Martinez" , "321456" , "2/9/1992", "arquero");

const entrenadorSeleccion = new Entrenador ("Lionel ", "Scaloni", "963258","16/5/1978", 6);
const masajistaSeleccion = new  Masajista ("Marcelo" , "D'Andrea", "456987" , "2/9/1969","masajista");

const CuerpoMedicoSeleccion = new cuerpoMedico(masajistaSeleccion,456223);
const seleccion = new Seleccion ("Argentina",futbolista[],entrenadorSeleccion,masajistaSeleccion);

seleccion.incluirFutbolista (Futbolista1);
seleccion.incluirFutbolista (Futbolista2);

Futbolista1.presentacion()
entrenadorSeleccion.presentacion()
masajistaSeleccion.presentacion()
console.log (Futbolista1);
console.log (Futbolista2);
console.log (entrenadorSeleccion);
console.log (CuerpoMedicoSeleccion);
console.log (seleccion);