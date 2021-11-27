let i = 0;
const imgs = document.querySelectorAll("img");

imgs.forEach(function (item, index) {
  console.log(item);
});

imgs.forEach(() => console.log(i++));

imgs.forEach((item) => console.log(item));
