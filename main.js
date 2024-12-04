
function verificarCampos() {
    let campoA = parseFloat (document.getElementById('NA').value); //pegamos os valores dos inputs usando o document.getelementbyid
    let campoB = parseFloat (document.getElementById('NB').value); // parsefloat analisa uma string e retorna um valor de ponto flutuante, ou seja não é um número exato
    const mensagem = document.getElementById('mensagem'); //const mensagem = document.getElementById('mensagem'): Essa linha pega o elemento HTML com o id mensagem (que é o parágrafo <p id="mensagem">) e o armazena na variável mensagem. Isso permite que você modifique o conteúdo e o estilo desse parágrafo diretamente no JavaScript.

    if (campoB > campoA) {
        mensagem.textContent = 'Campo B é maior que campo A';    //A comparação entre os dois valores é feita para verificar se A é maior que B, e a mensagem adequada é exibida no parágrafo (<p>) com o ID mensagem.
        mensagem.style.color = 'green';
    } else if (campoB < campoA) {
        mensagem.textContent = 'Campo B é menor que campo A';  //A cor da mensagem também é alterada para indicar o resultado (verde para "A > B", vermelho para "A < B" e laranja para "A == B").
        mensagem.style.color= 'red';
    } else {
        mensagem.textContent = 'campo A e b são iguais';
        mensagem.style.color = 'orange';
    }

}

