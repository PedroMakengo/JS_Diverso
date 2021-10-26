// const comida = "Pizza";
// const agua = new String("Agua");

// console.log(agua.length);

// const frase = "A melhor comida";

// console.log(frase[frase.length]);
// console.log(frase.charAt(0));

// const frase = "A minha linguagem é ";
// const linguagem = "JavaScript";

// const fraseFinal = frase.concat(linguagem, "!!");

// const fruta = "Banana";
// const listaFrutas = "Melancia, Banana, Laranja";

// console.log(listaFrutas.includes(fruta, 1));

// console.log(fruta.startsWith("Ba")); // Começa com...
// console.log(fruta.endsWith("na")); // Termina com...

// Transação
// const transacao1 = "Depósito de cliente";
// const transacao2 = "Depósito de fornecedor";
// const transacao3 = "Taxa de camisas";

// console.log(transacao1.slice(0, 3));

// const lingugagem = "Javascript";

// lingugagem.substring(-5); // substring não retorna valores negativos

// console.log(fruta.indexOf("B")); // Retorna o index de uma string

// const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];
// listaPrecos.forEach((preco) => {
//   // console.log(preco.padStart(10, "0")); // Acrescenta caracteres dentro da
//   // minha string de acordo aos meus parametros
//   console.log(preco.padEnd(10, "0"));
// });

// const fruta2 = "Ta";
// console.log(fruta2.repeat(5));

// fruta.repeat(20);

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";

listaItens = listaItens.replace(/[ ]+/g, ", ");
console.log(listaItens);

let preco = "R$ 1200,43";

preco = preco.replace(",", ".");
console.log(preco);

const arrayList = listaItens.split(", "); // retorna um array com as posições
// de acordo ao parametro especificado
console.log(arrayList);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section");

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutaArray = ["Banana", "Melancia", "Laranja"];

// toLowerCase() letra maiuscula
// toUpperCase() letra minuscula

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

console.log(sexo1.toLowerCase() === "FEMININO");

// Remover espaço
// trim(), trimStart, trimEnd
const valor = "  R$ 23   ";
valor.trim();

console.log(valor);
