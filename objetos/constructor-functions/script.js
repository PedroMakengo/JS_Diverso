const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + "andou");
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.andar = function () {
    console.log(this.nome + " Andou");
  };
}

// Crie 3 pessoas, João - 20 anos
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("João", "20");
const maria = new Pessoa("Maria", "25");
const bruno = new Pessoa("Bruno", "15");

// Crie um constructor Function (Dom) para manipulação de listas de elementos
// do dom. Deve conter as seguintes propriedades e métodos:

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;

  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

const listaItens = new Dom("li ");

// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
