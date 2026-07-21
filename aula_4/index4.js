async function buscarCep() {
  const cep = document.querySelector("#cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const resposta = await fetch(url);
  const dados = await resposta.json();

  popularInputs(dados);
}

function popularInputs(dados) {
  document.querySelector("#logradouro").value = dados.logradouro;
  document.querySelector("#cidade").value = dados.localidade;
  document.querySelector("#bairro").value = dados.bairro;
  document.querySelector("#uf").value = dados.uf;
  document.querySelector("#complemento").value = dados.complemento;
  document.querySelector("#região").value = dados.regiao;
  document.querySelector("#ibge").value = dados.ibge;
  document.querySelector("#ddd").value = dados.ddd;
}
