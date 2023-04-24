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
exports.Masajista = void 0;
var IntegrantesSeleccion_1 = require("./IntegrantesSeleccion");
// clase para el masajista, que hereda de integrantesSeleccion.
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(nombre, apellido, numeroPasaporte, fechaNacimiento, especialidad) {
        var _this = _super.call(this, nombre, apellido, numeroPasaporte, fechaNacimiento) || this;
        _this.especialidad = especialidad;
        return _this;
    }
    Masajista.prototype.getEspecialidad = function () {
        return this.especialidad;
    };
    Masajista.prototype.setEspecialidad = function (nombre) {
        this.especialidad = this.especialidad;
    };
    //Metodo donde se Aplico polimorfismo en la clase hija 
    Masajista.prototype.presentacion = function () {
        console.log("Hola soy ".concat(this.getNombre(), " ").concat(this.getApellido(), " \n            y soy ").concat(this.especialidad, " de la selecci\u00F3n "));
    };
    return Masajista;
}(IntegrantesSeleccion_1.IntegrantesSeleccion));
exports.Masajista = Masajista;
