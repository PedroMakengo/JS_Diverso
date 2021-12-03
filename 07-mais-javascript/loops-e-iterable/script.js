const frutas = ["Banana", "Morango", "Uva"];
const frase = "Isso é JavaScript";

fetch("https://pokeapi.com/api/v2/pokemon/").then(({ headers }) => {
  console.log(headers);
});
