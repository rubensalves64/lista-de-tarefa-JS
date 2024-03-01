let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

function renderTarefas() {
  listElement.innerHTML = "";
  tarefas.map((todo) => {
    let liElement = document.createElement("li");
    let tarefasText = document.createTextNode(todo);

    liElement.appendChild(tarefasText);
    listElement.appendChild(liElement);
  });
}

function adicionarTarefas(event) {
  if (inputElement.value === "") {
    alert("digite alguma coisa");
    return false;
  } else {
    let novaTarefa = inputElement.value;

    tarefas.push(novaTarefa);
    inputElement.value = "";
    renderTarefas();
  }
}
buttonElement.onclick = adicionarTarefas;
