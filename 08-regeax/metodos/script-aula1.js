// const regexp = /[-.]/g;
// const resultado = "111.222.333-44".replace(regexp, "");

// const regexp = /[0-9]/g;

// const frase = `O peso e tamanho dos lobos variam muito em todo, tendendo a
//  aumentar proporcionalmente com a latitude, como previsto pela teorica
//  de Christian Bergmann. Em geral, a altura, medida a partir dos ombros, varia
//  de 60 a 95 centímetros. O peso varia geograficamente. Em média, os lobos europeus,
//  pesam 38.5 kg; os lobos da América do Norte, 36 kg; os lobos indianos e árabes 25kg.
//  [] 2323-32323-3232 Julho e Junho, Brasil e Brazil`;

// const resultado = frase.replace(regexp, "1");

// console.log(resultado);

// const regexp = /\W/gi;

// const frase = `

//  Propor

//  O peso e tamanho dos lobos variam muito em todo, tendendo a
//  aumentar proporcionalmente com a latitude, como previsto pela teorica
//  de Christian Bergmann. Em geral, a altura, medida a partir dos ombros, varia
//  de 60 a 95 centímetros. O peso varia geograficamente. Em média, os lobos europeus,
//  pesam 38.5 kg; os lobos da América do Norte, 36 kg; os lobos indianos e árabes 25kg.
//  [] 2323-32323-3232 Julho e Junho, Brasil e Brazil

//  Vaiii
//  `;

// const resultado = frase.replace(regexp, "X");

// console.log(resultado);

// const regexp = /(\w+)@([\w.]+)/gi;

// const frase = "pedro@gmail.com";

// const resultado = frase.replace(regexp, "contato@$2");

// const regexp = /(\w+),\s([\w]+)/gi;
// const nomes = `
//   Makengo, Pedro
//   Vicente, Antonia
//   Makengo Suzana
//   `;

// const resultado = nomes.replace(regexp, "$2 $1");

const regexp = /\d(?!px)/g;

const digitos = "2em, 4px, 5%, 2px, 1px";

const resultado = digitos.replace(regexp, "0");

console.log(resultado);
