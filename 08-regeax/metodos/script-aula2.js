// const regexp = /\d{5}[-\s]?\d{3}/;

// const text = `
//       00000-000
//       00000 000
//       00000000
//   `;

// const resultado = text.replace(regexp, "");

// CPFs
// const regexp = /(?:\d{3}[.-]?){3}\d{2}/g;

// const text = `
//       000.000.000-00
//       000-000-000-00
//       000.000.000.00
//       0000000000-00
//       00000000000

// `;

// console.log(resultado);

// const regexp = /\d{2}[-.]?(?:\d{3}[-.]?){2}\/?\d{4}[-.]?\d{2}/g;

// const text = `
//      00.000.000/0000-00
//      00000000000000
//      00-000-000-0000-00
//      00.000.000/000000
//      00.000.000.000000
//      00.000.000.0000.00
// `;

// const regexpTelefone = /(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[-\s]?\d{4}/g;

// const telefones = `
//     +55 11 98888-8888
//     +55 11 98888 8888
//     +55 11 988888888
//     +55 11988888888
//     +5511988888888
//     5511988888888
//     11 98888-8888
//     11 98888 8888
//     (11) 98888 8888
//     (11) 98888-8888
//     11-98888-8888
//     11 98888 8888
//     11988888888
//     11988888888
//     (11)988888888
//     98888 8888
//     8888 8888
// `;

// const resultado = telefones.replace(regexpTelefone, "");

const regexpEmail = /[\w.-]+@[\w-]+\.[\w.-]+/gi;

const emails = `
    email@email.com
    email@email.com.org
    email-email@email.com 
    email_email@email.com
    email.email123@email.com.br
    email.email23@empresa-sua.com.br
    c@contato.cc
`;

const resultado = emails.replace(regexpEmail, "");

console.log(resultado);
