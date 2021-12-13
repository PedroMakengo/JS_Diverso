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

const frase = "JavaScript, TypeScript, CoffeeScript, Java";

const regexp = /\w+/g;

let regexpResult;
while ((regexpResult = regexp.exec(frase)) !== null) {
  console.log(regexpResult[0]);
}
