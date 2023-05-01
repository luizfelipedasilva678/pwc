import { RepositorioProduto } from "./repositorio-produto.js";

window.addEventListener("DOMContentLoaded", () => {
  const repositorio = new RepositorioProduto();
  const produtos = repositorio.obterTodos();
  const labels = ["Estoque", "Preço", "Código", "Descrição"];

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const ths = labels.map((label) => {
    const th = document.createElement("th");
    th.innerText = label;

    return th;
  });
  const trThead = document.createElement("tr");
  trThead.append(...ths);

  const tbodyRows = produtos.map((produto) => {
    const tr = document.createElement("tr");
    const tdDescricao = document.createElement("td");
    const tdEstoque = document.createElement("td");
    const tdPreco = document.createElement("td");
    const tdCodigo = document.createElement("td");

    console.log(produto);

    tdDescricao.innerText = produto.descricao;
    tdEstoque.innerText = produto.estoque;
    tdPreco.innerText = produto.preco;
    tdCodigo.innerText = produto.codigo;

    tr.append(tdEstoque, tdPreco, tdCodigo, tdDescricao);

    return tr;
  });

  thead.appendChild(trThead);
  tbody.append(...tbodyRows);
  table.appendChild(thead);
  table.appendChild(tbody);

  document.body.appendChild(table);
});
