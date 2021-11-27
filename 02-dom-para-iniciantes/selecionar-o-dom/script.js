// Retorne no console todas as imagens do site
const img = document.querySelectorAll("img");
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imageName = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imageName);

// Selecione todos os links internos (onde o href começa #)
const linkInternos = document.querySelectorAll('[href^="#"]');
console.log(linkInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const titulo = document.querySelector(".animais-descricao h2");
console.log(titulo);

// Selecione o último p do site
const ultimoParagrafo = document.querySelectorAll("p");
console.log(ultimoParagrafo[ultimoParagrafo.length - 1]);
