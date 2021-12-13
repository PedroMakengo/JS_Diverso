// const regexp = /\w+/gi;

// const regexp1 = new RegExp("\\d", "gi");

// const frase = "JavaScript Linguagem 101";

// console.log(frase.replace(regexp1, "X"));

// const regexp = /java/gi;

// const frase = "JavaScript e Java Linguagem 101, Java";

// let i = 1;
// while (regexp.test(frase)) {
//   console.log(i++, regexp.lastIndex);
// }

// const frase = "JavaScript, TypeScript, CoffeeScript, Java";

// const regexp = /\w+/g;

// let regexpResult;
// while ((regexpResult = regexp.exec(frase)) !== null) {
//   console.log(regexpResult[0]);
// }

// const frase = "JavaScript, TypeScript, CoffeeScript, Java, 200";

// const regexp = /[A-Za-z]+/g;

// const resultados = frase.split(regexp);

// console.log(resultados);

// const tags = `
//   <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//   </ul>
// `;

// const regexp = /(?<=<\/?)\w+/g;

// const resultado = tags.replace(regexp, "div");
// console.log(resultado);

// const emails = `
//   empresa@email.com
//   contato@email.com
//   suporte@email.com
// `;

// const regexp = /(\w+@)[\w.]+/g;

// const resultado = emails.replace(regexp, "$1gmail.com");

// console.log(resultado);

const emails = `
  joao@homail.com.br
  marta@ggmail.com.br
  bruno@oulook.com.br
`;

const regexp = /(\w+@)[\w.]+/g;

const resultado = emails.replace(regexp, function (...args) {
  if (args[2] === "homail.com.br") {
    return args[1] + "hotmail.com.br";
  } else if (args[2] === "ggmail.com.br") {
    return args[1] + "gmail.com.br";
  } else if (args[2] === "oulook.com.br") {
    return args[1] + "outlook.com.br";
  } else {
    return args[0];
  }
});
