console.log('Tô funcionando!');

var tarefas = [];

var inputNovaTarefa = document.getElementById('inputNovaTarefa');

console.log(inputNovaTarefa, 'Este é inputNovaTarefa');

function addTarefa(){
    console.log('add Tarefa foi chamado!')
    console.log(inputNovaTarefa);
    let novaTarefa = inputNovaTarefa.value;
    
    tarefas.push(novaTarefa);

    inputNovaTarefa.value = '';

    mostrarTarefas();
}




function mostrarTarefas (){
    console.log('Mostrar tarefas foi chamado!');
    console.log(tarefas, "--> tarefas");

    var ulTarefas = document.getElementById('ulTarefas');
    console.log(ulTarefas.childNodes.length, 'ulTarefas.childNodes.length')
    
    //Limpar todas as Li de ulTarefas para poder renderizar todas as tarefas do Array tarefas
    ulTarefas.innerText = ''


    //Adicionar todas as tarefas do Array tarefas e os respectivos event listners.
    for (i=0; i<tarefas.length; i++){
        let tarefa = document.createElement('li');
        tarefa.innerHTML = `${tarefas[i]}<img class="btnDelete" src="imagens/lixeira-icone.png" alt="lixeira.png">`


        ulTarefas.append(tarefa); //-> Adiciona o item tarefa (li) à ulTarefas
        ulTarefas.childNodes[i].childNodes[1].style.visibility = 'hidden'; // -> Define o btnDelete como Hidden assim que ele é inserido no DOM
        ulTarefas.childNodes[i].childNodes[1].addEventListener('click', deletarTarefa); //->Adiciona o evento click à btnDelete
        ulTarefas.childNodes[i].addEventListener('mouseover', mostrarBtnDelete); // -> Adiciona o evento mouse over e chama a função mostrarBtnDelete
        ulTarefas.childNodes[i].addEventListener('mouseout', esconderBtnDelete); // -> Adiciona o evento mouse out e chama a função enconderBTnDelete
        ulTarefas.childNodes[i].addEventListener('dblclick', concluirTarefa);
    }  
    
}

function concluirTarefa() {
    this.style.textDecoration = 'line-through';
    this.style.backgroundColor = '#c6c6c6'
    this.style.color = '#666';

    console.log(this.childNodes, 'before')


    this.childNodes[1].remove();

    let btnArquivo = document.createElement('img');
    btnArquivo.setAttribute('class', 'btnDelete');
    btnArquivo.src = 'imagens/arquivo.png';
    btnArquivo.alt = 'arquivo.png';
    this.append(btnArquivo)

    

    console.log(this.childNodes, 'after')


}   


function mostrarBtnDelete (){  
    this.childNodes[1].style.visibility = 'visible';
}

function esconderBtnDelete (){
    this.childNodes[1].style.visibility = 'hidden';
}

function deletarTarefa(){
    var textoTarefa = this.parentNode.innerText;
    console.log(textoTarefa);

    tarefas.splice(tarefas.indexOf(textoTarefa),1);

    mostrarTarefas();
}

