const divCarta0 = document.querySelector(`div[data-indice-id=0]`)
const divCarta1 = document.querySelector(`div[data-indice-id=0]`)
//Prueba de concepto 2 - Mostrar imagen y volver la carta
//Vamos a mostrar una carta, y cuando el usuario pinche en ella, la carta se va a volver y va a mostrar la imagen.

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