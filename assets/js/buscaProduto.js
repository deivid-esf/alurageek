import { acessoApi } from "./acessaApi.js";
import exibeElementos from "./exibeElementos.js"

async function buscarVideo(e) {
  e.preventDefault();

  const termoPesquisado = document.querySelector("[data-pesquisa]").value;
  const busca = await acessoApi.buscaProduto(termoPesquisado);

  const produtos = document.querySelector("[data-produtos]");

  while (produtos.firstChild) {
      produtos.removeChild(produtos.firstChild);
  }

  busca.forEach(elemento => produtos.appendChild(
    exibeElementos(elemento.name, elemento.preco, elemento.imagem, elemento.id)))
  
  if (busca.length == 0) {
      produtos.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`
  }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))