// Crie um objeto com os seus dados pessoas
// Deve possui pelo menos duas propriedades nome e sobrenome

var dadosPessoas = {
  nome: "Pedro",
  sobrenome: "Makengo",
  idade: 22,
  sexo: "Masculino",

  nomeCompleto() {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};
// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 300
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "Homem") {
      return `Latir`;
    } else {
      return `Nada`;
    }
  },
};
