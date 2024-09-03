// src/models/hospital.ts
import { Cita } from './cita';
import { Doctor } from './doctor';
import { Paciente } from './paciente';

export class Hospital {
    private pacientes: Paciente[] = [];
    private doctores: Doctor[] = [];
    private citas: Cita[] = [];

    registrarPaciente(paciente: Paciente) {
        this.pacientes.push(paciente);
    }

    registrarDoctor(doctor: Doctor) {
        this.doctores.push(doctor);
    }

    programarCita(cita: Cita) {
        this.citas.push(cita);
    }

    consultarCitasPorPaciente(pacienteId: number): Cita[] {
        return this.citas.filter(cita => cita.paciente.id === pacienteId);
    }

    // Métodos nuevos
    getPacientes(): Paciente[] {
        return this.pacientes;
    }

    getDoctores(): Doctor[] {
        return this.doctores;
    }
}
