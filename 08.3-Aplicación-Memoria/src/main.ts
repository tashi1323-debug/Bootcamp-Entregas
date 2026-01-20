//Prueba de concepto 1 barajar las cartas

function barajarArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

//Prueba de concepto 2 - Mostrar imagen y volver la carta
//En esta prueba de concepto vamos a mostrar una carta, y cuando el usuario pinche en ella, la carta se va a volver y va a mostrar la imagen.

const mostrarCarta = (urlCarta: string) => {
  const elementoCarta = document.getElementById("imagenCarta");
  if (
    elementoCarta !== null &&
    elementoCarta !== undefined &&
    elementoCarta instanceof HTMLImageElement
  ) {
    elementoCarta.src = urlCarta;
  }
};

const divCarta = document.getElementById("divCarta");

const clickCarta = () => {
  if (
    divCarta !== null &&
    divCarta !== undefined &&
    divCarta instanceof HTMLDivElement
  ) {
    divCarta.addEventListener("click", () => {
      mostrarCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
      ); // url leon de prueba
    });
  }
};
clickCarta(); // eliminar mas adelante

//Prueba de concepto 3 - Mostrar un Grid de cartas

//Prueba de concepto 4 - Mostrar segunda imagen y volver las dos cartas

const urlCartas = (indiceArray: number) => {
  switch (indiceArray) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png";
    case 8:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png";
    case 9:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png";
  }
};
