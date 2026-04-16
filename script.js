function updateCounter() {
    // Pega todas as tarefas
    let tasks = document.querySelectorAll("#taskList li");

    // Pega apenas as concluídas
    let completed = document.querySelectorAll(".completed");

    // Atualiza tarefas pendentes
    document.getElementById("pendingCount").textContent =
        tasks.length - completed.length;

    // Atualiza tarefas concluídas
    document.getElementById("completedCount").textContent =
        completed.length;
}

function addTask() {
    // Campo de digitar tarefa
    let input = document.getElementById("taskInput");

    // Remove espaços extras
    let taskText = input.value.trim();

    // Validação do campo vazio
    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }

    // Cria item da lista
    let li = document.createElement("li");

    // Texto da tarefa
    let span = document.createElement("span");
    span.textContent = taskText;

    // Área dos botões
    let buttonArea = document.createElement("div");
    buttonArea.classList.add("task-buttons");

    // Botão de status
    let statusBtn = document.createElement("button");
    statusBtn.textContent = "Feita";
    statusBtn.classList.add("status-btn");

    // Alterna entre feita e não feita
    statusBtn.onclick = function () {
        span.classList.toggle("completed");

        if (span.classList.contains("completed")) {
            statusBtn.textContent = "Não feita";
        } else {
            statusBtn.textContent = "Feita";
        }

        updateCounter();
    };

    // Botão excluir
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir";
    deleteBtn.classList.add("delete-btn");

    // Remove tarefa
    deleteBtn.onclick = function () {
        li.remove();
        updateCounter();
    };

    // Adiciona botões
    buttonArea.appendChild(statusBtn);
    buttonArea.appendChild(deleteBtn);

    // Monta a tarefa completa
    li.appendChild(span);
    li.appendChild(buttonArea);

    // Adiciona na lista
    document.getElementById("taskList").appendChild(li);

    // Limpa campo
    input.value = "";

    // Atualiza contador
    updateCounter();
}