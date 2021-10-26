// Cria um função construtora de Pessoas
// Deve conter nome, sobrenome e idade
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
// Crie um método no protótipo que retorne
// O nome completo da pessoa
Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const pedro = new Pessoa("Pedro", "Makengo", 22);

// List os métodos acessados por
// dados criados com NodeList,
console.log(NodeList.prototype);
// HTMLCollection, Document
console.log(HTMLAllCollection.prototype);
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

// li;
console.log(li.constructor.name);
// li.click;
console.log(li.click.constructor.name); // Function
// li.innerText;
console.log(li.innerText.constructor.name); // String
// li.value;
console.log(li.value.constructor.name); // Number
// li.hidden;
console.log(li.hidden.constructor.name); // Boolean
// li.offsetLeft;
console.log(li.offsetLeft.constructor.name); // Number
// li.click();

// Qual o construtor do dado abaixo
li.hidden.constructor.name; // String
