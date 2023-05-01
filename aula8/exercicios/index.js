import { Produto } from "./produto.js";
import { RepositorioProduto } from "./repositorio-produto.js";

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastro-produto-form");
  const repositorio = new RepositorioProduto();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { target } = e;

    const descricao = target.descricao.value;
    const preco = Number(target.preco.value);
    const estoque = Number(target.estoque.value);
    const codigo = Number(target.codigo.value);

    const produto = new Produto(codigo, descricao, estoque, preco);

    repositorio.adicionar(produto);
    location.href = "listagem-produtos.html";
  });
});
