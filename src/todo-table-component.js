export function fillTable(todos) {
  todos.forEach(addRow);
}
function addRow(todo) {
  const body = document.querySelector("tbody");
  //   const template = document.getElementById("table-row");
  //   const row = template.content.cloneNode(true);

  //   body.appendChild(row);
  const row = body.insertRow();
  row.innerHTML = /*html*/ `<tr><td>${todo.id}</td><td>${todo.title}</td></tr>`;
}

class TodoTableComponent extends HTMLElement {
  async connectedCallback() {
    console.log("connected");
    const todos = await todoService.getAll();
  }
}
customElements.define("todo-table", TodoTableComponent);
