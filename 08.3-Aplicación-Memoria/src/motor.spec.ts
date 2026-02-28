/*
import { Tablero, tablero } from "./modelo";
import {
  parejaEncontrada,
  resetIndices,
  sePuedeVoltear,
  sonPareja,
} from "./motor";

describe("sonPareja", () => {
  it("Devuelve true si las dos idFoto son iguales, false si son diferentes", () => {
    //Arrange
    const positivo = true;
    const negativo = false;
    const numero1 = 2;
    const numero2 = 2;
    //Act
    const resultado = sonPareja(numero1, numero2, tablero);
    //Assert

    expect(resultado).toBe(positivo);
  });
});

describe("ParejaEncontrada", () => {
  (it("Cambia la propiedad .encontrada a true"),
    () => {
      //Arrange
      const carta1 = tablero.indiceCartaVolteadaA!;
      const carta2 = tablero.indiceCartaVolteadaB!;
      const estado = true;

      //Act
      const resultado = parejaEncontrada(tablero, carta1, carta2);

      //Assert

      expect(resultado).toBe(estado);
    });
});

describe("resetIndices", () => {
  it("Cambia el indiceCartaVolteadaA y el B a undefined, y pone el tablero.estadoPartida a CeroCartasLevantadas", () => {
    //Arrange

    const estado = tablero.estadoPartida === "CeroCartasLevantadas";
  
    //Act
    const resultado = resetIndices(tablero);
    //Assert
    expect(resultado).toBe(estado);
  });
});

describe("sePuedeVoltear", () => {
  it("Devuelve True si la carta esta disponible, si no hay dos cartas levantadas y si el tablero tiene cero o una carta levantada", () => {
    //Arrange
    const indice = 11;
    const positivo = true;
    const negativo = false;
    //Act
    const resultado = sePuedeVoltear(tablero, indice);
    //Assert
    expect(resultado).toBe(negativo);
  });
}); */
