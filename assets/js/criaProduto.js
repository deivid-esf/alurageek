import { acessoApi } from "./acessaApi.js";
import { converteDados } from "./converteDados.js";
const formulario = document.querySelector("[data-adiciona-formulario]")


async function criarProduto(e) {
  e.preventDefault();

  const imagem = document.querySelector("[data-adiciona-imagem]").value;
  let categoria = document.querySelector("[data-adiciona-categoria]").value;
  const nome = document.querySelector("[data-adiciona-nome]").value;
  const preco = document.querySelector("[data-adiciona-preco]").value;
  // const descricao = document.querySelector("[data-adiciona-descricao]").value;

  const nomeMaiusculo = converteDados.letraMaiuscula(nome)
  const precoConvertido = converteDados.convertePreco(preco)
  categoria = categoria.toLowerCase();
  try {
    await acessoApi.criaProduto(nomeMaiusculo, categoria, imagem, precoConvertido)
    window.location.href = '../../produtos.html'
  } catch (e) {
    alert(e)
  }
}

formulario.addEventListener('submit', e => criarProduto(e))
