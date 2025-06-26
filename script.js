const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const operacoes = document.querySelector("#operacoes");
const btnCalcular = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

console.log(inputNum1);
console.log(inputNum2);
console.log(operacoes);
console.log(btnCalcular);
console.log(resultado);
function calcular() {
  let resultadoDaOperacao;

  if (operacoes.value === "+") {
    resultadoDaOperacao = Number(inputNum1.value) + Number(inputNum2.value);
  }
  if (operacoes.value === "-") {
    resultadoDaOperacao = Number(inputNum1.value) - Number(inputNum2.value);
  }
  if (operacoes.value === "*") {
    resultadoDaOperacao = Number(inputNum1.value) * Number(inputNum2.value);
  }
  if (operacoes.value === "/") {
    resultadoDaOperacao = Number(inputNum1.value) / Number(inputNum2.value);
  }

  resultado.textContent = `O resultado é ${resultadoDaOperacao}`;
}
