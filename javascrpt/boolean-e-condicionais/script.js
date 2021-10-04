// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idadePedro = 22;
var idadeDebora = 20;

if (idadePedro > idadeDebora) {
  console.log("É maior");
} else if (idadePedro === idadeDebora) {
  console.log("É igual");
} else {
  console.log("É menor");
}
// Qual valor é retornado na seguinte expressão ?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)

var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log(
    `Brasil possui mais habitante com um número de ${brasil} habitantes`
  );
} else {
  console.log(
    `China possui mais habitantes com um númemro de ${china} habitantes`
  );
}

// O que irá aparecer no console ?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
