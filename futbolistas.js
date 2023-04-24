"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.futbolista = void 0;
var IntegrantesSeleccion_1 = require("./IntegrantesSeleccion");
// clase para los futbolistas, que hereda de IntegrantesSeleccion .-
var futbolista = /** @class */ (function (_super) {
    __extends(futbolista, _super);
    function futbolista(nombre, apellido, NumeroPasaporte, FechaNacimiento, posicion) {
        var _this = _super.call(this, nombre, apellido, NumeroPasaporte, posicion) || this;
        _this.nombre = nombre;
        _this.apellido = apellido;
        _this.posicion = _this.posicion;
        return _this;
    }
    futbolista.prototype.getPosicion = function () {
        return this.posicion;
    };
    futbolista.prototype.setPosicion = function (posicion) {
        this.posicion = posicion;
    };
    //Método donde se aplico polimorfismo e esta clase hija .
    futbolista.prototype.presentacion = function () {
        console.log("Hola, soy ".concat(this.getNombre(), " ").concat(this.getApellido(), " y juego como ").concat(this.posicion));
    };
    return futbolista;
}(IntegrantesSeleccion_1.IntegrantesSeleccion));
exports.futbolista = futbolista;
