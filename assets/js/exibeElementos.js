import { acessoApi } from "./acessaApi.js";

const produtosContainer = document.querySelector("[data-produtos]");

function apagarProduto(produto) {
  produto.remove();
}

export default function exibeElementos (nome, preco, imagem, id){
  const produto = document.createElement("div");
  produto.className = "produto";

  produto.innerHTML = `
    <div class="produto">
    <img src="${imagem}" alt="Caneca" class="produto__imagem">
    <div class="produtos__botoes">
    <button class="produtos__botao" data-botao-edita><img src="./assets/img/editar.svg" ></button>
    <button class="produtos__botao" data-botao-apaga><img src="./assets/img/apagar.svg" ></button>
    </div>
    <p class="produto__nome">${nome}</p>
    <p class="produto__preco">R$ ${preco}</p>
    <p class="produto__id">#${id}</p>
  </div>
    `

    const botaoApaga = produto.querySelector("[data-botao-apaga]");
    botaoApaga.addEventListener("click", () => apagarProduto(produto));
  return produto;
}
function exibeElementosHome (nome, preco, imagem){
  const produto = document.createElement("div");
  produto.className = "produto";
  produto.innerHTML = `
    <div class="produto">
    <img src="${imagem}" alt="Caneca" class="produto__imagem">
    <p class="produto__nome">${nome}</p>
    <p class="produto__preco">R$ ${preco}</p>
    <a href="./produtos.html" class="produto__link">Ver produto</p>
  </div>
    `
  return produto;
}

async function listaDeProdutos() {
  try {
  const listaApi = await acessoApi.listaDeProdutos();
  listaApi.forEach(elemento => produtosContainer.appendChild(
      exibeElementos(elemento.name, elemento.preco, elemento.imagem, elemento.id)));
    console.log(listaApi.length)
  } catch{
      produtosContainer.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de produtos</h2>`
  }
}

listaDeProdutos()

export const exibicao = {
  exibeElementos,
  exibeElementosHome,
}