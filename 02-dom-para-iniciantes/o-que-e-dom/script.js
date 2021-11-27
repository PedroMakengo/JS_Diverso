// Retorne o url da página atual utilizando o objeto window
const href = window.location.href;
console.log(href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector(".activo");

// Retorne a linguagem do navegador
const linguagemNavegador = window.navigator.language;
console.log(linguagemNavegador);

// Retorne a largura da janela
let alturaJanela = window.innerWidth;
console.log(alturaJanela);
