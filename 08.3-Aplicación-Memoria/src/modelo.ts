import { barajarCartas } from "./motor";

export interface Carta {
  idFoto: number;
  imagen: string;
  estaVuelta: boolean;
  encontrada: boolean;
}

export interface InfoCarta {
  idFoto: number;
  imagen: string;
}

export const infoCartas: InfoCarta[] = [
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
  },
  {
    idFoto: 6,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
  },
];

type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
  intentos: number;
}

// funcion que define la estructura de una carta
export const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto,
  imagen,
  estaVuelta: false,
  encontrada: false,
});
// duplica el array para tener dos parejas de cada
const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
  const cartas = infoCartas.map((carta) =>
    crearCartaInicial(carta.idFoto, carta.imagen),
  );

  const parejas = infoCartas.map((carta) =>
    crearCartaInicial(carta.idFoto, carta.imagen),
  );

  return [...cartas, ...parejas];
};

export const crearTableroInicial = (): Tablero => ({
  cartas: barajarCartas(crearColeccionDeCartasInicial(infoCartas)),
  estadoPartida: "PartidaNoIniciada",
  intentos: 0,
});
export let tablero: Tablero = crearTableroInicial();
