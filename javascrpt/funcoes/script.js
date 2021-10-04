// Crie uma função para verificar se um valor é Truthy

function verificarValor(value) {
  if (!!value) {
    return `É Truthy`;
  } else {
    return "Não é truthy";
  }
}

console.log(verificarValor(1));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(l1, l2, l3, l4) {
  var somaPerimetro = l1 + l2 + l3 + l4;
  return somaPerimetro;
}

console.log(perimetro(3, 3, 1, 8));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Pedro", "Makengo"));
console.log(nomeCompleto("Pedro", "Miguel"));

// Crie uma função que verifica se um número é par

function numeroPar(numero) {
  if (numero % 2 == 0) {
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

//
