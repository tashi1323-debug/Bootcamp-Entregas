import { obtenerPersonajes } from "./personajes.api";
import { Personaje } from "./personajes.model";

//Llamada a la API

//Pintar el listado
const pintarPersonajes = (personajes: Personaje[]) => {
  const contenedor = document.getElementById("cuerpo");

  if (
    contenedor !== null &&
    contenedor !== undefined &&
    contenedor instanceof HTMLDivElement
  ) {
    contenedor.innerHTML = "";
  }
  personajes.forEach((personaje) => {
    const personajeDiv = document.createElement("div");
    const imagenPersonaje = document.createElement("img");
    imagenPersonaje.src = `http://localhost:3000/${personaje.imagen}`;
    const nombre = document.createElement("p");
    nombre.textContent = `Nombre: ${personaje.nombre}`;

    const especialidad = document.createElement("p");
    especialidad.textContent = `Especialidad: ${personaje.especialidad}`;
    const habilidades = document.createElement("p");
    habilidades.textContent = `Habilidades: ${personaje.habilidades.join(", ")}`;

    personajeDiv.appendChild(imagenPersonaje);
    personajeDiv.appendChild(nombre);
    personajeDiv.appendChild(especialidad);
    personajeDiv.appendChild(habilidades);
    if (
      contenedor !== null &&
      contenedor !== undefined &&
      contenedor instanceof HTMLDivElement
    ) {
      contenedor.appendChild(personajeDiv);
    }
  });
};

//Gestionar submit formulario

const iniciarFiltro = () => {
  const formulario = document.querySelector("#form-busqueda");
  const input = document.querySelector("#filtro");

  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", async (evento) => {
      evento.preventDefault();
      if (input && input instanceof HTMLInputElement) {
        const valor = input.value;
        const lista = await obtenerPersonajes(valor);
        pintarPersonajes(lista);
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const personajes = await obtenerPersonajes();

  pintarPersonajes(personajes);
  iniciarFiltro();
});
