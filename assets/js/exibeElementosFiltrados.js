import { acessoApi } from "./acessaApi.js";
import { exibicao } from "./exibeElementos.js";

async function exibeElementosFiltrados (elemento){
  const produtoDiv = document.querySelector(`[data-produtos-${elemento}]`)
  
  try{
    const lista = await acessoApi.filtraCategoria(elemento);
    lista.forEach(produto => produtoDiv.appendChild(
      exibicao.exibeElementosHome(produto.name, produto.preco, produto.imagem)))
    } catch {
      produtosContainer.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
    }
}

exibeElementosFiltrados('star');
exibeElementosFiltrados('consoles');
exibeElementosFiltrados('diversos');