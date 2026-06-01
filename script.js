 
//01 - precisar pegar o texto dentro da caixa de texto - que ocorre quando o botão adicinar é clicdo //
//02 - saber quando o botão adicinar foi clicado //
//03 - após o botão clicado, adicionar o texto digitado na lista //
//04 - deletar a tarefa da lista quando o emoji for clicado //


function adicionarTarefa(){
    let tarefaAdicionada = document.querySelector("input").value;
    
    let listaDeTarefa = document.createElement("li");
    listaDeTarefa.innerHTML= tarefaAdicionada + '<span onclick="deletarTarefa(this)">✅</span>';

    document.querySelector("ul").appendChild(listaDeTarefa);
    document.querySelector("input").value = "";
}

function deletarTarefa(listaDeTarefa){
    listaDeTarefa.parentElement.remove()
}