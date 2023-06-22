import { ControladoraIMC } from "./controladora-imc.js";

window.addEventListener("DOMContentLoaded", () => {
  const controladora = new ControladoraIMC();
  controladora.iniciar();
});
