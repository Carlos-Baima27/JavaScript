function somar() {
  const num1 = Number(prompt("Digite o primeiro número:"));
  const num2 = Number(prompt("Digite o segundo número: "));

  const soma = num1 + num2;

  console.log("Soma: " + soma);
  alert(` A soma é ${soma}`);
}

// Somar();

function subtrair() {
  const num1 = Number(prompt("Digite o primeiro número: "));
  const num2 = Number(prompt("Digite o segundo número: "));

  const subtracao = num1 - num2;

  console.log("Subtração: " + subtracao);
  alert(`A subtração é ${subtracao}`);
}

// subtrair();

function multiplicar() {
  const num1 = Number(prompt("Digite o primeiro numero: "));
  const num2 = Number(prompt("Digite o segundo numero: "));

  const multiplicacao = num1 * num2;

  console.log("Multiplicação: " + multiplicacao);
  alert(`A multiplicação é ${multiplicacao}`);
}

// multiplicar();

function dividir() {
  const num1 = Number(prompt("Digite o primeiro numero:"));
  const num2 = Number(prompt("Digite o segundo numero:"));

  const divisao = num1 / num2;

  console.log("Divisão: " + divisao);
  alert(`A divisão é ${divisao}`);
}

// dividir();

function somarInputs() {
  console.log("Somarinputs");
  const num1 = Number(document.querySelector("#num1_soma").value);
  const num2 = Number(document.querySelector("#num2_soma").value);
  console.log(num1, num2);
}

function calcularMedia(botao) {
  //   console.log(botao);
  const tr = botao.closest("tr");

  //   console.log(tr);

  const nota1 = Number(tr.querySelector(".nota_1").value);
  const nota2 = Number(tr.querySelector(".nota_2").value);

  //   console.log(nota1, nota2);
  const media = (nota1 + nota2) / 2;

  //   console.log(media);

  const tdMedia = tr.querySelector(".media");
  tdMedia.textContent = media.toFixed(2);

  const status = media >= 7 ? "Aprovado" : "Reprovado";

  const tdStatus = tr.querySelector(".status");
  tdStatus.textContent = status;
}

let status = "";
if (media >= 7) {
  status = `<span class="badge text-bg-success">Aprovado</span>`;
} else {
  status = `<span class="badge text-bg-danger">Reprovado</span>`;
}

const tdStatus = tr.querySelector(".status");
//tdStatus.textContent = status;
tdStatus.innerHTML = status;
