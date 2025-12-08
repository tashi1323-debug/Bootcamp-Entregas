// Interfaz para Grupos Musicales
interface GrupoMusical {
  nombre: string;
  añoDeFundación: string;
  activo: boolean;
  géneroMusical: string;
}

// Géneros musicales
let genero1 = "Pop Rock";
let genero2 = "Rock";
let genero3 = "Hard Rock";
let genero4 = "Clásica";

// Grupos Musicales
const grupo1: GrupoMusical = {
  nombre: "The Beatles",
  añoDeFundación: "1960",
  activo: true,
  géneroMusical: "Pop Rock",
};

const grupo2: GrupoMusical = {
  nombre: "Queen",
  añoDeFundación: "1970",
  activo: false,
  géneroMusical: "Rock",
};
const grupo3: GrupoMusical = {
  nombre: "AC DC",
  añoDeFundación: "1973",
  activo: true,
  géneroMusical: "Hard Rock",
};
const grupo4: GrupoMusical = {
  nombre: "Ludwig van Beethoven",
  añoDeFundación: "1770",
  activo: false,
  géneroMusical: "Clásica",
};

const grupo5: GrupoMusical = {
  nombre: "The Rolling Stones",
  añoDeFundación: "1962",
  activo: true,
  géneroMusical: "Rock",
};

// Constante para el estilo del título

const tituloEstilo = "color: green; font-weight: bold; font-size: 24px;";

console.log("%cThe Beatles", tituloEstilo, grupo1);
console.log("%cQueen", tituloEstilo, grupo2);
console.log("%cAC DC", tituloEstilo, grupo3);
console.log("%cLudwig van Beethoven", tituloEstilo, grupo4);
console.log("%cThe Rolling Stones", tituloEstilo, grupo5);
