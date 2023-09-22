import { todoService } from "./todo-service.js";
import { fillTable } from "./todo-table-component.js";

async function onload() {
  const hello = document.getElementById("hello");
  hello.innerHTML = "hello world";
  const todos = await todoService.getAll();
  console.log("Todos: ", todos);
  fillTable(todos);
}

// Function
window.addEventListener("DOMContentLoaded", onload);

// inline Function
