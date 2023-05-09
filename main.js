//Criando as variáveis e constantes
const form = document.getElementById('form-formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const errorCampoA = `O valor desse campo deve ser <b>MENOR</b> ao <b>campo B</b>`;
const mensagemSucesso = 'Formulário enviado!';
const containerMensagemError = document.querySelector('.error-messege');
const containerMensagemSucesso = document.querySelector('.success-message');

//Retirando o recarregamento automático da página
form.addEventListener('submit', function(e){
    e.preventDefault();


    //Obtendo os valores dos campos e convertendo para números inteiros
    const campoAinteiro = parseInt(campoA.value);
    const campoBinteiro = parseInt(campoB.value);
    
    
    //Validação do formulário
    if (campoAinteiro >= campoBinteiro) {
        containerMensagemError.innerHTML = errorCampoA;
        containerMensagemError.style.display = 'block';
        campoA.style.border = '1px solid red'
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'none';
    
    } else {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemError.style.display = 'none'; // oculta a mensagem de erro
        campoA.style.border = '1px solid black'; // remove a borda vermelha do campo A

        campoA.value = '';
        campoB.value = '';
        
    }
});







