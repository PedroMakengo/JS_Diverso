function contagem() {
  let total = 0;
  return function incremento() {
    total++;
    console.log(total);
  };
}

const ativarIncremento = contagem();

setInterval(() => {
  ativarIncremento();
}, 1000);
