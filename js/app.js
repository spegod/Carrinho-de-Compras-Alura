function adicionar () {

    let produtoCompleto = document.getElementById('produto').value;
    let nomeProduto = produtoCompleto.match(/^\S+\s*/)[0];
    let valorProduto = produtoCompleto.match(/R\$(\d+)/)[1];
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let valor = valorProduto * quantidade
    
    if (quantidade < 1 || document.getElementById('quantidade').value === '') {
        alert('Erro: quantidade inválida');
        document.getElementById('quantidade').value = ''
        return;
    }

    console.log(`${valorProduto} x ${quantidade} = ${valor}`);

    adicionarNaLista (quantidade, nomeProduto, valorProduto);

    somarNoTotal (quantidade, valorProduto);

    document.getElementById('quantidade').value = ''

}

function adicionarNaLista (qtd, nome, valor) {
    let listaDeProdutosHTML = document.querySelector('.carrinho__produtos__produto');
    let subtotal = qtd * valor;
    listaDeProdutosHTML.innerHTML += `<br><span class="texto-azul">${qtd}x</span> ${nome} <span class="texto-azul">R$${subtotal}</span>`
}

function somarNoTotal (qtd, valor) {
    let valorTotalBruto = document.querySelector('.carrinho__total');
    let valorTotalInicial = parseInt(valorTotalBruto.textContent.match(/\d+/)[0]);
    let valorTotalFinal = valorTotalInicial + (qtd * valor);
    valorTotalBruto.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${valorTotalFinal}</span>`;
    console.log(valorTotalBruto);
}

function limpar () {
    document.querySelector('.carrinho__produtos__produto').innerHTML = '';
    document.querySelector('.carrinho__total').innerHTML = `Total: <span class="texto-azul" id="valor-total">R$0</span>`;
}