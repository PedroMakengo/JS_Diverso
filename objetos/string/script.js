// const comida = "Pizza";
// const agua = new String("Agua");

// console.log(agua.length);

// const frase = "A melhor comida";

// console.log(frase[frase.length]);
// console.log(frase.charAt(0));

// const frase = "A minha linguagem é ";
// const linguagem = "JavaScript";

// const fraseFinal = frase.concat(linguagem, "!!");

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(listaFrutas.includes(fruta, 1));

console.log(fruta.startsWith("Ba")); // Começa com...
console.log(fruta.endsWith("na")); // Termina com...

// Transação
const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(0, 3));

const lingugagem = "Javascript";

lingugagem.substring(-5); // substring não retorna valores negativos

console.log(fruta.indexOf("B")); // Retorna o index de uma string

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];
listaPrecos.forEach((preco) => {
  // console.log(preco.padStart(10, "0")); // Acrescenta caracteres dentro da
  // minha string de acordo aos meus parametros
  console.log(preco.padEnd(10, "0"));
});
