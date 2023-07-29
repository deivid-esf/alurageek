import { acessoApi } from "./acessaApi.js";

async function exibeElemento (elemento){
  const produtoDiv = document.querySelector(`[data-produtos-${elemento}]`)
  const lista = await acessoApi.filtraCategoria(elemento);

  lista.forEach(produto => {
    produtoDiv.innerHTML += `
    <div class="produto">
    <img src="${produto.imagem}" alt="Caneca" class="produto__imagem">
    <p class="produto__nome">${produto.name}</p>
    <p class="produto__preco">R$ ${produto.preco}</p>
    <a href="" class="produto__link">Ver produto</a>
  </div>
    `
  })
  
  console.log(lista)
}

exibeElemento('star')
exibeElemento('consoles')
exibeElemento('diversos')