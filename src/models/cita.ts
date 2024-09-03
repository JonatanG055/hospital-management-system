// src/models/cita.ts
import { Doctor } from './doctor';
import { Paciente } from './paciente';

export class Cita {  // Asegúrate de usar `export` aquí
    constructor(
        public id: number,
        public paciente: Paciente,
        public doctor: Doctor,
        public fecha: Date,
        public motivo: string
    ) {}
}

