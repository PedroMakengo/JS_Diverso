// const carro = {
//   marca: "Honda",
//   ano: 2018,
// };

// const { marca, ano } = carro;

// console.log(marca, ano);

// const cliente = {
//   nome: "Andre",
//   compras: {
//     digitais: {
//       livros: ["Livro 1", "Livro 2"],
//       videos: ["Video JS", "Video HTML"],
//     },
//     fisicas: {
//       cadernos: ["Caderno 1"],
//     },
//   },
// };

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

// const {
//   digitais,
//   fisicas,
//   digitais: { livros, videos },
// } = cliente.compras;

// const cliente = {
//   nome: "Pedro",
//   compras: 10,
// };

// const { nome: nomePedro, email = "pedro@gmail.com" } = cliente;

// const frutas = ["Banana", "Uva", "Morango"];

// const [primeira, segunda, terceira] = frutas;

// console.log(primeira);

// const [primeiro, segundo, terceiro] = ["Item 1", "Item 2", "Item 3"];

function handleKeyboard({ key, keyCode }) {
  console.log(key, keyCode);
}

document.addEventListener("keyup", handleKeyboard);
