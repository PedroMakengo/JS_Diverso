var possuiGraduacao = true;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log("É verdadeiro");
} else if (possuiDoutorado) {
  console.log("É falso");
} else {
  console.log("Não possui nada");
}

var nome = 5;

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

if (!possuiGraduacao) {
  console.log(possuiGraduacao);
  console.log("Não possui graduação");
}

var x = 10;
console.log(x !== 11);

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional1 = 5 - 10 && 5 + 5;
if (condicional1) {
  console.log("Verdadeiro", condicional1);
} else {
  console.log("Falso");
}

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;

console.log(condicional2);

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olha para o céu");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  case "Verde":
    console.log("Olhe para a floresta");
    break;
  default:
    console.log("Feche os olhos");
}
