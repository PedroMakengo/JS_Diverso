// // const carros = ["Ford", "Fiat", "Honda"];

// // carros.forEach(function (item, index, array) {
// //   console.log(item, index, array);
// // });

// const li = document.querySelectorAll("li");

// li.forEach((i) => i.classList.add("ativa"));

// li.forEach(function (item) {
//   item.classList.add("ativa");
// });

// const carros = ["Ford", "Fiat", "Honda"];

// carros.map((item, index, array) => {
//   return item.toUpperCase();
// });

// const aulas = [
//   {
//     nome: "HMTL 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);

// console.log(tempoAulas);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item) => {
//   return acumulador + item;
// }, 0);

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   return anterior > atual ? anterior : atual;
// });

// console.log(maiorNumero);

// const aulas = [
//   {
//     nome: "HMTL 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//   acumulador[index] = atual.nome;
//   return acumulador;
// }, {});

// const frutas = ["Banana", "Manga", "Pêra", "Uvas"];

// const temUva = frutas.some((item) => {
//   return item === "Uva";
// });

// const indexUva = frutas.findIndex((item) => {
//   return item === "Uvas";
// });

// console.log(indexUva);

// const every = frutas.every((item) => {
//   return item === "Uva";
// });

// console.log(every);

// const numeros = [6, 43, 22, 88, 101, 29];

// const maiorQue3 = numeros.every((n) => n > 7);

// console.log(maiorQue3);

// const frutas = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];

// const arrayFrutas = frutas.filter((item) => {
//   console.log(item);
//   return item;
// });

// console.log(arrayFrutas);

const aulas = [
  {
    nome: "HMTL 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const maiores15 = aulas.filter((aula) => {
  console.log(aula.min);

  return aula.min >= 15;
});

console.log(maiores15);
