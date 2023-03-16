function Contato() {
  var privateName = "test";
  var privateCelPhone = "2222222";

  this.getNome = function () {
    return privateName;
  };

  this.setNome = function (newName) {
    privateName = newName;
  };

  this.getTelefone = function () {
    return privateCelPhone;
  };

  this.nome = "";
  this.telefone = "";
}
