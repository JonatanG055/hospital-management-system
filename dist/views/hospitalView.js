"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalView = void 0;
class HospitalView {
    // Constructor que recibe readline.Interface
    constructor(rl) {
        this.pacientes = [];
        this.doctores = [];
        this.citas = [];
        this.siguientePacienteId = 1;
        this.siguienteDoctorId = 1;
        this.siguienteCitaId = 1;
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
    ejecutarOpcion(opcion) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (opcion) {
                case 1:
                    yield this.registrarPaciente();
                    break;
                case 2:
                    yield this.registrarDoctor();
                    break;
                case 3:
                    yield this.programarCita();
                    break;
                case 4:
                    yield this.consultarCitas();
                    break;
                case 5:
                    yield this.eliminarCita();
                    break;
                case 6:
                    console.log('Saliendo...');
                    this.rl.close();
                    break;
                default:
                    console.log('Opción no válida');
                    break;
            }
        });
    }
    // Iniciar el sistema
    iniciarSistema() {
        this.mostrarMenuPrincipal();
        this.rl.question('Seleccione una opción: ', (opcion) => __awaiter(this, void 0, void 0, function* () {
            const numOpcion = parseInt(opcion.trim());
            yield this.ejecutarOpcion(numOpcion);
            if (numOpcion !== 6) {
                this.iniciarSistema(); // Muestra el menú nuevamente después de ejecutar la opción
            }
        }));
    }
    // Registrar un paciente
    registrarPaciente() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Iniciando registro de paciente...');
            const nombre = yield this.preguntar('Ingrese el nombre del paciente: ');
            const edad = parseInt(yield this.preguntar('Ingrese la edad del paciente: '));
            const direccion = yield this.preguntar('Ingrese la dirección del paciente: ');
            const telefono = yield this.preguntar('Ingrese el teléfono del paciente: ');
            const paciente = { id: this.siguientePacienteId++, nombre, edad, direccion, telefono };
            this.pacientes.push(paciente);
            console.log(`Paciente registrado: ID: ${paciente.id}, Nombre: ${nombre}, Edad: ${edad}, Dirección: ${direccion}, Teléfono: ${telefono}`);
        });
    }
    // Registrar un doctor
    registrarDoctor() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Iniciando registro de doctor...');
            const nombre = yield this.preguntar('Ingrese el nombre del doctor: ');
            const especialidad = yield this.preguntar('Ingrese la especialidad del doctor: ');
            const doctor = { id: this.siguienteDoctorId++, nombre, especialidad };
            this.doctores.push(doctor);
            console.log(`Doctor registrado: ID: ${doctor.id}, Nombre: ${nombre}, Especialidad: ${especialidad}`);
        });
    }
    // Programar una cita
    programarCita() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Iniciando programación de cita...');
            const nombrePaciente = yield this.preguntar('Ingrese el nombre del paciente: ');
            const nombreDoctor = yield this.preguntar('Ingrese el nombre del doctor: ');
            const fecha = yield this.preguntar('Ingrese la fecha de la cita (DD/MM/AAAA): ');
            const paciente = this.pacientes.find(p => p.nombre === nombrePaciente);
            const doctor = this.doctores.find(d => d.nombre === nombreDoctor);
            if (paciente && doctor) {
                const cita = { id: this.siguienteCitaId++, pacienteId: paciente.id, doctorId: doctor.id, fecha };
                this.citas.push(cita);
                console.log(`Cita programada: Paciente ID: ${paciente.id}, Doctor ID: ${doctor.id}, Fecha: ${fecha}`);
            }
            else {
                console.log('Paciente o doctor no encontrado.');
            }
        });
    }
    // Consultar citas por paciente
    consultarCitas() {
        return __awaiter(this, void 0, void 0, function* () {
            const nombrePaciente = yield this.preguntar('Ingrese el nombre del paciente para consultar citas: ');
            const paciente = this.pacientes.find(p => p.nombre === nombrePaciente);
            if (paciente) {
                const citasPaciente = this.citas.filter(c => c.pacienteId === paciente.id);
                if (citasPaciente.length > 0) {
                    console.log('Citas del paciente:');
                    citasPaciente.forEach(cita => {
                        const doctor = this.doctores.find(d => d.id === cita.doctorId);
                        console.log(`ID: ${cita.id}, Doctor: ${(doctor === null || doctor === void 0 ? void 0 : doctor.nombre) || 'Desconocido'}, Fecha: ${cita.fecha}`);
                    });
                }
                else {
                    console.log('No se encontraron citas para este paciente.');
                }
            }
            else {
                console.log('Paciente no encontrado.');
            }
        });
    }
    // Eliminar una cita
    eliminarCita() {
        return __awaiter(this, void 0, void 0, function* () {
            const idCita = parseInt(yield this.preguntar('Ingrese el ID de la cita a eliminar: '));
            const index = this.citas.findIndex(c => c.id === idCita);
            if (index !== -1) {
                this.citas.splice(index, 1);
                console.log(`Cita con ID ${idCita} eliminada.`);
            }
            else {
                console.log('Cita no encontrada.');
            }
        });
    }
    // Función auxiliar para hacer preguntas
    preguntar(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                this.rl.question(query, (respuesta) => {
                    resolve(respuesta);
                });
            });
        });
    }
}
exports.HospitalView = HospitalView;
