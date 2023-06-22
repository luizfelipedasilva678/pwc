export class TaksView {
  getDescription() {
    return document.getElementById("descricao").value;
  }

  getFinish() {
    return document.getElementById("terminou").checked;
  }

  drawTasks(tasks) {
    const tbody = document.getElementById("tasks-list");

    const trs = tasks
      .map((task) => {
        return `
        <tr>
          <td> ${task.id} </td>
          <td> ${task.descricao} </td>
          <td> ${task.fechada ? "✅" : "❌"}  </td>
          <td> 
            <button data-action="edit">Editar</button> 
            <button data-task=${task.id} data-action="delete">Deletar</button>
          </td>
        </tr>
      `;
      })
      .join("");

    tbody.innerHTML = trs;
  }

  onDeleteButtonClick(fn) {
    const tbody = document.getElementById("tasks-list");

    tbody.addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target.dataset.action === "delete") {
        fn(e.target.dataset.task);
      }
    });
  }

  onEditButtonClick() {
    const tbody = document.getElementById("tasks-list");
    const addBtn = document.getElementById("add-task-btn");
    const editBtn = document.getElementById("edit-task-btn");
    const cancelEditionBtn = document.getElementById("cancel-edition-btn");

    tbody.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target;

      if (target.dataset.action === "edit") {
        const tds = Array.from(target.parentElement.parentElement.children);
        document.getElementById("descricao").value = tds[1].innerText;
        document.getElementById("terminou").checked =
          tds[2].innerText === "✅" ? true : false;
        addBtn.style.display = "none";
        editBtn.style.display = "inline-block";
        editBtn.setAttribute("data-task", tds[0].innerText);
        cancelEditionBtn.style.display = "inline-block";
      }
    });
  }

  onConfirmEditionButtonClick(fn) {
    const addBtn = document.getElementById("add-task-btn");
    const editBtn = document.getElementById("edit-task-btn");
    const cancelEditionBtn = document.getElementById("cancel-edition-btn");

    document.getElementById("edit-task-btn").addEventListener("click", (e) => {
      const target = e.target;
      fn(target.dataset.task);
      cancelEditionBtn.style.display = "none";
      editBtn.style.display = "none";
      addBtn.style.display = "inline-block";
      document.getElementById("descricao").value = "";
      document.getElementById("terminou").checked = false;
    });
  }

  onCancelEditionButtonClick() {
    const addBtn = document.getElementById("add-task-btn");
    const editBtn = document.getElementById("edit-task-btn");
    const cancelEditionBtn = document.getElementById("cancel-edition-btn");

    cancelEditionBtn.addEventListener("click", () => {
      cancelEditionBtn.style.display = "none";
      editBtn.style.display = "none";
      addBtn.style.display = "inline-block";
      document.getElementById("descricao").value = "";
      document.getElementById("terminou").checked = false;
    });
  }

  onAddButtonClick(fn) {
    document.getElementById("add-task-btn").addEventListener("click", (e) => {
      e.preventDefault();
      fn();
    });
  }
}
