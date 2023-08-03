import { acessoApi } from "./acessaApi.js";

function convertePreco (preco) {
  let precoConvertido = preco.replace(",", ".");
  precoConvertido = parseFloat(precoConvertido);
  precoConvertido = precoConvertido.toFixed(2);
  precoConvertido = precoConvertido.replace(".", ",");
  
  return precoConvertido;
}

function letraMaiuscula (palavra) {
  let palavraMaiuscula = palavra.split("");
  palavraMaiuscula[0] = palavraMaiuscula[0].toUpperCase();
  palavraMaiuscula = palavraMaiuscula.join("");

  return palavraMaiuscula;
}
async function id (){
  const listaApi = await acessoApi.listaDeProdutos();

  const lastId = listaApi.length;
  const newId = lastId++

  return newId;
}
export const converteDados = {
  convertePreco,
  letraMaiuscula,
  id
}