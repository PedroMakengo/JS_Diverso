const links = document.querySelectorAll("a");

function handleClick(event) {
  event.preventDefault(".content");
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  document.querySelector(".content").innerHTML = "Carregando";
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();

  replaceContent(pageText);
}

function replaceContent(newText) {
  const newHtml = document.createElement("div");
  newHtml.innerHTML = newText;

  const oldCOntent = document.querySelector(".content");
  const newContent = newHtml.querySelector(".content");

  oldCOntent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector("title").innerText;
}

window.addEventListener("popstate", () => {
  fetchPage(window.location.href);
});

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
