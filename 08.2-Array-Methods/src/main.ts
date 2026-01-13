type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//Apartados obligatorios

// 1) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

const extraerPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatria = pacientes.filter(
    (pacientes) => pacientes.especialidad === "Pediatra"
  );
  return pacientesPediatria;
};
console.log(extraerPacientesAsignadosAPediatria(pacientes));

// 2) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const extraerPacientesAsignadosAPediatriaMenorDeDiezAños = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatria = pacientes.filter(
    (pacientes) => pacientes.especialidad === "Pediatra" && pacientes.edad < 10
  );
  return pacientesPediatria;
};
console.log(extraerPacientesAsignadosAPediatriaMenorDeDiezAños(pacientes));

// 3) Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.*/

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  const pacientesEnRiesgo = pacientes.filter(
    (pacientes) =>
      pacientes.frecuenciaCardiaca > 100 && pacientes.temperatura > 39
  );
  if (pacientesEnRiesgo) {
    activarProctolo = true;
  }

  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes));

// 4) El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesReasignados = pacientes.map((pacientes) => {
    if (pacientes.especialidad === "Pediatra") {
      pacientes.especialidad = "Medico de familia";
    }
    return pacientes;
  });
  return pacientesReasignados;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

// 5) Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const pacientesPediatria = pacientes.some(
    (pacientes) => pacientes.especialidad === "Pediatra"
  );
  return pacientesPediatria;
};
console.log(HayPacientesDePediatria(pacientes));

/*Apartados opcionales
Apartado 5
6) Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología
*/
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const numeroTotal: NumeroPacientesPorEspecialidad = pacientes.reduce(
  (acumulador, paciente) => {
    if (paciente.especialidad === "Medico de familia") {
      acumulador.medicoDeFamilia++;
    } else if (paciente.especialidad === "Pediatra") {
      acumulador.pediatria++;
    } else if (paciente.especialidad === "Cardiólogo") {
      acumulador.cardiologia++;
    }
    return acumulador;
  },
  { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0 }
);
console.log(numeroTotal);
