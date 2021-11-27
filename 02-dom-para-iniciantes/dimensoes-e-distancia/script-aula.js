const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

console.log(animaisTop);

const primeiroh2 = document.querySelector("h2");
console.log(primeiroh2.offsetLeft);

const reatH2 = primeiroh2.getBoundingClientRect();
console.log(reatH2);

if (reatH2 < 0) {
  console.log("Passou o elemento");
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset
);

const small = window.matchMedia("(max-width: 600px)");
console.log(small);

if (small) {
  console.log("Usuário mobile");
} else {
  console.log("Usuário desktop");
}
