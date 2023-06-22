import { ControladoraCalculadora } from "./controladora-calculadora.js";

window.addEventListener("DOMContentLoaded", () => {
  const controladora = new ControladoraCalculadora();
  controladora.iniciar();
});
