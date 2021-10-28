const ano = 2018;
const preco = 2.99;

// Métodos
console.log(Number.isNaN(5)); // Verificar se o valor é true ou false
console.log(Number.isInteger(20)); // Verificar se o valor é um número inteiro

// parseFloat
console.log(Number.parseFloat("99.50"));
console.log(Number.parseInt("100.50"));

console.log(preco.toFixed());

const carro = 1000.455;

console.log(carro.toFixed(2));

let valor = 48.49;
let valor1 = valor.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
let valor2 = valor.toLocaleString("en-US", {
  style: "currency",
  currency: "BRL",
});

console.log(valor1);
console.log(valor2);
