import {
  obtenerUrlCarta,
  crearNumeroAleatorio,
  numeroCarta,
  sumarPuntuacion,
  actualizarPuntuacion,
} from "./motor";
import { partida } from "./modelo";
import { vi } from "vitest";
// Apartados obligatorios

// 1. Identifica las funciones y componentes que determinan si un jugador ha ganado la partida o no.

// 2. Crea una serie de tests utilizando la librería de testing vitest para comprobar que el juego funciona correctamente.

//Apartados opcionales

/*Habrás tenido que generar una función que genere un número aleatorio entre 0 y 10 y en el caso de que este número sea mayor que 7, sume 2 al resultado final. Para asegurarnos de que la función se comporta como se espera, se van a realizar sus pruebas unitarias correspondientes.*/

describe("crearNumeroAleatorio", () => {
  it("Tiene que crear un numero aleatorio entre el 0 y el 10, forzamos un 3 para ver si devuelve 3.", () => {
    //Arrange
    //Act
    //Assert
  });
});

describe("numeroCarta", () => {
  it("Si numero carta es 8 debe sumar 2 y si es 0 debe sumar 1, vamos a forzar un 8 y deberiamos obtener un 10", () => {
    //Arrange
    const numeroEsperado = 10;
    const numero = 8;
    //Act
    const resultado = numeroCarta(numero);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("obtenerPuntosCarta", () => {
  it("Si el numero recibido és 10, 11 o 12 el valor debe pasar a ser 0.5", () => {
    //Arrange
    const numero = 10;
    // Act
    const resultado = obtenerUrlCarta(numero);
    //Assert
    expect(resultado).toBe(0.5);
  });
});

describe("sumarPuntuacicon", () => {
  it("Suma el valor de los puntos de la carta a la puntuación, si obtenemos la carta 2, debemos sumar 2 a la puntuacion inicial o actual.", () => {
    //Arrange
    const cartaObtenida = 2;
    //Act
    const resultado = sumarPuntuacion(cartaObtenida);
    //Assert
    expect(resultado).toBe(2);
  });
});

describe("actualizarPuntuacion", () => {
  it("Actualiza el valor de la puntuación después de recibir el valor de la carta.", () => {
    //Arrange
  const numeroCarta = 5;
    //Act
   const resultado = actualizarPuntuacion(numeroCarta);
    //Assert
    expect(resultado).toBe(5);
  });
});

describe("obtenerUrlCarta", () => {
  it("Tiene que devolver la url del numero de la carta correspondiente, si sale el numero 3, tiene que devolver la url de la carta 3.", () => {
    //Arrange
    const urlEsperada = 3;
    //Act
    const resultado = obtenerUrlCarta(urlEsperada);
    //Assert
    expect(resultado).toBe(urlEsperada);
  });
});
