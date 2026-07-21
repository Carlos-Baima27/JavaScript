//const usuarios = ["Carlos", "Maria", "João", "Ana", "Pedro"];
//alert(`O primeiro usuário é: ${usuarios[0]}`);
//let i = 0;
//for (const usuario of usuarios) {
//console.log(`${i} - O usuário é: ${usuario}`);
//i++;
//}

// const carros = [
//   {
//     modelo: "Fusca",
//     marca: "Volkswagen",
//     ano: 1980,
//     cor: "verde",
//     ligado: false,
//   },

//   {
//     modelo: "Chevette",
//     marca: "Chevrolet",
//     ano: 1985,
//     cor: "verde",
//     ligado: false,
//   },
// ];

// console.log(carros[0].modelo);
// console.log(carros[1].modelo);

const alunos = [
  {
    nome: "Carlos",
    idade: 28,
    email: "kadiego80@gmail.com",
    telefone: "47 997235786",
    cpf: "04321188296",
    foto: null,
  },
  {
    nome: "Dany",
    idade: 24,
    email: "Dany@gmail.com",
    telefone: "47 997235786",
    cpf: "04321188296",
    foto: null,
  },
  {
    nome: "Laura",
    idade: 5,
    email: "Laura@gmail.com",
    telefone: "47 997235786",
    cpf: "04321188296",
    foto: null,
  },

  {
    nome: "Samuel",
    idade: 2,
    email: "Samuca@gmail.com",
    telefone: "47 997235786",
    cpf: "04321188296",
    foto: null,
  },
];

// console.log(alunos);
function popularTabela() {
  console.log("Iniciando a função popularTabela");

  const tbody = document.querySelector("#table_alunos tbody");
  console.log(tbody);

  let html = "";
  for (const aluno of alunos) {
    html += `
        <tr>
            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.email}</td>
            <td>${aluno.telefone}</td>
            <td>${aluno.cpf}</td>
        </tr>
        `;
  }
  tbody.innerHTML = html;
  console.log("Finalizando a função popularTabela");
}
popularTabela();
