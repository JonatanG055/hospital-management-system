"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
// src/models/doctor.ts
class Doctor {
    constructor(id, nombre, especialidad, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
    }
}
exports.Doctor = Doctor;
