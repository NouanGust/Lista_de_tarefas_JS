// Elementos HTML

let tarefa_input = document.getElementById("tarefa_input")
let add_tarefa = document.getElementById("add_tarefa")
let lista_tarefa = document.getElementById("lista_tarefa")
let mensagens = document.getElementById("mensagens")


// Função de adicionar tarefas
function adicionar_tarefa() {

    // Tratar input 
    let tarefa_txt = tarefa_input.value.trim()

    // Caso exista texto
    if(tarefa_txt !== "") {
        // Criando Elementos da lista
        let li = document.createElement("li")
        let completar_btn = document.createElement("button")
        completar_btn.innerHTML = "Completar"
        let deletar_btn = document.createElement("button")
        deletar_btn.innerHTML = "Deletar"
        deletar_btn.classList.add("deletar")

        // Completar tarefa
        completar_btn.addEventListener('click', () => {
            li.classList.add("completada")
        })

        // Deletar tarefa
        deletar_btn.addEventListener('click', () => {
            li.remove()
        })

        // Appends
        li.innerHTML = tarefa_txt
        li.appendChild(completar_btn)
        li.appendChild(deletar_btn)
        lista_tarefa.appendChild(li) 
        tarefa_input.value = ""
        } else {
            mensagens.textContent = "Tarefa inválida"
        }
}
