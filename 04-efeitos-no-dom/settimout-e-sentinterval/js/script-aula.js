// function espera(texto) {
//   console.log(texto);
// }

// setTimeout(() => {
//   console.log("Após 0s?");
// }, 2000);

// for (let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// }

// const btn = document.querySelector("button");

// btn.addEventListener("click", handleClick);

// function handleClick() {
//   setTimeout(() => {
//     console.log(this);
//     this.classList.add("active");
//   }, 1000);
// }

function loop(texto) {
  console.log(texto);
}

setInterval(loop, 1000, "Passou 1s");

let i = 0;

const meuLoop = setInterval(() => {
  console.log(i++);
  if (i > 20) {
    clearInterval(meuLoop);
  }
}, 1000);
