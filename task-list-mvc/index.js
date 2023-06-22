import { TaskViewController } from "./controller/TaskViewController.js";

window.addEventListener("DOMContentLoaded", () => {
  const controller = new TaskViewController();
  controller.iniciar();
});
