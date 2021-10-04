// Crie uma função para verificar se um valor é Truthy

function verificarValor(value) {
  return !!value;
}

console.log(verificarValor(1));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  return lado * 4;
}

console.log(perimetro(3));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Pedro", "Makengo"));
console.log(nomeCompleto("Pedro", "Miguel"));

// Crie uma função que verifica se um número é par

function numeroPar(numero) {
  if (numero % 2 === 0) {
    return `O número ${numero} é par`;
  } else {
    return `O número ${numero} é impar`;
  }
}

console.log(numeroPar(30));

// Crie uma função que retorne o tipo de
// dados do argumento passado nela (typeof)

function tipoDados(tipo) {
  return typeof tipo;
}
console.log(tipoDados("Cabelo"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento scrool ocorrer

addEventListener("scroll", function () {
  console.log("Pedro Makengo");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
