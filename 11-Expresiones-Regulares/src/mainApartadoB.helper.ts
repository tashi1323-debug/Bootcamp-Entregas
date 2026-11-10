// imagenes para pegar en el html, las del ejemplo de mortadelo no me sirven porque se levantan en el puerto localhost 3000 y ahora con npm start levanto el 5173
/*
<img src="https://picsum.photos/200/300" />
<img src="https://picsum.photos/200/301" />
<img src="https://picsum.photos/200/302" />  

*/
const patronDeBusqueda = /<img[^>]*src="([^"]+)"[^>]*>/g;

const textareaElement = document.getElementById("html-input");
const botonElement = document.getElementById("extraer-imagenes");
const resultadoElement = document.getElementById("resultado");
const galeriaElement = document.getElementById("galeria");

if (
  botonElement === null ||
  botonElement === undefined ||
  !(botonElement instanceof HTMLButtonElement) ||
  textareaElement === null ||
  textareaElement === undefined ||
  !(textareaElement instanceof HTMLTextAreaElement) ||
  resultadoElement === null ||
  resultadoElement === undefined ||
  !(resultadoElement instanceof HTMLDivElement) ||
  galeriaElement === null ||
  galeriaElement === undefined ||
  !(galeriaElement instanceof HTMLDivElement)
) {
  throw new Error("Error: Algunos elementos del DOM no existen.");
}

export const boton = botonElement;
const textarea = textareaElement;
const resultado = resultadoElement;
const galeria = galeriaElement;

const extraerImagenes = (html: string): string[] => {
  const imagenes = [...html.matchAll(patronDeBusqueda)];
  return imagenes.map((img) => img[1]);
};

export const crearElementosDelDom = () => {
  resultado.innerHTML = "";
  galeria.innerHTML = "";

  const listado = document.createElement("ul");
  const html = textarea.value;
  const listaImagenes = extraerImagenes(html);

  for (const url of listaImagenes) {
    const lista = document.createElement("li");
    lista.textContent = url;
    listado.appendChild(lista);

    const imagen = document.createElement("img");
    imagen.src = url;
    galeria.appendChild(imagen);
  }

  resultado.appendChild(listado);
};
