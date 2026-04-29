//Todos los test los he hecho manualmente para seguir practicando

import {
  tieneCaracteresEspeciales,
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./main.helper";

describe("tieneMayusculasYMinusculas", () => {
  it("Devuelve True si la clave contiene mínimo mayuscula", () => {
    //Arrange
    const claveConUnaMayuscula = "abcEfghi";
    const ok = { esValida: true };

    //Act
    const resultado = tieneMayusculasYMinusculas(claveConUnaMayuscula);
    //Assert
    expect(resultado).toEqual(ok);
  });

  it("Devuelve True si la clave contiene mínimo mayuscula", () => {
    //Arrange
    const claveConUnaMinuscula = "ABCDEFGHi";
    const ok = { esValida: true };
    //Act
    const resultado = tieneMayusculasYMinusculas(claveConUnaMinuscula);
    //Assert
    expect(resultado).toEqual(ok);
  });
});

describe("tieneNumeros", () => {
  it("Devuelve true si la clave contiene como mínimo un numero", () => {
    //Arrange

    const claveConUnNumero = "abcdfghi4";
    const ok = { esValida: true };

    //Act
    const resultado = tieneNumeros(claveConUnNumero);

    //Assert

    expect(resultado).toEqual(ok);
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("Devuelve true si la clave contiene como mínimo un caracter especial", () => {
    //Arrange
    const caracteresEspeciales = " %&$!";
    const ok = { esValida: true };
    //Act
    const result = tieneCaracteresEspeciales(caracteresEspeciales);

    //Assert

    expect(result).toEqual(ok);
  });
});

describe("tieneLongitudMinima", () => {
  it("Devuelve true si la clave és de longitud mínima o igual a 8", () => {
    //Arrange
    const claveDe8 = "12345678";
    const ok = { esValida: true };
    //Act
    const result = tieneLongitudMinima(claveDe8);

    //Assert

    expect(result).toEqual(ok);
  });
});

describe("tieneNombreUsuario", () => {
  it("Devuelve false si la clave contiene el nombre de usuario", () => {
    //Arrange
    const nombreUsuario = "clave";
    const clave = "clave23";
    const ok = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
    //Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);
    //Assert
    expect(resultado).toEqual(ok);
  });
});

describe("tienePalabrasComunes", () => {
  it("Devuelve false si al clave contiene alguna de las palabras comunes", () => {
    const palabrasComunes = ["password", "123456", "qwerty", "admin"];
    const clave = "ClaveDeAdmin";
    const ok = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
    //Act
    const resultado = tienePalabrasComunes(clave, palabrasComunes);
    //Assert
    expect(resultado).toEqual(ok);
  });
});
