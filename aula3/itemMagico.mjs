export function ItemMagico(manaAplicadaVal, energiaAplicadaVal, nomeVal) {
  var manaAplicada = 0;
  var energiaAplicada = 0;
  var nome = nomeVal;

  if (manaAplicadaVal >= -5 && manaAplicada <= 5) {
    manaAplicada = manaAplicadaVal;
  }

  if (energiaAplicadaVal >= -20 && energiaAplicadaVal <= 20) {
    energiaAplicada = energiaAplicadaVal;
  }

  this.getManaAplicada = function () {
    return manaAplicada;
  };

  this.getEnergiaAplicada = function () {
    return energiaAplicada;
  };

  this.setNome = function (nomeVal) {
    nome = nomeVal;
  };

  this.getNome = function () {
    return nome;
  };
}
