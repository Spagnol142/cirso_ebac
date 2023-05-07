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
    
    } else {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
        
    }
});

    campoA.addEventListener('keyup', function(e) {
    console.log(e.target.value);

    if (campoAinteiro >= campoBinteiro) {
        campoA.classList.add('error')
        document.querySelector('.error-messege').style.display = 'block';
    } else {
        campoA.classList.remove('error')
        document.querySelector('.error-messege').style.display = 'none';
    }
});







