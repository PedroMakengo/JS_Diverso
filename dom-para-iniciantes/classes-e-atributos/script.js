//  Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu a");

menu.forEach((item) => {
  console.log(item.classList.add("ativo"));
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item, index) => {
  if (index !== 0) console.log(item.classList.remove("ativo"));
});

// Verifique se as imagens possuem o atribuito alt
const imgs = document.querySelectorAll("img");
imgs.forEach((item) => {
  const possuiAlt = item.hasAttribute("alt");
  console.log(possuiAlt);
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http]');
link.setAttribute("href", "https://www.google.com");
console.log(link);
