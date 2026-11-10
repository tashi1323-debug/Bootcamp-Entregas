import {
  datosBanco,
  patronIban,
  bancos,
  ValidacionFinalIban,
  InformacionIban,
} from "./mainApartadoA.helper";
import { isValidIBAN } from "ibantools";

const limpiarIban = (iban: string) => iban.replace(/[\s-]/g, "");

const validarFormatoIban = (iban: string): ValidacionFinalIban => {
  const ibanNormalizado = limpiarIban(iban);
  const test = patronIban.test(ibanNormalizado);
  if (!test) {
    return { esValido: false, error: "El formato no és valido." };
  }
  return { esValido: true };
};

const extraerDatosIban = (iban: string): datosBanco | null => {
  const ibanValido = limpiarIban(iban);
  const match = ibanValido.match(patronIban);

  if (!match) {
    return null;
  }
  const codigoDePais = match[1];
  const digitoControl = match[2];
  const codigoDeBanco = match[3];
  const codigoSucursal = match[4];
  const segundoDigitoDeControl = match[5];
  const numeroCuenta = match[6];
  const nombreBanco = bancos[codigoDeBanco];
  return {
    codigoDePais,
    digitoControl,
    codigoDeBanco,
    nombreBanco,
    codigoSucursal,
    segundoDigitoDeControl,
    numeroCuenta,
  };
};

const mostrarInformacionIban = (iban: string): InformacionIban | null => {
  const datos = extraerDatosIban(iban);
  if (!datos) return null;
  return {
    banco: datos.nombreBanco,
    codigoDePais: datos.codigoDePais,
    digitoDeControl: datos.digitoControl,
    sucursal: datos.codigoSucursal,
    segundoDigitoDeControl: datos.segundoDigitoDeControl,
    cuenta: datos.numeroCuenta,
  };
};
mostrarInformacionIban("ES2114650100722030876293");
const validarIbanReal = (iban: string): boolean => {
  const ibanValido = limpiarIban(iban);
  return isValidIBAN(ibanValido);
};

const validarIban = (iban: string): ValidacionFinalIban => {
  const validacionFormato = validarFormatoIban(iban);
  if (!validacionFormato.esValido) {
    return validacionFormato;
  }
  const ibanReal = validarIbanReal(iban);
  if (ibanReal) {
    return { esValido: true };
  }
  return { esValido: false, error: "El Iban no és correcto." };
};
validarIban("ES2114650100722030876293");
