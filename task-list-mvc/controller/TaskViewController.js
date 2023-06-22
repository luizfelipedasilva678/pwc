import { TasksServiceRestApi } from "../model/TaskServiceRestApi.js";
import { TaksView } from "../view/TasksView.js";

export class TaskViewController {
  constructor() {
    this.view = new TaksView();
    this.model = new TasksServiceRestApi();
  }

  async registerTask() {
    const description = this.view.getDescription();
    const isFinished = this.view.getFinish();
    await this.model.registerTask({
      descricao: description,
      fechada: isFinished,
    });
    this.drawTasks();
  }

  async updateTask(taskId) {
    const description = this.view.getDescription();
    const isFinished = this.view.getFinish();
    await this.model.updateTask({
      id: taskId,
      descricao: description,
      fechada: isFinished,
    });
    this.drawTasks();
  }

  async removeTask(taskId) {
    await this.model.removeTask(taskId);
    this.drawTasks();
  }

  async drawTasks() {
    const tasks = await this.model.getAllTasks();
    this.view.drawTasks(tasks);
  }

  iniciar() {
    this.drawTasks();
    this.view.onCancelEditionButtonClick();
    this.view.onEditButtonClick();
    this.view.onAddButtonClick(this.registerTask.bind(this));
    this.view.onDeleteButtonClick(this.removeTask.bind(this));
    this.view.onConfirmEditionButtonClick(this.updateTask.bind(this));
  }
}
