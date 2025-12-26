import { mostrarCarta, hasGanado, GameOver, mostrarPuntuacion } from "./ui";
import { obtenerUrlCarta, puntuacion } from "./modelo";

const crearNumeroAleatorio = () => Math.floor(Math.random() * 11);

const numeroCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }
  if (numeroAleatorio === 0) {
    return numeroAleatorio + 1;
  }
  return numeroAleatorio;
};

export const puntuacionCarta = () => {
  let numero = crearNumeroAleatorio();
  let carta = numeroCarta(numero);
  let cartaURL = obtenerUrlCarta(carta);
  mostrarCarta(cartaURL);
  if (carta > 9) {
    carta = 0.5;
  }
  puntuacion.puntuacionInicial = carta + puntuacion.puntuacionInicial;
};

export const dameCarta = () => {
  puntuacionCarta();
  hasGanado();
  GameOver();
  mostrarPuntuacion();
};
