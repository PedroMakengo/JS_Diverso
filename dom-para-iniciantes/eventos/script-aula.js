const img = document.querySelector("img");

const callback = (event) => {
  console.log(event);
};

// img.addEventListener("click", callback);

const animaisLista = document.querySelector(".animais-lista");

const callbackLista = (event) => {
  console.log(event.currentTarget);
  console.log(event.target); // É exatamente o elemento selecionado
  console.log(event.type);
};

// animaisLista.addEventListener("click", callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  // console.log("Clicou");
  console.log(this);
  console.log(this.getAttribute("href"));
}

linkExterno.addEventListener("click", handleLinkExterno);

const h1 = document.querySelector("h1");

function handleEvent(event) {
  console.log(event.type, event);
}
// h1.addEventListener("click", handleEvent);
// h1.addEventListener("mouseenter", handleEvent);
// h1.addEventListener("mousemove", handleEvent);

// window.addEventListener("scroll", handleEvent);
// window.addEventListener("resize", handleEvent);

function handleKeyboard(event) {
  if (event.key === "a") {
    document.body.classList.toggle("azul");
  } else if (event.key === "v") {
    document.body.classList.toggle("vermelho");
  }
}
window.addEventListener("keydown", handleKeyboard);

const imgs = document.querySelectorAll("img");

const handleImg = (event) => {
  console.log(event.target.getAttribute("src"));
};

imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});
