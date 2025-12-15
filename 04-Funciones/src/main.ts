let turnoInicial = 0;

const actualizarTurno = () => {
  const elementoTurno = document.getElementById("numero-turno");
  if (
    elementoTurno !== null &&
    elementoTurno !== undefined &&
    elementoTurno instanceof HTMLHeadingElement
  ) {
    elementoTurno.textContent = turnoInicial.toString().padStart(2, "0");
  }
};

const siguiente = () => {
  turnoInicial = turnoInicial + 1;
  actualizarTurno();
};

const anterior = () => {
  if (turnoInicial > 0) {
    turnoInicial = turnoInicial - 1;
    actualizarTurno();
  }
};

const btnSiguiente = document.getElementById("siguiente-turno");
if (
  btnSiguiente !== null &&
  btnSiguiente !== undefined &&
  btnSiguiente instanceof HTMLInputElement
) {
  btnSiguiente.addEventListener("click", () => {
    siguiente();
  });
}

const btnAnterior = document.getElementById("turno-anterior");
if (
  btnAnterior !== null &&
  btnAnterior !== undefined &&
  btnAnterior instanceof HTMLInputElement
) {
  btnAnterior.addEventListener("click", () => {
    anterior();
  });
}

const btnReset = document.getElementById("reset");
if (
  btnReset !== null &&
  btnReset !== undefined &&
  btnReset instanceof HTMLInputElement
) {
  btnReset.addEventListener("click", () => {
    turnoInicial = 0;
    actualizarTurno();
  });
}

const customText = () => {
  const nodoCustomText = document.getElementById("custom");
  if (
    nodoCustomText !== null &&
    nodoCustomText !== undefined &&
    nodoCustomText instanceof HTMLInputElement
  ) {
    const valorNodoCustomText = nodoCustomText.value;
    turnoInicial = parseInt(valorNodoCustomText);
    actualizarTurno();
  }
};

const btnIngresarTurno = document.getElementById("submit");
if (
  btnIngresarTurno !== null &&
  btnIngresarTurno !== undefined &&
  btnIngresarTurno instanceof HTMLInputElement
) {
  btnIngresarTurno.addEventListener("click", () => {
    customText();
  });
}


