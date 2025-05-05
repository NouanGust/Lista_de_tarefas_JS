// Elementos HTML

let tarefa_input = document.getElementById("tarefa_input")
let add_tarefa = document.getElementById("add_tarefa")
let lista_tarefa = document.getElementById("lista_tarefa")
let mensagens = document.getElementById("mensagens")

add_tarefa.addEventListener('click', () => {
    let taskText = tarefa_input.value.trim()
    if(taskText !== ""){
        adicionar_tarefa(taskText)
        tarefa_input.value = ""
    }
})

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.forEach(task => {
        adicionar_tarefa(task.text, task.completed)
    })
}

function saveTaks() {
    const tasks = []

    lista_tarefa.querySelectorAll('li').forEach( (li) => {
        tasks.push({
            text: li.firstChild.textContent.trim(), 
            completed: li.classList.contains('completada')
        })
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Função de adicionar tarefas
function adicionar_tarefa(text, completed = false) {

    // Tratar input 
    //  text = tarefa_input.value.trim()

    // Caso exista texto

            // Criando Elementos da lista
            let li = document.createElement("li")
            li.textContent = text
            let completar_btn = document.createElement("button")
            completar_btn.innerText = "Completar"
            let deletar_btn = document.createElement("button")
            deletar_btn.innerText = "Deletar"
            deletar_btn.classList.add("deletar")
    
            // Completar tarefa
            completar_btn.addEventListener('click', () => {
                li.classList.toggle("completada")
                saveTaks()
            })
    
            if(completed) {
                li.classList.add('completada')
            }
    
            // Deletar tarefa
            deletar_btn.addEventListener('click', () => {
                li.remove()
                saveTaks()
            })
    
            // Appends

            li.appendChild(completar_btn)
            li.appendChild(deletar_btn)
            lista_tarefa.appendChild(li) 
            tarefa_input.value = ""

    saveTaks()
}

loadTasks()
