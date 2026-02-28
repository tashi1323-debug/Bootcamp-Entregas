import { Tablero, Carta } from "./modelo";


// esta funcion es para barajar las cartas
export const barajarCartas = (cartas: Carta[]): Carta[] => {
  const copia = [...cartas];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
};

// comprueba si se puede voltear
export const sePuedeVoltear = (tablero: Tablero, indice: number): boolean => {
  const carta = tablero.cartas[indice];

  const noHayDosCartasLevantadas =
    tablero.estadoPartida !== "DosCartasLevantadas";

  const cartaDisponible = !carta.encontrada && !carta.estaVuelta;

  const estadoPermiteVoltear =
    tablero.estadoPartida === "CeroCartasLevantadas" ||
    tablero.estadoPartida === "UnaCartaLevantada";

  return noHayDosCartasLevantadas && cartaDisponible && estadoPermiteVoltear;
};

// cambia los estados a una carta levantada si hacemos click en la primera carta y a dos cartas levantadas si hacemos click en la segunda . Comprueba si son pareja.



export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero,
): boolean => {
  return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;
};

export const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number,
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
};

export const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number,
) => {
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
};

export const resetIndices = (tablero: Tablero): void => {
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
  tablero.estadoPartida = "CeroCartasLevantadas";
};

export const esPartidaCompleta = (tablero: Tablero): boolean => {
  return tablero.cartas.every((carta) => carta.encontrada);
};


