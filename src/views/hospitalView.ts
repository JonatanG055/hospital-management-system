// src/views/hospitalView.ts
import { HospitalController } from '../controllers/hospitalController';

export class HospitalView {
    private controller: HospitalController = new HospitalController();

    mostrarMenuPrincipal() {
        console.log('Sistema de Gestión Hospitalaria');
        console.log('1. Registrar Paciente');
        console.log('2. Registrar Doctor');
        console.log('3. Programar Cita');
        console.log('4. Consultar Citas por Paciente');
        console.log('5. Salir');
    }

    ejecutarOpcion(opcion: number) {
        switch (opcion) {
            case 1:
                // Lógica para registrar paciente
                break;
            case 2:
                // Lógica para registrar doctor
                break;
            case 3:
                // Lógica para programar cita
                break;
            case 4:
                // Lógica para consultar citas por paciente
                break;
            case 5:
                console.log('Saliendo...');
                break;
            default:
                console.log('Opción no válida');
        }
    }
}
