import * as readline from 'readline';

export class HospitalView {
    private pacientes: { id: number, nombre: string, edad: number, direccion: string, telefono: string }[] = [];
    private doctores: { id: number, nombre: string, especialidad: string }[] = [];
    private citas: { id: number, pacienteId: number, doctorId: number, fecha: string }[] = [];
    private siguientePacienteId = 1;
    private siguienteDoctorId = 1;
    private siguienteCitaId = 1;

    private rl: readline.Interface;

    // Constructor que recibe readline.Interface
    constructor(rl: readline.Interface) {
        this.rl = rl;
    }

    // Muestra el menú principal
    mostrarMenuPrincipal() {
        console.log('Sistema de Gestión Hospitalaria');
        console.log('1. Registrar Paciente');
        console.log('2. Registrar Doctor');
        console.log('3. Programar Cita');
        console.log('4. Consultar Citas por Paciente');
        console.log('5. Eliminar Cita');
        console.log('6. Salir');
    }

    // Ejecuta la opción seleccionada
    async ejecutarOpcion(opcion: number) {
        switch (opcion) {
            case 1:
                await this.registrarPaciente();
                break;
            case 2:
                await this.registrarDoctor();
                break;
            case 3:
                await this.programarCita();
                break;
            case 4:
                await this.consultarCitas();
                break;
            case 5:
                await this.eliminarCita();
                break;
            case 6:
                console.log('Saliendo...');
                this.rl.close();
                break;
            default:
                console.log('Opción no válida');
                break;
        }
    }

    // Iniciar el sistema
    iniciarSistema() {
        this.mostrarMenuPrincipal();
        this.rl.question('Seleccione una opción: ', async (opcion: string) => {
            const numOpcion = parseInt(opcion.trim());
            await this.ejecutarOpcion(numOpcion);
            if (numOpcion !== 6) {
                this.iniciarSistema(); // Muestra el menú nuevamente después de ejecutar la opción
            }
        });
    }

    // Registrar un paciente
    private async registrarPaciente() {
        console.log('Iniciando registro de paciente...');
        const nombre = await this.preguntar('Ingrese el nombre del paciente: ');
        const edad = parseInt(await this.preguntar('Ingrese la edad del paciente: '));
        const direccion = await this.preguntar('Ingrese la dirección del paciente: ');
        const telefono = await this.preguntar('Ingrese el teléfono del paciente: ');

        const paciente = { id: this.siguientePacienteId++, nombre, edad, direccion, telefono };
        this.pacientes.push(paciente);

        console.log(`Paciente registrado: ID: ${paciente.id}, Nombre: ${nombre}, Edad: ${edad}, Dirección: ${direccion}, Teléfono: ${telefono}`);
    }

    // Registrar un doctor
    private async registrarDoctor() {
        console.log('Iniciando registro de doctor...');
        const nombre = await this.preguntar('Ingrese el nombre del doctor: ');
        const especialidad = await this.preguntar('Ingrese la especialidad del doctor: ');

        const doctor = { id: this.siguienteDoctorId++, nombre, especialidad };
        this.doctores.push(doctor);

        console.log(`Doctor registrado: ID: ${doctor.id}, Nombre: ${nombre}, Especialidad: ${especialidad}`);
    }

    // Programar una cita
    private async programarCita() {
        console.log('Iniciando programación de cita...');
        const nombrePaciente = await this.preguntar('Ingrese el nombre del paciente: ');
        const nombreDoctor = await this.preguntar('Ingrese el nombre del doctor: ');
        const fecha = await this.preguntar('Ingrese la fecha de la cita (DD/MM/AAAA): ');

        const paciente = this.pacientes.find(p => p.nombre === nombrePaciente);
        const doctor = this.doctores.find(d => d.nombre === nombreDoctor);

        if (paciente && doctor) {
            const cita = { id: this.siguienteCitaId++, pacienteId: paciente.id, doctorId: doctor.id, fecha };
            this.citas.push(cita);
            console.log(`Cita programada: Paciente ID: ${paciente.id}, Doctor ID: ${doctor.id}, Fecha: ${fecha}`);
        } else {
            console.log('Paciente o doctor no encontrado.');
        }
    }

    // Consultar citas por paciente
    private async consultarCitas() {
        const nombrePaciente = await this.preguntar('Ingrese el nombre del paciente para consultar citas: ');
        const paciente = this.pacientes.find(p => p.nombre === nombrePaciente);

        if (paciente) {
            const citasPaciente = this.citas.filter(c => c.pacienteId === paciente.id);
            if (citasPaciente.length > 0) {
                console.log('Citas del paciente:');
                citasPaciente.forEach(cita => {
                    const doctor = this.doctores.find(d => d.id === cita.doctorId);
                    console.log(`ID: ${cita.id}, Doctor: ${doctor?.nombre || 'Desconocido'}, Fecha: ${cita.fecha}`);
                });
            } else {
                console.log('No se encontraron citas para este paciente.');
            }
        } else {
            console.log('Paciente no encontrado.');
        }
    }

    // Eliminar una cita
    private async eliminarCita() {
        const idCita = parseInt(await this.preguntar('Ingrese el ID de la cita a eliminar: '));
        const index = this.citas.findIndex(c => c.id === idCita);

        if (index !== -1) {
            this.citas.splice(index, 1);
            console.log(`Cita con ID ${idCita} eliminada.`);
        } else {
            console.log('Cita no encontrada.');
        }
    }

    // Función auxiliar para hacer preguntas
    private async preguntar(query: string): Promise<string> {
        return new Promise((resolve) => {
            this.rl.question(query, (respuesta: string) => {
                resolve(respuesta);
            });
        });
    }
}
