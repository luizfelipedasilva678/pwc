import { Guerreiro } from "./guerreiro.mjs";

function jogar() {
  var guerreiro1 = new Guerreiro(100, 20, "GUERREIRO 1");
  var guerreiro2 = new Guerreiro(100, 15, "GUERREIRO 2");
  var rodadas = 10;
  var i = 0;

  while (i < rodadas) {
    var number = Math.random();

    if (number >= 0 && number <= 0.5) {
      console.log(`${guerreiro1.getNome()} VAI ATACAR`);
      guerreiro2.sofrerDano(5);
    } else {
      console.log(`${guerreiro2.getNome()} VAI ATACAR`);
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
