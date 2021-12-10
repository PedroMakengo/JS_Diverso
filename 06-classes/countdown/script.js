import Countdown from "./countdown.js";

// const diasParaONatal = new Countdown("25 December 2021 23:59:59");
const tempoParaAnoNovo = new Countdown("14 December 2021 10:59:59");

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

setInterval(() => {
  days.innerText = tempoParaAnoNovo.total.days;
  hours.innerText = tempoParaAnoNovo.total.hours;
  minutes.innerText = tempoParaAnoNovo.total.minutes;
  seconds.innerText = tempoParaAnoNovo.total.seconds;
}, 1000);

const newArray = Array(tempoParaAnoNovo.total);

newArray.forEach((element) => {
  console.log(element);
});
