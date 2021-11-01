const pessoa = new Object({
  nome: "Pedro Makengo",
});

console.log(pessoa);

const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const honda = Object.create(carro);
honda.init("Honda");
console.log(honda);
