// Selecione cada curso e retorne
// com objetos contendo o título, descrição
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);

const objetoCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});

console.log(objetoCursos);

// Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaioresQueCem = numeros.filter((numero) => {
  return numero > 100;
});

// Verifique se baixo faz parte
// da lista de instrumentos e retorne true

const instrumemntos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const baixo = instrumemntos.some((item) => {
  return item === "Baixo";
});

console.log(baixo);

// Retorne o valor total de compras

const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const totalDeCompras = compras.reduce((acumulador, atual) => {
  const precoLimpo = +atual.preco.replace("R$ ", "").replace(",", ".");
  return acumulador + precoLimpo;
}, 0);

console.log(totalDeCompras);
