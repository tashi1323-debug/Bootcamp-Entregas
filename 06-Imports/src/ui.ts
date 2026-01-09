import { dameCarta } from "./motor";
import { puntuacion } from "./modelo";

export const mostrarPuntuacion = () => {
  const elementoMostrarPuntuacion = document.getElementById("puntuacion");
  if (
    elementoMostrarPuntuacion !== null &&
    elementoMostrarPuntuacion !== undefined &&
    elementoMostrarPuntuacion instanceof HTMLHeadingElement
  ) {
    elementoMostrarPuntuacion.textContent = `Puntuación ${puntuacion.puntuacionInicial}`;
  }
  if (
    puntuacion.puntuacionInicial > 7.5 &&
    elementoMostrarPuntuacion !== null &&
    elementoMostrarPuntuacion !== undefined &&
    elementoMostrarPuntuacion instanceof HTMLHeadingElement
  ) {
    elementoMostrarPuntuacion.textContent = `Game Over! ${puntuacion.puntuacionInicial}`;
  }
};

export const GameOver = () => {
  const mensajeGameOver = document.getElementById("frasemeplanto");
  if (
    puntuacion.puntuacionInicial > 7.5 &&
    mensajeGameOver !== null &&
    mensajeGameOver !== undefined &&
    mensajeGameOver instanceof HTMLParagraphElement
  ) {
    mensajeGameOver.textContent = "Te has pasado! Juega otra vez!";
  }
  const desabilitarBotonMePlanto = document.getElementById("meplanto");
  if (
    puntuacion.puntuacionInicial > 7.5 &&
    desabilitarBotonMePlanto !== null &&
    desabilitarBotonMePlanto !== undefined &&
    desabilitarBotonMePlanto instanceof HTMLButtonElement
  ) {
    desabilitarBotonMePlanto.disabled = true;
  }
  const desabilitarBotonNuevaCarta = document.getElementById("nueva-carta");
  if (
    puntuacion.puntuacionInicial >= 7.5 &&
    desabilitarBotonNuevaCarta !== null &&
    desabilitarBotonNuevaCarta !== undefined &&
    desabilitarBotonNuevaCarta instanceof HTMLButtonElement
  ) {
    desabilitarBotonNuevaCarta.disabled = true;
  }
};

export const hasGanado = () => {
  const mensajeFelicidades = document.getElementById("frasemeplanto");
  if (
    puntuacion.puntuacionInicial === 7.5 &&
    mensajeFelicidades !== null &&
    mensajeFelicidades !== undefined &&
    mensajeFelicidades instanceof HTMLParagraphElement
  ) {
    mensajeFelicidades.textContent = "Enhorabuena, Has Ganado!";
  }
  const desabilitarBotonNuevaCarta = document.getElementById("nueva-carta");
  if (
    puntuacion.puntuacionInicial === 7.5 &&
    desabilitarBotonNuevaCarta !== null &&
    desabilitarBotonNuevaCarta !== undefined &&
    desabilitarBotonNuevaCarta instanceof HTMLButtonElement
  ) {
    desabilitarBotonNuevaCarta.disabled = true;
  }
  const desabilitarBotonMePlanto = document.getElementById("meplanto");
  if (
    puntuacion.puntuacionInicial === 7.5 &&
    desabilitarBotonMePlanto !== null &&
    desabilitarBotonMePlanto !== undefined &&
    desabilitarBotonMePlanto instanceof HTMLButtonElement
  ) {
    desabilitarBotonMePlanto.disabled = true;
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

export const mePlanto = () => {
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
    puntuacion.puntuacionInicial > 7.5 &&
    desabilitarBotonMePlanto !== null &&
    desabilitarBotonMePlanto !== undefined &&
    desabilitarBotonMePlanto instanceof HTMLButtonElement
  ) {
    desabilitarBotonMePlanto.disabled = true;
  }
};

export const nuevaPartida = () => {
  if (
    btnNuevaCarta !== null &&
    btnNuevaCarta !== undefined &&
    btnNuevaCarta instanceof HTMLButtonElement
  ) {
    btnNuevaCarta.disabled = false;
  }
  puntuacion.puntuacionInicial = 0;
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

const btnNuevaCarta = document.getElementById("nueva-carta");
const btnMePlanto = document.getElementById("meplanto");
const btnNuevaPartida = document.getElementById("nuevapartida");

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
