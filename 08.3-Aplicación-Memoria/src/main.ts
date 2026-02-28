import { EmpezarPartida, mapearDivsCarta } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  mapearDivsCarta();
  const btn = document.getElementById("empezarPartida");
  btn?.addEventListener("click", EmpezarPartida);
});
