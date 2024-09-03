import * as readline from 'readline';
import { HospitalView } from './views/hospitalView';

// Crea una interfaz readline para leer de la entrada estándar
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const view = new HospitalView();

function mostrarMenuYObtenerOpcion(): Promise<number> {
  return new Promise((resolve) => {
    view.mostrarMenuPrincipal();
    rl.question('Seleccione una opción: ', (input: string) => {
      const opcion = parseInt(input || '5');
      resolve(opcion);
    });
  });
}

async function main() {
  let opcion: number;

  do {
    opcion = await mostrarMenuYObtenerOpcion();
    view.ejecutarOpcion(opcion);
  } while (opcion !== 5);

  rl.close(); // Cierra la interfaz readline cuando se sale del bucle
}

main();
