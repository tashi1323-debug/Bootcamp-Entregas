import {
  crearNumeroAleatorio,
  obtenerUrlCarta,
  numeroCarta,
  obtenerPuntosCarta,
  sumarPuntuacion,
  actualizarPuntuacion,
} from "./motor";
import { partida } from "./modelo";

export const mostrarPuntuacion = () => {
  const elementoMostrarPuntuacion = document.getElementById("puntuacion");
  if (
    elementoMostrarPuntuacion !== null &&
    elementoMostrarPuntuacion !== undefined &&
    elementoMostrarPuntuacion instanceof HTMLHeadingElement
  ) {
    elementoMostrarPuntuacion.textContent = `Puntuación ${partida.puntuacionInicial}`;
  }
  if (
    partida.puntuacionInicial > 7.5 &&
    elementoMostrarPuntuacion !== null &&
    elementoMostrarPuntuacion !== undefined &&
    elementoMostrarPuntuacion instanceof HTMLHeadingElement
  ) {
    elementoMostrarPuntuacion.textContent = `Game Over! ${partida.puntuacionInicial}`;
  }
 
};

const GameOver = () => {
  const mensajeGameOver = document.getElementById("frasemeplanto");
  if (
    mensajeGameOver !== null &&
    mensajeGameOver !== undefined &&
    mensajeGameOver instanceof HTMLParagraphElement
  ) {
    mensajeGameOver.textContent = "Te has pasado! Juega otra vez!";
  }
  const desabilitarBotonMePlanto = document.getElementById("meplanto");
  if (
    desabilitarBotonMePlanto !== null &&
    desabilitarBotonMePlanto !== undefined &&
    desabilitarBotonMePlanto instanceof HTMLButtonElement
  ) {
    desabilitarBotonMePlanto.disabled = true;
  }
  const desabilitarBotonNuevaCarta = document.getElementById("nueva-carta");
  if (
    desabilitarBotonNuevaCarta !== null &&
    desabilitarBotonNuevaCarta !== undefined &&
    desabilitarBotonNuevaCarta instanceof HTMLButtonElement
  ) {
    desabilitarBotonNuevaCarta.disabled = true;
  }
};
const mePlanto = () => {
  if (
    btnNuevaCarta !== null &&
    btnNuevaCarta !== undefined &&
    btnNuevaCarta instanceof HTMLButtonElement
  ) {
    btnNuevaCarta.disabled = true;
  }

  const mensajeMePlanto = document.getElementById("frasemeplanto");
  if (
    mensajeMePlanto !== null &&
    mensajeMePlanto !== undefined &&
    mensajeMePlanto instanceof HTMLParagraphElement
  ) {
    mensajeMePlanto.textContent = "No sabia que eras una 🐔";
  }
  const desabilitarBotonMePlanto = document.getElementById("meplanto");
  if (
    partida.puntuacionInicial > 7.5 &&
    desabilitarBotonMePlanto !== null &&
    desabilitarBotonMePlanto !== undefined &&
    desabilitarBotonMePlanto instanceof HTMLButtonElement
  ) {
    desabilitarBotonMePlanto.disabled = true;
  }
};

const hasGanado = () => {
  const mensajeFelicidades = document.getElementById("frasemeplanto");
  if (
    mensajeFelicidades !== null &&
    mensajeFelicidades !== undefined &&
    mensajeFelicidades instanceof HTMLParagraphElement
  ) {
    mensajeFelicidades.textContent = "Enhorabuena, Has Ganado!";
  }
  const desabilitarBotonNuevaCarta = document.getElementById("nueva-carta");
  if (
    desabilitarBotonNuevaCarta !== null &&
    desabilitarBotonNuevaCarta !== undefined &&
    desabilitarBotonNuevaCarta instanceof HTMLButtonElement
  ) {
    desabilitarBotonNuevaCarta.disabled = true;
  }
  const desabilitarBotonMePlanto = document.getElementById("meplanto");
  if (
    desabilitarBotonMePlanto !== null &&
    desabilitarBotonMePlanto !== undefined &&
    desabilitarBotonMePlanto instanceof HTMLButtonElement
  ) {
    desabilitarBotonMePlanto.disabled = true;
  }
};
const comprobarPartida = () => {
  if (partida.puntuacionInicial > 7.5) {
    GameOver();
  } else if (partida.puntuacionInicial === 7.5) {
    hasGanado();
  }
};
export const mostrarCarta = (urlCarta: string) => {
  const elementoMostrarCarta = document.getElementById("carta");
  if (
    elementoMostrarCarta !== null &&
    elementoMostrarCarta !== undefined &&
    elementoMostrarCarta instanceof HTMLImageElement
  ) {
    elementoMostrarCarta.src = urlCarta;
  }
};

const nuevaPartida = () => {
  if (
    btnNuevaCarta !== null &&
    btnNuevaCarta !== undefined &&
    btnNuevaCarta instanceof HTMLButtonElement
  ) {
    btnNuevaCarta.disabled = false;
  }
  partida.puntuacionInicial = 0;
  mostrarPuntuacion();
  const resetMensaje = document.getElementById("frasemeplanto");
  if (
    resetMensaje !== null &&
    resetMensaje !== undefined &&
    resetMensaje instanceof HTMLParagraphElement
  ) {
    resetMensaje.textContent = "Buena Suerte!";
  }
  const desabilitarBotonMePlanto = document.getElementById("meplanto");
  if (
    desabilitarBotonMePlanto !== null &&
    desabilitarBotonMePlanto !== undefined &&
    desabilitarBotonMePlanto instanceof HTMLButtonElement
  ) {
    desabilitarBotonMePlanto.disabled = false;
  }
};

export const iniciarJuego = () => {
  if (
    btnNuevaCarta !== null &&
    btnNuevaCarta !== undefined &&
    btnNuevaCarta instanceof HTMLButtonElement
  ) {
    btnNuevaCarta.addEventListener("click", () => {
      dameCarta();
    });
  }

  if (
    btnMePlanto !== null &&
    btnMePlanto !== undefined &&
    btnMePlanto instanceof HTMLButtonElement
  ) {
    btnMePlanto.addEventListener("click", mePlanto);
  }

  if (
    btnNuevaPartida !== null &&
    btnNuevaPartida !== undefined &&
    btnNuevaPartida instanceof HTMLButtonElement
  ) {
    btnNuevaPartida.addEventListener("click", () => {
      nuevaPartida();

      mostrarCarta(
        "https:raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
      );
    });
  }
};
const dameCarta = () => {
  puntuacionCarta();
  comprobarPartida();
  mostrarPuntuacion();
};
const btnNuevaCarta = document.getElementById("nueva-carta");
const btnMePlanto = document.getElementById("meplanto");
const btnNuevaPartida = document.getElementById("nuevapartida");

const puntuacionCarta = () => {
  let numero = crearNumeroAleatorio();
  let carta = numeroCarta(numero);
  const puntos = obtenerPuntosCarta(carta);
  const puntosSumados = sumarPuntuacion(puntos);
  actualizarPuntuacion(puntosSumados);
  let cartaURL = obtenerUrlCarta(carta);
  mostrarCarta(cartaURL);
};
