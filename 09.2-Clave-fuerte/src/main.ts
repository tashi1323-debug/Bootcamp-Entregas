import {
  tieneNumeros,
  tieneMayusculasYMinusculas,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
  ValidacionClave,
  commonPasswords
} from "./main.helper";

const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {

  const validaciones = [
    tieneLongitudMinima(clave),
    tieneMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneCaracteresEspeciales(clave),
    tieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords)
  ];

 
  const errorEncontrado = validaciones.find(clave => !clave.esValida);


  return errorEncontrado ? errorEncontrado : { esValida: true };
};

console.log(validarClave("tashi","ClavePrueba1!",  commonPasswords))
