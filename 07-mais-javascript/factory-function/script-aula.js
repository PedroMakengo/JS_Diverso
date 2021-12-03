// function createButton(text) {
//   const numeroSecreto = "jsjfafafyfoafaf";
//   function element() {
//     const buttonElement = document.createElement("button");
//     buttonElement.innerText = text;

//     return buttonElement;
//   }

//   return Object.freeze({
//     text,
//     element,
//     numeroSecreto,
//   });
// }

// const btnComprar = createButton("Comprar");
// const btnVender = createButton("Vender");

function Pessoa(nome) {
  if (!new.target) return new Pessoa(nome);
  // if (!(this instanceof Pessoa)) return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

const designer = Pessoa("Pedro Makengo");

console.log(designer);
