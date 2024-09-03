// src/models/doctor.ts
export class Doctor {  // Asegúrate de usar `export` aquí
    constructor(
        public id: number,
        public nombre: string,
        public especialidad: string,
        public telefono: string
    ) {}
}
