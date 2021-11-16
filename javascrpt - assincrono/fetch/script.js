// const doc = fetch("./doc.txt");

// doc
//   .then((resolucao) => {
//     return resolucao.text();
//   })
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = body;
//   });

const cep = fetch("https://viacep.com.br/ws/0100100/json");

cep
  .then((data) => {
    return data.json();
  })
  .then((cep) => {
    console.log(cep);
  });
