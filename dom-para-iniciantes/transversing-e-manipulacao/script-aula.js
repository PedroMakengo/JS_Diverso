// const h1 = document.querySelector("h1");

// const animaisLista = document.querySelector(".animais-lista");

// console.log(h1.innerHTML);
// console.log(h1.outerHTML);

// console.log(animaisLista.innerHTML);

// Transversing

// const lista = document.querySelector(".animais-lista");

// console.log(lista.parentElement);

// console.log(lista.nextElementSibling);

// console.log(lista.previousElementSibling);

// console.log(lista.children[lista.children.length - 1]);

// console.log(lista.querySelector("li:last-child"));

// console.log(lista.childNodes);

// console.log(lista.previousSibling);

// const animais = document.querySelector(".animais");
// const contato = document.querySelector(".contato");
// const titulo = contato.querySelector(".titulo");

// lista.appendChild(titulo); // insere o titulo dentro da lista
// const mapa = document.querySelector(".mapa");

// contato.replaceChild(lista, titulo);

// contato.removeChild(titulo); // Remover o título dentro do contato

// contato.insertBefore(animais, mapa); // insere animais antes do mapa

// const novoh1 = document.createElement("h1");
// novoh1.innerText = "Novo título";
// novoh1.classList.add("titulo");

// mapa.appendChild(novoh1);

// console.log(novoh1);

const h1 = document.querySelector("h1");

const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true);
cloneH1.classList.add("azul");

faq.appendChild(cloneH1);
