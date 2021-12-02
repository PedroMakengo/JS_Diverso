import Countdown from "./countdown.js";

const diasParaONatal = new Countdown("25 December 2021 23:59:59");
const tempoParaAnoNovo = new Countdown("31 December 2021 23:59:59");

console.log(diasParaONatal.days);

setInterval(() => {
  console.log(tempoParaAnoNovo.total);
}, 1000);
