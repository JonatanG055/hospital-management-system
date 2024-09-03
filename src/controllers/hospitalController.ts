// src/controllers/hospitalController.ts
import { Cita } from '../models/cita';
import { Doctor } from '../models/doctor';
import { Hospital } from '../models/hospital';
import { Paciente } from '../models/paciente';

export class HospitalController {
    private hospital: Hospital = new Hospital();

    registrarPaciente(id: number, nombre: string, edad: number, direccion: string, telefono: string) {
        const paciente = new Paciente(id, nombre, edad, direccion, telefono);
        this.hospital.registrarPaciente(paciente);
    }

    registrarDoctor(id: number, nombre: string, especialidad: string, telefono: string) {
        const doctor = new Doctor(id, nombre, especialidad, telefono);
        this.hospital.registrarDoctor(doctor);
    }

    programarCita(id: number, pacienteId: number, doctorId: number, fecha: Date, motivo: string) {
        const paciente = this.hospital.getPacientes().find(p => p.id === pacienteId);
        const doctor = this.hospital.getDoctores().find(d => d.id === doctorId);

        if (paciente && doctor) {
            const cita = new Cita(id, paciente, doctor, fecha, motivo);
            this.hospital.programarCita(cita);
        }
    }

    consultarCitasPorPaciente(pacienteId: number): Cita[] {
        return this.hospital.consultarCitasPorPaciente(pacienteId);
    }
}
