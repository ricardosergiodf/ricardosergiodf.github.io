// Atualiza automaticamente o ano mostrado no rodapé.
document.getElementById('ano-atual').textContent = new Date().getFullYear();

const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

// Mostra ou remove o erro de um campo do formulário.
function mostrarErro(campo, elementoErro, texto) {
    document.getElementById(elementoErro).textContent = texto;
    campo.classList.toggle('invalido', texto !== '');
}

function emailValido(valor) {
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formatoEmail.test(valor);
}

// Valida os três campos e simula o envio da mensagem.
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nomeDigitado = nome.value.trim();
    const emailDigitado = email.value.trim();
    const mensagemDigitada = mensagem.value.trim();
    let formularioValido = true;

    mensagemSucesso.textContent = '';

    if (nomeDigitado === '') {
        mostrarErro(nome, 'erro-nome', 'Por favor, informe seu nome.');
        formularioValido = false;
    } else {
        mostrarErro(nome, 'erro-nome', '');
    }

    if (emailDigitado === '') {
        mostrarErro(email, 'erro-email', 'Por favor, informe seu e-mail.');
        formularioValido = false;
    } else if (!emailValido(emailDigitado)) {
        mostrarErro(email, 'erro-email', 'Digite um e-mail válido.');
        formularioValido = false;
    } else {
        mostrarErro(email, 'erro-email', '');
    }

    if (mensagemDigitada === '') {
        mostrarErro(mensagem, 'erro-mensagem', 'Por favor, escreva uma mensagem.');
        formularioValido = false;
    } else {
        mostrarErro(mensagem, 'erro-mensagem', '');
    }

    if (formularioValido) {
        mensagemSucesso.textContent = 'Mensagem enviada com sucesso!';
        formulario.reset();
    }
});
