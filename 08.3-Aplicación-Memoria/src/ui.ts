import { tablero, crearTableroInicial, Tablero } from "./modelo";
import {
  sePuedeVoltear,
  parejaEncontrada,
  parejaNoEncontrada,
  resetIndices,
  sonPareja,
  esPartidaCompleta,
  voltearLaCarta,
} from "./motor";

const mensajes = () => {
  mensajeParejaEncontrada();
  mensajeGanador();
};
const mensajeParejaEncontrada = () => {
  if (tablero.indiceCartaVolteadaA === tablero.indiceCartaVolteadaB) {
    const texto = document.getElementById("parrafo");
    if (texto instanceof HTMLParagraphElement) {
      texto.textContent = "Pareja Encontrada!";
      setTimeout(() => {
        resetMensajes();
      }, 2000);
    }
  }
};

const mensajeGanador = () => {
  const texto = document.getElementById("parrafo");
  if (
    tablero.estadoPartida === "PartidaCompleta" &&
    texto instanceof HTMLParagraphElement
  ) {
    texto.textContent = `Has ganado con ${tablero.intentos} intentos!`;
  }
};

const resetMensajes = () => {
  const texto = document.getElementById("parrafo");
  if (texto instanceof HTMLParagraphElement) {
    texto.textContent = "";
  }
};

const actualizarIntentos = () => {
  const texto = document.getElementById("contador");
  if (texto instanceof HTMLDivElement) {
    texto.textContent = `Intentos ${tablero.intentos}`;
  }
};

const actualizarImagen = () => {
  for (let indice = 0; indice < tablero.cartas.length; indice++) {
    const elementoImg = document.querySelector(
      `img[data-indice-id="${indice}"]`,
    );
    if (
      elementoImg !== null &&
      elementoImg !== undefined &&
      elementoImg instanceof HTMLImageElement
    ) {
      elementoImg.src = tablero.cartas[indice].estaVuelta
        ? tablero.cartas[indice].imagen
        : "";
    }
  }
};

const voltearCarta = (tablero: Tablero, indice: number): void => {
  if (sePuedeVoltear(tablero, indice)) {
    voltearLaCarta(tablero, indice);
  }

  if (tablero.estadoPartida === "DosCartasLevantadas") {
    tablero.intentos++;
    actualizarIntentos();
    comprobarPareja(tablero);
  }

  actualizarImagen();
};

const comprobarPareja = (tablero: Tablero) => {
  const indiceA = tablero.indiceCartaVolteadaA;
  const indiceB = tablero.indiceCartaVolteadaB;
  if (indiceA !== undefined && indiceB !== undefined) {
    if (sonPareja(indiceA, indiceB, tablero)) {
      parejaEncontrada(tablero, indiceA, indiceB);
      resetIndices(tablero);
      if (esPartidaCompleta(tablero)) {
        tablero.estadoPartida = "PartidaCompleta";
      }
    } else {
      setTimeout(() => {
        parejaNoEncontrada(tablero, indiceA, indiceB);
        actualizarImagen();
        resetIndices(tablero);
      }, 1000);
    }
  }
  mensajes();
};

export const mapearDivsCarta = () => {
  for (let indice = 0; indice < tablero.cartas.length; indice++) {
    const elementoDiv = document.querySelector(
      `div[data-indice-id="${indice}"]`,
    );

    if (
      elementoDiv !== null &&
      elementoDiv !== undefined &&
      elementoDiv instanceof HTMLDivElement
    ) {
      elementoDiv.addEventListener("click", () => {
        voltearCarta(tablero, indice);
      });
    }
  }
};

export const EmpezarPartida = () => {
  const botonEmpezarPartida = document.getElementById("empezarPartida");

  if (
    botonEmpezarPartida !== null &&
    botonEmpezarPartida !== undefined &&
    botonEmpezarPartida instanceof HTMLButtonElement
  ) {
    botonEmpezarPartida.addEventListener("click", () => {
      const nuevoTablero = crearTableroInicial();

      tablero.cartas = nuevoTablero.cartas;
      tablero.estadoPartida = "CeroCartasLevantadas";
      tablero.indiceCartaVolteadaA = undefined;
      tablero.indiceCartaVolteadaB = undefined;
      tablero.intentos = 0;
      actualizarIntentos();

      actualizarImagen();
    });
  }
};
