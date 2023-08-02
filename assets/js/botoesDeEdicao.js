const botaoApaga = document.querySelector("[data-botao-apaga]");
export function apagarProduto(evento){
  const botaoApaga = evento.target;

  const apagarProduto = botaoDeleta.parentElemnt;
  apagarProduto.remove()

  return botaoApaga;
}

botaoApaga.addEventListener('click', evento => apagarProduto(evento))