function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById(container);
    let cartao = document.createElement('article');
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="cartao__conteudo">
                    <h3>Filmes</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>Nome do filme da franquia Velozes e Furiosos que se passa em Tóquio?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>Velozes e Furiosos Desafio em Tóquio</p>
                    </div>
                </div>
    `

    container.appendChild(cartao);
}