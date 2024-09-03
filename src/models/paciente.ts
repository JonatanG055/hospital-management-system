// src/models/paciente.ts
export class Paciente {
    constructor(
        public id: number,
        public nombre: string,
        public edad: number,
        public direccion: string,
        public telefono: string
    ) {}
}
