import { patronDeBusqueda } from "./mainApartadoB.helper";

const extraerImagenes = (html: string): string[] => {
  const imagenes = [...html.matchAll(patronDeBusqueda)];
  const imagenesExtraidas = imagenes.map((img) => img[1]);

  return imagenesExtraidas;
};

const textarea = document.getElementById("html-input") as HTMLTextAreaElement;

const boton = document.getElementById("extraer-imagenes") as HTMLButtonElement;
const resultado = document.getElementById("resultado") as HTMLDivElement;
const galeria = document.getElementById("galeria") as HTMLDivElement;

boton.addEventListener("click", () => {
  const html = textarea.value;
  const listaImagenes = extraerImagenes(html);

  resultado.innerHTML = "";
  galeria.innerHTML = "";
  const listado = document.createElement("ul");

  for (const url of listaImagenes) {
    const lista = document.createElement("li");
    lista.textContent = url;
    listado.appendChild(lista);

    const imagen = document.createElement("img");
    imagen.src = url;
    galeria.appendChild(imagen);
  }
  resultado.appendChild(listado);
});
