export const commonPasswords: string[] = [
  "password",
  "123456",
  "qwerty",
  "admin",
  "letmein",
  "welcome",
  "monkey",
  "sunshine",
  "password1",
  "123456789",
  "football",
  "iloveyou",
  "1234567",
  "123123",
  "12345678",
  "abc123",
  "qwerty123",
  "1q2w3e4r",
  "baseball",
  "password123",
  "superman",
  "987654321",
  "mypass",
  "trustno1",
  "hello123",
  "dragon",
  "1234",
  "555555",
  "loveme",
  "hello",
  "hockey",
  "letmein123",
  "welcome123",
  "mustang",
  "shadow",
  "12345",
  "passw0rd",
  "abcdef",
  "123abc",
  "football123",
  "master",
  "jordan23",
  "access",
  "flower",
  "qwertyuiop",
  "admin123",
  "iloveyou123",
  "welcome1",
  "monkey123",
  "sunshine1",
  "password12",
  "1234567890",
];
export interface ValidacionClave {
  esValida: boolean;
  error?: string;
}
//Al no encontrar una solución por mi mismo, empeze a leer el siguiente modulo de Expresiones Regulares y enseguida me dio la solución
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const tieneMayuscula = /[A-Z]/.test(clave);
  const tieneMinuscula = /[a-z]/.test(clave);

  if (tieneMayuscula && tieneMinuscula) {
    return { esValida: true };
  }
  return {
    esValida: false,
    error: "La clave debe de tener mayúsculas y minúsculas",
  };
};

// 2. Validar si tiene numeros
export const tieneNumeros = (clave: string): ValidacionClave => {
  const tieneNumero = /\d/.test(clave);
  return tieneNumero
    ? { esValida: true }
    : { esValida: false, error: "La clave debe de tener números" };
};

// 3. Validar caracteres especiales
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const caracteresEspeciales = /[@#+_!$%^&*()<>?/\|}{~:]/.test(clave);
  return caracteresEspeciales
    ? { esValida: true }
    : {
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
      };
};

// 4. Validar longitud mínima
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  return clave.length >= 8
    ? { esValida: true }
    : {
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
      };
};

// 5. Validar que no contenga el nombre de usuario
export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string,
): ValidacionClave => {
  const contieneNombre = clave
    .toLowerCase()
    .includes(nombreUsuario.toLowerCase());
  return !contieneNombre
    ? { esValida: true }
    : {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      };
};

// 6. Validar palabras comunes
export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[],
): ValidacionClave => {
  //Esta linea ha sido con ayuda
  const palabraCoincide = commonPasswords.some((pass) =>
    clave.toLowerCase().includes(pass.toLowerCase()),
  );
  return !palabraCoincide
    ? { esValida: true }
    : {
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
      };
};
