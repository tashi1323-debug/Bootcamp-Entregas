import axios from "axios";
import { Personaje } from "./personajes.model";

export const obtenerPersonajes = async (
  nombre?: string,
): Promise<Personaje[]> => {
  try {
    let url = "";
    if (!nombre) {
      url = "http://localhost:3000/personajes";
    } else{
        url = `http://localhost:3000/personajes?nombre_like=${nombre}`;
    }
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error("Error al obtener personajes");
  }
};
