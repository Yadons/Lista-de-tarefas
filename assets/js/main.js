function meuEscopo (){

const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const Tarefas = document.querySelector('.tarefas');

function criaLi() { 
    const lista = document.createElement('li');
    return lista;
};

inputTarefa.addEventListener('keypress', function(event) { 
    if(event.keyCode === 13) { 
        
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); 
};

function criaBotaoApagar (li) { 
    li.innerText += ' ';
    const criaBotaoApagar = document.createElement('button');
    criaBotaoApagar.innerText = 'Limpar';
    criaBotaoApagar.setAttribute('class', 'apagar'); 
    li.appendChild(criaBotaoApagar);
};


function criaTarefa(textoInput) { 
    li.innerText = textoInput; 
    Tarefas.appendChild(li); 
    limpaInput();
    criaBotaoApagar(li);
    salvarLista();
};

btnTarefa.addEventListener('click', function() { 
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    
});

document.addEventListener('click', function (e) { 
    const el = e.target;
    if(el.classList.contains('apagar')) {
        el.parentElement.remove(); 
        salvarLista();
    }
});

function salvarLista() {
    const liTarefas = Tarefas.querySelectorAll('li');
    const  listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Limpar','').trim(); 
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); 
    localStorage.setItem('tarefas', tarefasJSON); 
};

function adicionaTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas'); 
    const listaDeTarefas = JSON.parse(tarefas); 

    for (let tarefa of listaDeTarefas ) { 
        criaTarefa(tarefa);
    }
};

adicionaTarefasSalvas ();

};

meuEscopo();