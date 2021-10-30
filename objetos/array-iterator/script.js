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

const aulas = [10, 25, 30];

const reduceAulas = aulas.reduce((acumulador, item) => {
  return acumulador + item;
}, 0);

const numeros = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros.reduce((anterior, atual) => {
  anterior > atual ? anterior : atual;
});

console.log(maiorNumero);
