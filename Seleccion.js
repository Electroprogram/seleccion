"use strict";
exports.__esModule = true;
exports.Seleccion = void 0;
//Aplico composicion de las clases Entrenador , Futbolista , Masajista en la clase seleccion .
var Seleccion = /** @class */ (function () {
    function Seleccion(pais, futbolistas, entrenador, masajista) {
        this.pais = pais;
        this.futbolistas = [];
        this.entrenador = entrenador;
        this.masajista = masajista;
    }
    Seleccion.prototype.getPais = function () {
        return this.pais;
    };
    Seleccion.prototype.setPais = function (pais) {
        this.pais = pais;
    };
    Seleccion.prototype.getfutbolistas = function () {
        return this.futbolistas;
    };
    Seleccion.prototype.setfutbolistas = function (futbolistas) {
        this.futbolistas = futbolistas;
    };
    Seleccion.prototype.getentrenador = function () {
        return this.entrenador;
    };
    Seleccion.prototype.setentrenador = function (entrenador) {
        this.entrenador = entrenador;
    };
    Seleccion.prototype.getmasajista = function () {
        return this.masajista;
    };
    Seleccion.prototype.setmasajista = function (masajista) {
        this.masajista = masajista;
    };
    Seleccion.prototype.incluirFutbolista = function (futbolista) {
        this.futbolistas.push(futbolista);
    };
    return Seleccion;
}());
exports.Seleccion = Seleccion;
