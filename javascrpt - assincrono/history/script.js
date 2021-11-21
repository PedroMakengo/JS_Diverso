const links = document.querySelectorAll("a");

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
}

function fetchPage(url) {
  console.log(url);
}

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
