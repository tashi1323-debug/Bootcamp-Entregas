const numeroTurno = document.getElementById(
  "numero-turno"
) as HTMLHeadingElement;
const btnSiguiente = document.getElementById(
  "siguiente-turno"
) as HTMLButtonElement;
const btnAnterior = document.getElementById(
  "turno-anterior"
) as HTMLButtonElement;
const btnReset = document.getElementById("reset") as HTMLButtonElement;

let inputText = document.getElementById("custom") as HTMLInputElement;
const inputSend = document.getElementById("submit") as HTMLButtonElement;

let turnoActual: number = 1;

function actualizarTurno(): void {
  if (numeroTurno != null) {
    numeroTurno.textContent = turnoActual.toString().padStart(2, "0");
  }
}

btnSiguiente.addEventListener("click", () => {
  turnoActual++;
  actualizarTurno();
});

btnAnterior.addEventListener("click", () => {
  if (turnoActual > 0) {
    turnoActual--;
    actualizarTurno();
  }
});

btnReset.addEventListener("click", () => {
  turnoActual = 0;
  actualizarTurno();
});

inputSend.addEventListener("click", () => {
  turnoActual = parseInt(inputText.value, 10);
  actualizarTurno();
});

actualizarTurno();
