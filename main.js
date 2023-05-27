$(document).ready(function() {
    const tarefas = [];
    const listaTarefas = $('#informaçao-lista');

    $('form').on('submit', function(e) {
        e.preventDefault();

        adicionarTarefa();
    });

    listaTarefas.on('click', 'li', function() {
        $(this).toggleClass('#informaçao-lista');
    });

    function adicionarTarefa() {
        const novaTarefa = $('#tarefa-nova').val().trim();

        if (novaTarefa === '') {
        alert('Por favor, digite uma tarefa válida.');
        return;
    }

        if (tarefas.includes(novaTarefa)) {
        alert(`A tarefa "${novaTarefa}" já foi adicionada.`);
        return;
    }

        const novoItem = $('<li>').text(novaTarefa);
        novoItem.click(function() {
        $(this).toggleClass('completed');
    });

        listaTarefas.append(novoItem);
        tarefas.push(novaTarefa);
    
        $('#tarefa-nova').val('');

    }
});

