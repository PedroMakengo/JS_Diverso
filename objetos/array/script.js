// // const instrumentos = ["Guitarra", "Baixo", "Violão"];
// const precos = [49, 99, 69, 89];

// const dados = [
//   new String("Tipo 1"),
//   ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
//   function andar(nome) {
//     console.log(nome);
//   },
// ];

// const carros = new Array("Ford", "Fiat", "Honda");

// carros[2] = "Ferrari";

// // console.log(carros.length);

// const li = document.querySelectorAll("li");

// const arrayLi = Array.from(li);

// console.log(li);
// console.log(arrayLi);

// // const array = Array(1, 2, 3, 4, 5);
// const array = Array(5);

// console.log(array);

// const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];

// console.log(frutas.length);

// const instrutmentos = ["Guitarra", "Baixo", "Violão"];
// instrutmentos.sort();

// const idades = [32, 21, 33, 43, 1, 12, 8];
// idades.sort();

// console.log(instrutmentos);
// console.log(idades);

const carros = ["Ford", "Fiat", "VW"];
carros.unshift("Honda", "Kia");

console.log(carros);

carros.push("Ferrari", "Gol");
console.log(carros);

console.log(carros.shift());
console.log(carros.pop());

console.log(carros.reverse());
