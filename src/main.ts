import * as readline from 'readline';
import { HospitalView } from './views/hospitalView'; // Asegúrate de que la ruta del archivo es correcta

// Crear una interfaz readline para leer de la entrada estándar
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Crear una instancia de HospitalView
const view = new HospitalView(rl);

// Función para realizar una pregunta y obtener una respuesta
function pregunta(query: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query, (respuesta) => {
            resolve(respuesta.trim()); // trim() para eliminar los saltos de línea o espacios
        });
    });
}

// Función para mostrar el menú principal
async function mostrarMenu() {
    view.mostrarMenuPrincipal();
    const opcion = await pregunta('Seleccione una opción: ');

    // Validar si la opción ingresada es un número y manejarla correctamente
    const opcionNumero = parseInt(opcion);
    if (isNaN(opcionNumero) || opcionNumero < 1 || opcionNumero > 6) {
        console.log('Por favor, ingrese un número válido entre 1 y 6.');
        await mostrarMenu();
    } else {
        await manejarOpcion(opcionNumero);
    }
}

// Función para manejar la opción seleccionada por el usuario
async function manejarOpcion(opcion: number) {
    await view.ejecutarOpcion(opcion);
    if (opcion !== 6) { // No volver a mostrar el menú si la opción es salir
        await mostrarMenu();
    } else {
        rl.close();
    }
}

// Iniciar el menú principal
mostrarMenu();
