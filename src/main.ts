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

const paciente: Pacientes[] = [
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

const pacientesAsignadoaPediatria = (paciente: Pacientes[]): Pacientes[] => {
  let pacientesEnPediatria: Pacientes[] = [];

  for (let i: number = 0; i < paciente.length; i++) {
    if (paciente[i].especialidad == "Pediatra") {
      pacientesEnPediatria.push(paciente[i]);
    }
  }
  return pacientesEnPediatria;
};

console.log(pacientesAsignadoaPediatria(paciente));

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  paciente: Pacientes[]
): Pacientes[] => {
  let pacientesEnPediatria: Pacientes[] = [];

  for (let i: number = 0; i < paciente.length; i++) {
    if (paciente[i].especialidad == "Pediatra" && paciente[i].edad < 10) {
      pacientesEnPediatria.push(paciente[i]);
    }
  }
  return pacientesEnPediatria;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(paciente));

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  for (let i: number = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
    }
  }

  return activarProctolo;
};

console.log(activarProtocoloUrgencia(paciente));

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i: number = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientes[i].especialidad = "Medico de familia";
    }
  }
  return pacientes;
};

// console.log(reasignaPacientesAMedicoFamilia(paciente));

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pediatraACasa: boolean = true;

  for (let i: number = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad !== "Pediatra") {
      return (pediatraACasa = false);
    }
  }
  return pediatraACasa;
};

console.log(HayPacientesDePediatria(paciente));

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const valoresPorDefecto: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  for (let i: number = 0; i < pacientes.length; i++) {
    switch (pacientes[i].especialidad) {
      case "Cardiólogo":
        valoresPorDefecto.cardiologia++;
        break;
      case "Medico de familia":
        valoresPorDefecto.medicoDeFamilia++;
        break;
      case "Pediatra":
        valoresPorDefecto.pediatria++;
        break;
    }
  }
  return valoresPorDefecto;
};

console.log(cuentaPacientesPorEspecialidad(paciente));
