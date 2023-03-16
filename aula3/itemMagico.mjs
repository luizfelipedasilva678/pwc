export function ItemMagico(manaAplicadaVal, energiaAplicadaVal) {
  var manaAplicada = 0;
  var energiaAplicada = 0;

  if (manaAplicadaVal >= 0 && manaAplicada <= 20) {
    manaAplicada = manaAplicadaVal;
  }

  if (energiaAplicadaVal >= 0 && energiaAplicadaVal <= 5) {
    energiaAplicada = energiaAplicadaVal;
  }

  this.getManaAplicada = function () {
    return manaAplicada;
  };

  this.getEnergiaAplicada = function () {
    return energiaAplicada;
  };
}
