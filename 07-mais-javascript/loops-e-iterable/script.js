const items = document.querySelectorAll("li");

for (const item of items) {
  item.classList.add("ativo");
}

for (const windowKey in window) {
  console.log(windowKey + " " + window[windowKey]);
}
