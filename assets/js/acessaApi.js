async function listaDeProdutos() {
  const listaAcessada = await fetch("http://localhost:3000/produtos");
  const listaConvertida = await listaAcessada.json();

  return listaConvertida;
}

async function criaProduto(title, categoria, imagem, preco, descricao) {
  const listaAcessada = await fetch("http://localhost:3000/produtos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: title,
      categoria: categoria,
      imagem: imagem,
      preco: preco
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
  const acessoApi = await fetch(`http://localhost:3000/produtos?q=${termoDeBusca}`);
  const acessoConvertido = await acessoApi.json();

  return acessoConvertido;
}

export const acessoApi = {
  listaDeProdutos,
  filtraCategoria,
  criaProduto,
  buscaProduto
};
