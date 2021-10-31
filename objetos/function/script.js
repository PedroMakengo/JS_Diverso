// const perimetro = new Function("lado", "return lado * 4");

// function somar(n1, n2) {
//   return n1 + n2 + " 2";
// }

// console.log(somar.name);

// function darOi(nome, idade) {
//   console.log("Oi para você " + nome + idade);
// }

// darOi.call(null, "André", 28);

// function descricaoCarro(velocidade) {
//   console.log(this.marca + " " + this.ano + " " + velocidade);
// }

// descricaoCarro.call({ marca: "Honda", ano: 288 }, 100);

// const carros = ["Ford", "Fiat", "VW"];
// const frutas = ["Banana", "Pêra", "Uva"];

// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// };

// const ul = new Dom("ul");

// const li = {
//   element: document.querySelector("li"),
// };

// Dom.prototype.ativo.call(li, "ativar");

// ul.ativo.call(li, "ativo");
// ul.ativo("ativar");

const frutas = ["Banana", "Pêra", "Uva"];

// Array.prototype.mostrarThis = function () {
//   console.log(this);
// };

Array.prototype.pop.call(frutas);
frutas.pop();

const arrayLike = {
  0: "Item 1",
  1: "Item 2",
  2: "Item 3",
  length: 3,
};
// console.log(arrayLike);

const li = document.querySelectorAll("li");
const arrayLi = Array.from(li);

const filtro = arrayLi.filter((item) => {
  console.log(item.classList.contains("ativo"));
});

// console.log(filtro);
