import { Guerreiro } from "./guerreiro.mjs";
import { ItemMagico } from "./itemMagico.mjs";

function numeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

function jogar() {
  var guerreiro1 = new Guerreiro(100, 20, "GUERREIRO 1");
  var guerreiro2 = new Guerreiro(100, 15, "GUERREIRO 2");
  var rodadas = 10;
  var i = 0;
  var rodadasDeItems = [2, 4, 6, 8, 10];

  function createItem(guerreiro) {
    if (
      i === rodadasDeItems[0] ||
      i === rodadasDeItems[1] ||
      i === rodadasDeItems[2] ||
      i === rodadasDeItems[3] ||
      i === rodadasDeItems[4]
    ) {
      var newItem = new ItemMagico(
        numeroAleatorio(-5, 5),
        numeroAleatorio(-20, 20),
        `Item da rodada ${i}`
      );

      console.log(
        `O ${newItem.getNome()} vai ser aplicado ao guerreiro ${guerreiro.getNome()}`
      );

      guerreiro.usarItemMagico(newItem);
    }
  }

  while (i < rodadas) {
    var number = Math.random();

    if (number >= 0 && number <= 0.5) {
      console.log(`${guerreiro1.getNome()} VAI ATACAR`);
      createItem(guerreiro1);
      guerreiro2.sofrerDano(5);
    } else {
      console.log(`${guerreiro2.getNome()} VAI ATACAR`);
      createItem(guerreiro2);
      guerreiro1.sofrerDano(5);
    }

    i++;
  }

  console.log(`ENERGIA DO ${guerreiro1.getNome()} ${guerreiro1.getEnergia()}`);
  console.log(`ENERGIA DO ${guerreiro2.getNome()} ${guerreiro2.getEnergia()}`);

  if (guerreiro1.getEnergia() === guerreiro2.getEnergia()) {
    if (guerreiro1.getMana() === guerreiro2.getMana()) {
      console.log("EMPATE!");
    } else {
      if (guerreiro1.getMana() > guerreiro2.getMana()) {
        console.log(`${guerreiro1.getNome()} FOI O VENCEDOR`);
      } else {
        console.log(`${guerreiro2.getNome()} FOI O VENCEDOR`);
      }
    }
  } else {
    if (guerreiro1.getEnergia() > guerreiro2.getEnergia()) {
      console.log(`${guerreiro1.getNome()} FOI O VENCEDOR`);
    } else {
      console.log(`${guerreiro2.getNome()} FOI O VENCEDOR`);
    }
  }
}

jogar();
