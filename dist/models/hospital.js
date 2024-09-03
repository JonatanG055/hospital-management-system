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
}
exports.Hospital = Hospital;
