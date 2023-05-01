export class Produto {
  _codigo = 0;
  _descricao = "";
  _estoque = 0;
  _preco = 0;

  constructor(codigo, descricao, estoque, preco) {
    this._codigo = codigo;
    this._descricao = descricao;
    this._estoque = estoque;
    this._preco = preco;
  }

  get codigo() {
    return this._codigo;
  }

  get descricao() {
    return this._descricao;
  }

  get preco() {
    return this._preco;
  }

  get estoque() {
    return this._estoque;
  }
}
