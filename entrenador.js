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
exports.Entrenador = void 0;
var IntegrantesSelecccion_1 = require("./IntegrantesSelecccion");
//clase para el entrenador , que hereda IntegrantesSeleccion .-
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombre, apellido, numeroPasaporte, fechaNacimiento, experiencia) {
        var _this = _super.call(this, nombre, apellido, numeroPasaporte, fechaNacimiento) || this;
        _this.experiencia = experiencia;
        return _this;
    }
    Entrenador.prototype.getNombre = function () {
        return this.nombre;
    };
    Entrenador.prototype.setNombre = function (nombre) {
        this.nombre = this.nombre;
    };
    Entrenador.prototype.getApellido = function () {
        return this.apellido;
    };
    Entrenador.prototype.setApellido = function (apellido) {
        this.apellido = this.apellido;
    };
    Entrenador.prototype.getExperiencia = function () {
        return this.experiencia;
    };
    Entrenador.prototype.setExperiencia = function (experiencia) {
        this.experiencia = experiencia;
    };
    //Metodo donde aplico polimorfismo a esta clase hija 
    Entrenador.prototype.presentación = function () {
        console.log("Hola, soy ".concat(this.getNombre(), " ").concat(this.getApellido, " y tengo ").concat(this.experiencia, " a\u00F1os de experiencia como entrenador"));
    };
    return Entrenador;
}(IntegrantesSelecccion_1.IntegrantesSeleccion));
exports.Entrenador = Entrenador;
