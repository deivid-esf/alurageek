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

export const converteDados = {
  convertePreco,
  letraMaiuscula
}