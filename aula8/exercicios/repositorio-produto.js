import { Produto } from "./produto.js";

export class RepositorioProduto {
  produtos = [];

  constructor() {
    this.produtos = JSON.parse(localStorage.getItem("produtos")) ?? [];
  }

  adicionar(produto) {
    this.produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(this.produtos));
  }

  obterTodos() {
    const produtos = this.produtos.map(
      (produto) =>
        new Produto(
          produto._codigo,
          produto._descricao,
          produto._estoque,
          produto._preco
        )
    );

    return produtos;
  }
}
