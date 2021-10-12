// Verifique a distância da primeira imagem
// em relação ao topo da página

const imagens = document.querySelectorAll("img");
imagens.forEach((item, index) => {
  if (index === 0) {
    console.log(item.offsetTop);
  }
});
