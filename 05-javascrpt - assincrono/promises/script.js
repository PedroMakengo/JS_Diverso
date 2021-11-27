// const promesa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: "Pedro", idade: 22 });
//     }, 1000);
//   } else {
//     reject(Error("Um erro ocorreu na promisse"));
//   }
// });

// const retorno = promesa
//   .then((resolucao) => {
//     resolucao.profissao = "Designer";
//     return resolucao;
//   })
//   .then((resolucao) => {
//     console.log(resolucao);
//   })
//   .catch((rejeitada) => {
//     console.log(rejeitada);
//   })
//   .finally(() => {
//     console.log("Acabou");
//   });

// console.log(retorno);

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});

const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});
