function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement ('article')
    cartao.className= 'cartao'




    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3 class="programacao">Futebol</h3>
    <div class="cartao__conteudo__pergunta">
       <p> quando foi a primeira partida da uefa champions league?</p>
    </div>
    <div class="cartao__conteudo__resposta">
     <p> 4 de setembro de 1955</p> 
    </div>
            </div>
            `
            container.appendChild(cartao)

}