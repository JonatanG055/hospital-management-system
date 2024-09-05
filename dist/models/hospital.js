"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hospital = void 0;
class Hospital {
    constructor() {
        this.pacientes = [];
        this.doctores = [];
        this.citas = [];
    }
    registrarPaciente(paciente) {
        this.pacientes.push(paciente);
    }
    registrarDoctor(doctor) {
        this.doctores.push(doctor);
    }
    programarCita(cita) {
        this.citas.push(cita);
    }
    consultarCitasPorPaciente(pacienteId) {
        return this.citas.filter(cita => cita.paciente.id === pacienteId);
    }
    // Métodos nuevos
    getPacientes() {
        return this.pacientes;
    }
    getDoctores() {
        return this.doctores;
    }
    eliminarCita(id) {
        const index = this.citas.findIndex(cita => cita.id === id);
        if (index !== -1) {
            this.citas.splice(index, 1); // Elimina la cita
            return true;
        }
        return false; // No se encontró la cita
    }
}
exports.Hospital = Hospital;
