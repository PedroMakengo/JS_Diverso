// Remova o erro
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
priceNumber("R$ 99,99");

// Crie uma IEFE e isole o escopo
// de qualquer código JS.

(() => {
  const nome = "Pedro Makengo";
  console.log(nome);
})();

// Como podemos utilizar
// a função abaixo

const active = (callback) => callback();

active(function () {
  console.log("Usando a função ativo");
});
