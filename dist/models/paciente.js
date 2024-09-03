"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
// src/models/paciente.ts
class Paciente {
    constructor(id, nombre, edad, direccion, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}
exports.Paciente = Paciente;
