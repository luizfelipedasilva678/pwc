import { TasksService } from "./TasksService.js";
import { TasksServiceError } from "./TaskServiceError.js";
import { API } from "../constants/index.js";

export class TasksServiceRestApi extends TasksService {
  async getAllTasks() {
    try {
      const resp = await fetch(`${API}/tasks`);

      return resp.json();
    } catch (error) {
      throw new TasksServiceError(error.message);
    }
  }

  async getTaskById(taskId) {
    try {
      const resp = await fetch(`${API}/tasks/${taskId}`);

      return resp.json();
    } catch (error) {
      throw new TasksServiceError(error.message);
    }
  }

  async removeTask(taskId) {
    try {
      const resp = await fetch(`${API}/tasks/${taskId}`, {
        method: "DELETE",
      });

      return resp.json();
    } catch (error) {
      throw new TasksServiceError(error.message);
    }
  }

  async updateTask(task) {
    try {
      const resp = await fetch(`${API}/tasks/${task.id}`, {
        method: "PUT",
        body: JSON.stringify({ ...task }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return resp.json();
    } catch (error) {
      throw new TasksServiceError(error.message);
    }
  }

  async registerTask(task) {
    try {
      const resp = await fetch(`${API}/tasks`, {
        method: "POST",
        body: JSON.stringify({ ...task }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return resp.json();
    } catch (error) {
      throw new TasksServiceError(error.message);
    }
  }
}
