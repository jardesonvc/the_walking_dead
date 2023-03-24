//OBJETIVO - quando clicarmos no botao temos que mostrar a img de fundo correspondente.

// 1 - dar um jeito de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
// 6
const imagens = document.querySelectorAll('.imagem');

// 2 - dar um jeito de identificar o clique do usuário no botao
// Um metodo para identificar cliques é o: addEventListener
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        // 3 - desmarcar o botao selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        // 4 - marcar o botao clicado cm se tivesse selecionado
        botao.classList.add('selecionado');
        // 5 - esconder a img ativa de fundo anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        // 6 - fazer aparecer a img de fundo correspondente ao botao clicado
        imagens[indice].classList.add('ativa');
    })
})
