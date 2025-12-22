let turnoInicial = 0;

const actualizarTurno = () => {
  const elementoTurno = document.getElementById("numero-turno");
  if (
    elementoTurno !== null &&
    elementoTurno !== undefined &&
    elementoTurno instanceof HTMLHeadingElement
  ) {
    elementoTurno.innerText = turnoInicial.toString().padStart(2, "0");
  }
};

const siguiente = () => {
  turnoInicial++;
  actualizarTurno();
};

const anterior = () => {
  if (turnoInicial >= 0) {
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

const inputText = () => {
  const nodoInputText = document.getElementById("custom");
  if (
    nodoInputText !== null &&
    nodoInputText !== undefined &&
    nodoInputText instanceof HTMLInputElement
  ) {
    const valorNodoInputText = nodoInputText.value;
    turnoInicial = parseInt(valorNodoInputText);
    actualizarTurno();
  }
};

const btnEnviar = document.getElementById("submit");
if (
  btnEnviar !== null &&
  btnEnviar !== undefined &&
  btnEnviar instanceof HTMLInputElement
) {
  btnEnviar.addEventListener("click", () => {
    inputText();
  });
}
