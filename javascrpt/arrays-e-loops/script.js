// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasil = ["1959", "1962", "1970", "1994", "2002"];
for (var cont = 0; cont < brasil.length; cont++) {
  console.log(`O brasil ganhou a copa de ${brasil[cont]}`);
}

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa ${ano}`

// Interja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
