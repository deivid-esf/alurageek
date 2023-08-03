import { converteDados } from "./converteDados.js";

async function listaDeProdutos() {
  const listaAcessada = await fetch("https://64cbf6502eafdcdc85198627.mockapi.io/produtos");
  const listaConvertida = await listaAcessada.json();

  return listaConvertida;
}

async function criaProduto(title, categoria, imagem, preco) {
  const listaAcessada = await fetch("https://64cbf6502eafdcdc85198627.mockapi.io/produtos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: title,
      categoria: categoria,
      imagem: imagem,
      preco: preco,
      id: converteDados.id
    }),
  });
  if (!listaAcessada.ok) {
    throw new Error("Não foi possivel enviar o produto");
  }
  const listaConvertida = listaAcessada.json();

  return listaConvertida;
}

async function filtraCategoria(categoria) {
  const lista = await listaDeProdutos();
  const listaFiltrada = lista.filter(
    (produto) => produto.categoria === categoria
  );

  return listaFiltrada;
}

async function buscaProduto(termoDeBusca) {
  const acessoApi = await fetch(`https://64cbf6502eafdcdc85198627.mockapi.io/produtos?q=${termoDeBusca}`);
  const acessoConvertido = await acessoApi.json();

  return acessoConvertido;
}

export const acessoApi = {
  listaDeProdutos,
  filtraCategoria,
  criaProduto,
  buscaProduto
};
