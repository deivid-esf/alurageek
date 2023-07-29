import { acessoApi } from "./acessaApi.js";

async function exibeElementos (){
  const produtoDiv = document.querySelector("[data-produtos]")
  const lista = await acessoApi.listaDeProdutos();

  lista.forEach(produto => {
    produtoDiv.innerHTML += `
    <div class="produto">
    <img src="${produto.imagem}" alt="Caneca" class="produto__imagem">
    <p class="produto__nome">${produto.name}</p>
    <p class="produto__preco">R$ ${produto.preco}</p>
    <p class="produto__id">#${produto.id}</p>
  </div>
    `
  })
  
  console.log(lista)
}

exibeElementos()