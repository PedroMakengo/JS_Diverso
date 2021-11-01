// const pessoa = new Object({
//   nome: "Pedro Makengo",
// });

// console.log(pessoa);

// const carro = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + " acelerou";
//   },
//   buzinar() {
//     return this.marca + " buzinou";
//   },
// };

// const honda = Object.create(carro).init("Honda");
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init("Ferrari");
// console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//   acelerar() {
//     return "acelerou";
//   },
//   buzinar() {
//     return "buzinou";
//   },
// };

// const motas = {
//   rodas: 2,
//   capacete: true,
// };

// Object.assign(motas, funcaoAutomovel, carro);

// console.log(motas);

const moto = {
  capacete: true,
};

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4;
    },
  },
});

// moto.rodas = 3;
// console.log(moto);

// const propriedades = Object.getOwnPropertyDescriptors( moto);
// console.log(propriedades);

// const innerHeightConfig = Object.getOwnPropertyDescriptor(
//   window,
//   "innerHeight"
// );

// Object.getOwnPropertyNames(Array.prototype);

// const frutas = ["Banana"];

// console.log(Object.getPrototypeOf(""));
// console.log(Array.prototype);

// const frutas1 = ["Banana", "Pêra"];
// const frutas2 = ["Banana", "Pêra"];

// Object.is(frutas1, frutas2);

// const carro = {
//   marca: "Ford",
//   ano: 2018,
// };

// Object.freeze(carro);

// carro.marca = "Honda";
// console.log(carro);

const frutas = ["Banana", "Uva"];

console.log(frutas.toString());

const frutas = ["Banana", "Uva"];
const frase = "Oi frase";
const somar = function (a, b) {
  return a + b;
};

console.log(somar.toString());

console.log(frutas.toString());

console.log(Object.prototype.toString().matchAll(frutas));
