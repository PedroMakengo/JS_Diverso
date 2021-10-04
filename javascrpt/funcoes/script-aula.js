function areaQuadrado(lado) {
  return lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de cores";
  }
}

function mostraConsole() {
  console.log("Oi");
}

addEventListener("click", mostraConsole);

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(20, 1.8);
console.log(imc2(1000, 1.8));

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

terceiraIdade(60);

var totalPaises = 193;

function faltaVisitar(paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(20));
console.log(totalPaises);

var profissao = "Designer";

function dados() {
  var nome = "Pedro";
  var idade = 22;

  function outroDados() {
    var endereco = "Rio de Janeiro";
    var idade = 28;

    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outroDados();
}

console.log(dados());
