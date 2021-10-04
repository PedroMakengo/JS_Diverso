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

var x = "Gatos";

console.log(x !== "Gato");
