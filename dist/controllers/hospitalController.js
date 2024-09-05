"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalController = void 0;
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
        console.log('Paciente registrado exitosamente.');
    }
    registrarDoctor(id, nombre, especialidad, telefono) {
        const doctor = new doctor_1.Doctor(id, nombre, especialidad, telefono);
        this.hospital.registrarDoctor(doctor);
        console.log('Doctor registrado exitosamente.');
    }
    programarCita(id, pacienteId, doctorId, fecha, motivo) {
        const paciente = this.hospital.getPacientes().find(p => p.id === pacienteId);
        const doctor = this.hospital.getDoctores().find(d => d.id === doctorId);
        if (paciente && doctor) {
            const cita = new cita_1.Cita(id, paciente, doctor, fecha, motivo);
            this.hospital.programarCita(cita);
            console.log('Cita programada exitosamente.');
        }
        else {
            console.log('Paciente o Doctor no encontrado.');
        }
    }
    consultarCitasPorPaciente(pacienteId) {
        const citas = this.hospital.consultarCitasPorPaciente(pacienteId);
        if (citas.length > 0) {
            console.log('Citas encontradas:', citas);
        }
        else {
            console.log('No se encontraron citas para este paciente.');
        }
    }
    eliminarCita(id) {
        const resultado = this.hospital.eliminarCita(id);
        return resultado;
    }
}
exports.HospitalController = HospitalController;
