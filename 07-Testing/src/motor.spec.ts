import {
  obtenerUrlCarta,
  numeroCarta,
  sumarPuntuacion,
  actualizarPuntuacion,
  obtenerPuntosCarta,
  crearNumeroAleatorio,
} from "./motor";
import { partida } from "./modelo";
import { vi } from "vitest";



describe("crearNumeroAleatorio", () => {
  it("Forzamos MathRandom con un valorMockeado en este caso 0.3 , y deberia dar 3.", () => {
    //Arrange
    const numeroEsperado: number = 3;
    const valorMockeado:number = 0.3
    vi.spyOn(Math, "random").mockReturnValue(valorMockeado);

    //Act
    const resultado = crearNumeroAleatorio();
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("numeroCarta", () => {
  it("Debe sumar 2 si el numero es mayor a 7", () => {
    //Arrange
    const numeroEsperado = 10;
    const numero = 8;
    //Act
    const resultado = numeroCarta(numero);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Si el numero es 0 debe sumar +1", () => {
    //Arrange
    const numeroEsperado = 1;
    const numero = 0;
    //Act
    const resultado = numeroCarta(numero);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });

   it("Devuelve un 5 si recibe un 5", () => {
    //Arrange
    const numeroEsperado = 5;
    const numero = 5;
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
    const valor = 0.5;
    // Act
    const resultado = obtenerPuntosCarta(numero);
    //Assert
    expect(resultado).toBe(valor);
  });

    it("Devuelve el mismo valor que recibe", () => {
    //Arrange
    const numero = 7;
    const valor = 7;
    // Act
    const resultado = obtenerPuntosCarta(numero);
    //Assert
    expect(resultado).toBe(valor);
  });

    it("Devuelve 0 si el numero es 8 o 9", () => {
    //Arrange
    const numero = 8;
    const valor = 0;
    // Act
    const resultado = obtenerPuntosCarta(numero);
    //Assert
    expect(resultado).toBe(valor);
  });
});

describe("sumarPuntuacicon", () => {
  it("Suma el valor numerico de la carta a la puntuación, si obtenemos la carta 2, debemos sumar 2 a la puntuacion inicial o actual.", () => {
    //Arrange
    partida.puntuacionInicial = 4;
    const cartaObtenida = 2;
    //Act
    const resultado = sumarPuntuacion(cartaObtenida);
    //Assert
    expect(resultado).toBe(6);
  });
});

describe("actualizarPuntuacion", () => {
  it("Iguala el valor recibido con el de la puntuación.", () => {
    //Arrange
    const puntosSumados = 6;
    const puntuacion = 6;
    //Act
    const resultado = actualizarPuntuacion(puntosSumados);
    //Assert
    expect(resultado).toBe(puntuacion);
  });
});

describe("obtenerUrlCarta", () => {
  it("Tiene que devolver la url del numero de la carta correspondiente, si sale el numero 3, tiene que devolver la url de la carta 3.", () => {
    //Arrange
    const numeroCarta = 3;
    const url =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    //Act
    const resultado = obtenerUrlCarta(numeroCarta);
    //Assert
    expect(resultado).toBe(url);
  });
});
