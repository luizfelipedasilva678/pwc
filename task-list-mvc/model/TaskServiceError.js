export class TasksServiceError extends Error {
  constructor(message) {
    super(message);
    this.name = "TasksServiceError";
  }
}
