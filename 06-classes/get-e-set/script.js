// class Button {
//   get tamanho() {
//     return this._numero || 100;
//   }

//   set tamanho(numero) {
//     this._numero = numero * 200;
//   }
// }

// const buttonTamanho = new Button();

// console.log((buttonTamanho.tamanho = 1));

// const frutas = {
//   lista: [],
//   set nova(fruta) {
//     this.lista.push(fruta);
//   },
// };

// frutas.nova = "Morango";

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }

  get element() {
    const buttonElement = document.createElement("button");
  }
}
