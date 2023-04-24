"use strict";
exports.__esModule = true;
exports.cuerpoMedico = void 0;
// composición  con clase masajista
var cuerpoMedico = /** @class */ (function () {
    function cuerpoMedico(masajista, numeroMatricula) {
        this.masajista = masajista;
        this.numeroMatricula = numeroMatricula;
    }
    cuerpoMedico.prototype.getNumeroMatricula = function () {
        return this.numeroMatricula;
    };
    cuerpoMedico.prototype.setNumeroMatricula = function (numeroMatricula) {
        this.numeroMatricula = numeroMatricula;
    };
    return cuerpoMedico;
}());
exports.cuerpoMedico = cuerpoMedico;
