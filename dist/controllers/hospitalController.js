"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalController = void 0;
// src/controllers/hospitalController.ts
const cita_1 = require("../models/cita");
const doctor_1 = require("../models/doctor");
const hospital_1 = require("../models/hospital");
const paciente_1 = require("../models/paciente");
class HospitalController {
    constructor() {
        this.hospital = new hospital_1.Hospital();
    }
    registrarPaciente(id, nombre, edad, direccion, telefono) {
        const paciente = new paciente_1.Paciente(id, nombre, edad, direccion, telefono);
        this.hospital.registrarPaciente(paciente);
    }
    registrarDoctor(id, nombre, especialidad, telefono) {
        const doctor = new doctor_1.Doctor(id, nombre, especialidad, telefono);
        this.hospital.registrarDoctor(doctor);
    }
    programarCita(id, pacienteId, doctorId, fecha, motivo) {
        const paciente = this.hospital.getPacientes().find(p => p.id === pacienteId);
        const doctor = this.hospital.getDoctores().find(d => d.id === doctorId);
        if (paciente && doctor) {
            const cita = new cita_1.Cita(id, paciente, doctor, fecha, motivo);
            this.hospital.programarCita(cita);
        }
    }
    consultarCitasPorPaciente(pacienteId) {
        return this.hospital.consultarCitasPorPaciente(pacienteId);
    }
}
exports.HospitalController = HospitalController;
