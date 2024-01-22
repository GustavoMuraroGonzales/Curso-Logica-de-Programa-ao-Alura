let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('P', 'Escolha um número entre 1 e 100');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemtentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemtentativas);
    }else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
    }

}

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 100 + 1);

}