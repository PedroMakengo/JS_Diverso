// async function puxarDados() {
//   try {
//     const responseDados = await fetch("./dados.json");
//     const jsonDados = await responseDados.json();

//     console.log(jsonDados);
//     document.body.innerText = jsonDados.aula;
//   } catch (error) {
//     console.log(`Detectamos este erro ${error}`);
//   }
// }

// puxarDados();

async function puxarDados() {
  const responseDados = fetch("./dados.json");
  const responseClientes = fetch("./clientes.json");

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();
  console.log(jsonDados);
  console.log(jsonClientes);
}

puxarDados();
