async function listaDeProdutos () {
  const listaAcessada = await fetch("http://localhost:3000/produtos");
  const listaConvertida = await listaAcessada.json();

  return listaConvertida;

}


async function filtraCategoria (categoria){

  const lista = await listaDeProdutos();
  const listaFiltrada = lista.filter(produto => produto.categoria === categoria)

  return listaFiltrada;
}

export const acessoApi = {
  listaDeProdutos,
  filtraCategoria
}