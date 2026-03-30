const commonPasswords: string[] = [
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
interface ValidacionClave {
  esValida: boolean;
  error?: string;
}

/*
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
   if(clave){
        throw new Error ("La clave debe de tener mayúsculas y minúsculas")
}
}
export const tieneNumeros = (clave: string): ValidacionClave => {
    const numeros = [1,2,3,4,5,6,7,8,9,0]
    numeros.some((numero) => {
   if(clave !== numero){
        throw new Error ("La clave debe de tener números")
    }
    })
 
}
*///------------------------------------------------------------------------------------
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const caracteresEspeciales = "(@,#,+, _, ...,!,|,$,~,%,€,&,¬./,(,?,¿,)";
  if (clave !== clave[caracteresEspeciales]) {
    return {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };
  }
  return {esValida:true}
};
console.log(tieneCaracteresEspeciales("hol@"))
//---------------------------------------------------------------------------------------
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length < 8) {
    return {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };
  }
  return { esValida: true };
};
console.log(tieneLongitudMinima("1234567"));
export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string,
): ValidacionClave => {
  if (clave === nombreUsuario) {
    return {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
  }
  return { esValida: true };
};
console.log(tieneNombreUsuario("Tashi", "Tashi"));

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[],
): ValidacionClave => {
  const esComun = commonPasswords.some(
    (palabra) => clave.toLowerCase() === palabra.toLowerCase(),
  );

  if (esComun) {
    return {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
  }

  return { esValida: true };
};

console.log(tienePalabrasComunes("shadow", commonPasswords));

//------------ Los throws iran en la funcion principal en caso de que !FunciónEjemplo
