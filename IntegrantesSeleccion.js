"use strict";
/* implementar una seleccion de futbol, conformada por Futbolistas, entranador  y masajista
   cada integrantes possee nombre,apellido, numero de pasaporte y fecha de nacimiento
   Aplicar herenia  donde sea posible ;
   aplicar composicion y una clase hija
   elejir el metodo de la clase padre y aplicar polimorfirsmo en las clases hijas */
exports.__esModule = true;
exports.IntegrantesSeleccion = void 0;
// clase padre para los integrantes de la Seleccion.-
var IntegrantesSeleccion = /** @class */ (function () {
    function IntegrantesSeleccion(nombre, apellido, numeroPasaporte, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numeroPasaporte = numeroPasaporte;
        this.fechaNacimiento = fechaNacimiento;
    }
    IntegrantesSeleccion.prototype.getNombre = function () {
        return this.nombre;
    };
    IntegrantesSeleccion.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    IntegrantesSeleccion.prototype.getApellido = function () {
        return this.apellido;
    };
    IntegrantesSeleccion.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    IntegrantesSeleccion.prototype.getnumeroPasaporte = function () {
        return this.numeroPasaporte = this.numeroPasaporte;
    };
    IntegrantesSeleccion.prototype.setnumeroPasaporte = function (numeroPasaporte) {
        this.numeroPasaporte = numeroPasaporte;
    };
    IntegrantesSeleccion.prototype.getFechaNacimiento = function () {
        return this.fechaNacimiento;
    };
    IntegrantesSeleccion.prototype.setFechaNacimiento = function (fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    };
    return IntegrantesSeleccion;
}());
exports.IntegrantesSeleccion = IntegrantesSeleccion;
