import ValidarCpf from "./validar-cpf.js";

const cpf = document.querySelector("#cpf");
const validarCpf = new ValidarCpf(cpf);

console.log(validarCpf.construir("11122222203"));
