/*


// Prueba de concepto 1 - barajar las cartas

const barajarCartas = (cartas: Carta[]): Carta[] => {
  const copia = [...cartas];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
};
//Prueba de concepto 3 - Mostrar un Grid de cartas



//Prueba de concepto 4 - Mostrar imagen y volver la carta

const divCarta0 = document.querySelector(`div[data-indice-id=0]`);
const divCarta1 = document.querySelector(`div[data-indice-id=0]`);

const voltearCarta = (urlCarta: string, indice: number) => {
  const elementoCarta = document.querySelector(
    `img[data-indice-id="${indice}"]`,
  );
  if (
    elementoCarta !== null &&
    elementoCarta !== undefined &&
    elementoCarta instanceof HTMLImageElement
  ) {
    elementoCarta.src = urlCarta;
  }
};

const clickCarta = () => {
  if (
    divCarta0 !== null &&
    divCarta0 !== undefined &&
    divCarta0 instanceof HTMLDivElement
  )
    divCarta0.addEventListener("click", () => {
      voltearCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
        0,
      );
    });
  if (
    divCarta1 !== null &&
    divCarta1 !== undefined &&
    divCarta1 instanceof HTMLDivElement
  )
    divCarta1.addEventListener("click", () => {
      voltearCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
        1,
      );
    });
};

document.addEventListener("DOMContentLoaded", () => {
  clickCarta();
});


// Prueba de concepto 5 - Mapear el DIV que contiene la carta con la posición del array de las cartas 

const mapearDivsCarta = () => {
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
        mensajes();
      });
    }
  }
};

*/