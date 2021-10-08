const href = window.location.href;

if (href === "http://localhost:5500/dom-para-iniciantes/o-que-e-dom/") {
  console.log(href);
}

const h1Selecionado = document.querySelector("h1");
const h1Classes = h1Selecionado.classList;

function callback1() {
  console.log("Clicou em", h1Selecionado.innerText);
}
h1Selecionado.addEventListener("click", callback1);
