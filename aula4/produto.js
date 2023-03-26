class Produto {
  _descricao = "";
  _estoque = 0;
  _preco = 0;

  constructor(descricao, estoque, preco) {
    this.descricao = descricao;
    this.estoque = estoque;
    this.preco = preco;
  }

  set descricao(val) {
    if (val.length >= 2 && val.length <= 100) {
      this._descricao = val;
    } else {
      throw new ValorIncorretoError(
        "A descricao deve estar entre 2 e 100 caracteres"
      );
    }
  }

  set preco(val) {
    const precoVal = Number(val);

    if (precoVal >= 10 && precoVal <= 99.99) {
      this._preco = val;
    } else {
      throw new ValorIncorretoError(
        "O preco informado deve estar entre 10.00 e 99.99"
      );
    }
  }

  set estoque(val) {
    const estoqueVal = Number(val);

    if (estoqueVal >= 0) {
      this._estoque = val;
    } else {
      throw new ValorIncorretoError("O estoque deve ser maior ou igual a 0");
    }
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
