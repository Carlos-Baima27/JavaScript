const GLOBAL_URL = "https://6a50327cf45d5352b6121ab2.mockapi.io/produtos";

async function carregarProdutos() {
  const response = await fetch(GLOBAL_URL);
  const produtos = await response.json();
  listarProdutos(produtos);
}

function listarProdutos(produtos) {
  let html = "";
  for (const produto of produtos) {
    html += `
     <tr>
       <td>${produto.id}</td>
       <td> ${produto.nome}</td>
       <td>${produto.preco}</td>
       <td> ${produto.quantidade}</td>
       <td> R$ ${produto.valorUnitario}</td>
       <td> ${calcularTotal(produto.quantidade, produto.valorUnitario)}</td>
       <td>
         <button class="btn btn-danger" onclick="removerProduto(${produto.id})">Excluir</button>
       </td>
     </tr>
    `;
  }
  const tbody = document.querySelector("#table_produtos tbody");
  tbody.innerHTML = html;
}

function calcularTotal(quantidade, valor) {
  return quantidade * valor;
}

async function cadastrarProduto() {
  const produto = {
    produto: document.querySelector("#nome").value,
    preco: Number(document.querySelector("#preco").value),
    quantidade: Number(document.querySelector("#quantidade").value),
  };

  try {
    await fetch(GLOBAL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });
    carregarProdutos();
  } catch (error) {
    console.error(error);
    alert("Não foi possível cadastrar o produto");
  }
}

async function removerProduto(id) {
  //Regra de parada
  if (!confirm("Deseja realmente excluir o produto?")) {
    return;
  }
  const url = `${GLOBAL_URL}/${id}`;
  try {
    await fetch(url, {
      method: "DELETE",
    });
    carregarProdutos();
  } catch (error) {
    console.error(error);
    alert("Não foi possível excluir o produto");
  } finally {
    carregarProdutos();
  }
}

function adicionarProduto() {}
carregarProdutos();
