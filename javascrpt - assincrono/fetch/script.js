// const doc = fetch("./doc.txt");

// doc
//   .then((resolucao) => {
//     return resolucao.text();
//   })
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = body;
//   });

// const cep = fetch("./style.css");

// cep
//   .then((data) => data.text())
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     const style = document.createElement("style");
//     style.innerHTML = body;
//     console.log(style);
//     conteudo.appendChild(style);
//   });

const sobre = fetch("./sobre.html");

const div = document.createElement("div");

sobre
  .then((response) => response.text())
  .then((response) => {
    div.innerHTML = response;
    const titulo = div.querySelector("h1");
    document.querySelector("h1").innerText = titulo.innerText;
    console.log(div);
  })
  .catch(() => {
    console.log("Erro...");
  });
