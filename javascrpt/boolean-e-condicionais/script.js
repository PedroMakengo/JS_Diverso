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

var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("Falso");
}
