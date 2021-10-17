// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses link
const link = document.querySelector('a[href^="#"]');
link.addEventListener("click", function (event) {
  event.preventDefault();

  console.log((event.target.classList.add = "ative"));
  console.log(event.target);
});

// Selecione todos os elemntos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const el = document.querySelector("*");
function handleClicado(event) {
  console.log(event.target);
}
el.addEventListener("click", handleClicado);

// Utilizando o código anterior, ao invés de mostrar no console
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla t

function handleClicado(event) {
  event.target.remove();
  if (event.key === "t") {
    document.body.style.fontSize = "30px";
  }
}
el.addEventListener("click", handleClicado);
