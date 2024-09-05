"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const readline = __importStar(require("readline"));
const hospitalView_1 = require("./views/hospitalView"); // Asegúrate de que la ruta del archivo es correcta
// Crear una interfaz readline para leer de la entrada estándar
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Crear una instancia de HospitalView
const view = new hospitalView_1.HospitalView(rl);
// Función para realizar una pregunta y obtener una respuesta
function pregunta(query) {
    return new Promise((resolve) => {
        rl.question(query, (respuesta) => {
            resolve(respuesta.trim()); // trim() para eliminar los saltos de línea o espacios
        });
    });
}
// Función para mostrar el menú principal
function mostrarMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        view.mostrarMenuPrincipal();
        const opcion = yield pregunta('Seleccione una opción: ');
        // Validar si la opción ingresada es un número y manejarla correctamente
        const opcionNumero = parseInt(opcion);
        if (isNaN(opcionNumero) || opcionNumero < 1 || opcionNumero > 6) {
            console.log('Por favor, ingrese un número válido entre 1 y 6.');
            yield mostrarMenu();
        }
        else {
            yield manejarOpcion(opcionNumero);
        }
    });
}
// Función para manejar la opción seleccionada por el usuario
function manejarOpcion(opcion) {
    return __awaiter(this, void 0, void 0, function* () {
        yield view.ejecutarOpcion(opcion);
        if (opcion !== 6) { // No volver a mostrar el menú si la opción es salir
            yield mostrarMenu();
        }
        else {
            rl.close();
        }
    });
}
// Iniciar el menú principal
mostrarMenu();
