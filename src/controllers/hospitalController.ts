import { Cita } from '../models/cita';
import { Doctor } from '../models/doctor';
import { Hospital } from '../models/hospital';
import { Paciente } from '../models/paciente';

export class HospitalController {
    private hospital: Hospital;

    constructor() {
        this.hospital = new Hospital();
    }

    registrarPaciente(id: number, nombre: string, edad: number, direccion: string, telefono: string) {
        const paciente = new Paciente(id, nombre, edad, direccion, telefono);
        this.hospital.registrarPaciente(paciente);
        console.log('Paciente registrado exitosamente.');
    }

    registrarDoctor(id: number, nombre: string, especialidad: string, telefono: string) {
        const doctor = new Doctor(id, nombre, especialidad, telefono);
        this.hospital.registrarDoctor(doctor);
        console.log('Doctor registrado exitosamente.');
    }

    programarCita(id: number, pacienteId: number, doctorId: number, fecha: Date, motivo: string) {
        const paciente = this.hospital.getPacientes().find(p => p.id === pacienteId);
        const doctor = this.hospital.getDoctores().find(d => d.id === doctorId);
        if (paciente && doctor) {
            const cita = new Cita(id, paciente, doctor, fecha, motivo);
            this.hospital.programarCita(cita);
            console.log('Cita programada exitosamente.');
        } else {
            console.log('Paciente o Doctor no encontrado.');
        }
    }

    consultarCitasPorPaciente(pacienteId: number) {
        const citas = this.hospital.consultarCitasPorPaciente(pacienteId);
        if (citas.length > 0) {
            console.log('Citas encontradas:', citas);
        } else {
            console.log('No se encontraron citas para este paciente.');
        }
    }

    eliminarCita(id: number) {
        const resultado = this.hospital.eliminarCita(id);
        return resultado;
    }
}
