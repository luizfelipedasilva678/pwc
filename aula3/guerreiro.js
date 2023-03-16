function Guerreiro(energiaVal, manaVal) {
  var energia = energiaVal;
  var mana = manaVal;
  var morto = false;

  this.getEnergia = function () {
    return energia;
  };

  function isInRange(value, min, max) {
    return value >= min && value <= max;
  }

  this.setEnergia = function (energiaVal) {
    if (!isNaN(energiaVal) && isInRange(energiaVal, 0, 100)) {
      energia = energiaVal;
    }
  };

  this.getMana = function () {
    return mana;
  };

  this.setMana = function (manaVal) {
    if (!isNaN(manaVal) && isInRange(manaVal, 0, 50)) {
      mana = manaVal;
    }
  };

  this.adicionarEnergia = function (energy) {
    if (!isNaN(energy) && isInRange(energy, 0, 100)) {
      energia += energy;

      if (energia > 100) {
        energia = 100;
      }
    }
  };

  this.sofrerDano = function (damage) {
    if (!isNaN(damage) && isInRange(damage, 0, 100)) {
      energia -= damage;

      if (energia < 0) {
        energia = 0;
      }
    }
  };

  this.morto = function () {
    if (this.getEnergia() === 0) {
      morto = true;
    }

    return morto;
  };
}

var guerreiro = new Guerreiro(100, 25);

console.log(
  "Energia =>",
  guerreiro.getEnergia(),
  "Mana =>",
  guerreiro.getMana()
);

var dano = 100;
guerreiro.sofrerDano(dano);
console.log(`Sofreu ${dano} de dano`);

guerreiro.adicionarEnergia(0);

console.log("Novo valor de energia", guerreiro.getEnergia());
console.log("Guerreiro morreu? ", guerreiro.morto() ? "Sim ⚰️" : "Não 😄");
