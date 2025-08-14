let carrinho = [];
let total = 0;

function adicionarCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    lista.innerHTML = "";
    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
    });

    document.getElementById("total").textContent = total.toFixed(2);

    const numeroWhatsApp = "5511999999999"; // Trocar pelo número real
    let mensagem = "Olá, quero finalizar meu pedido:%0A";
    carrinho.forEach(item => {
        mensagem += `- ${item.produto} - R$ ${item.preco.toFixed(2)}%0A`;
    });
    mensagem += `Total: R$ ${total.toFixed(2)}`;
    document.getElementById("finalizar").href = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
}
