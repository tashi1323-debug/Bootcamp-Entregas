let puntuacionInicial = 0;

const crearNumeroAleatorio = () => Math.floor(Math.random() * 11);

const numeroCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  } else if (numeroAleatorio === 0) {
    return numeroAleatorio + 1;
  }
  if (numeroAleatorio > 9) {
    numeroAleatorio = 0.5;
  }
  puntuacionInicial = numeroAleatorio + puntuacionInicial;
  return numeroAleatorio;
};cd
const mostrarPuntuacion = () => {
  const elementoMostrarPuntuacion = document.getElementById("puntuacion");
  if (
    elementoMostrarPuntuacion !== null &&
    elementoMostrarPuntuacion !== undefined &&
    elementoMostrarPuntuacion instanceof HTMLHeadingElement
  ) {
    elementoMostrarPuntuacion.textContent = `Puntuación ${puntuacionInicial}`;
    if (puntuacionInicial > 7.5) {
      GameOver();
    }
  }
};

const comprobarPartida = () => {
  if (puntuacionInicial > 7.5) {
    GameOver();
  } else if (puntuacionInicial === 7.5) {
    hasGanado();
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

document.addEventListener("DOMContentLoaded", () => {
  mostrarPuntuacion();
  iniciarJuego();
});

const obtenerUrlCarta = (numeroAleatorioCarta: number) => {
  switch (numeroAleatorioCarta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";

    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

const mostrarCarta = (urlCarta: string) => {
  const elementoMostrarCarta = document.getElementById("carta");
  if (
    elementoMostrarCarta !== null &&
    elementoMostrarCarta !== undefined &&
    elementoMostrarCarta instanceof HTMLImageElement
  ) {
    elementoMostrarCarta.src = urlCarta;
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
    puntuacionInicial > 7.5 &&
    desabilitarBotonMePlanto !== null &&
    desabilitarBotonMePlanto !== undefined &&
    desabilitarBotonMePlanto instanceof HTMLButtonElement
  ) {
    desabilitarBotonMePlanto.disabled = true;
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
  puntuacionInicial = 0;
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

const puntuacionCarta = () => {
  let numero = crearNumeroAleatorio();
  let carta = numeroCarta(numero);
  let cartaURL = obtenerUrlCarta(carta);
  mostrarCarta(cartaURL);
};

const dameCarta = () => {
  puntuacionCarta();
  comprobarPartida();
  mostrarPuntuacion();
};

const btnNuevaCarta = document.getElementById("nueva-carta");

const btnMePlanto = document.getElementById("meplanto");

const btnNuevaPartida = document.getElementById("nuevapartida");

const iniciarJuego = () => {
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
