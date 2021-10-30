const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
const valorPrimeiroRemovido = comidas.shift();
console.log(valorPrimeiroRemovido);
// Remova o último valor de comidas e coloque em uma variável
const valorUltimoRemovido = comidas.pop();
console.log(valorUltimoRemovido);
// Adicione "Arroz " ao final do array

comidas[comidas.length - 1] = "Arroz";

console.log(comidas);

// Arrume os estudantes em ordem alfabética
const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Inverta a ordem dos estudantes
estudantes.reverse();
// Verifique se Joana faz parte dos estudantes
estudantes.indexOf("Joana");
// Verifique se Juliana faz parte do estudantes
estudantes.includes("Juliana");

//
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;

html = html.split("section");
html = html.join("ul");
html = html.split("div");
html = html.join("li");
console.log(html);

const carros = ["Ford", "Fiat", "VM", "Honda"];
// Remove o último carro, mais antes de remover
// salve o array original na outra variável
