export class ModeloIMC {
  realizarClassficacao(peso, altura) {
    const faixa = peso / (altura * altura);

    if (faixa < 17) {
      return "Muito abaixo do peso";
    }

    if (faixa >= 17 && faixa <= 18.49) {
      return "Abaixo do peso";
    }

    if (faixa >= 18.57 && faixa <= 24.99) {
      return "Peso normal";
    }

    if (faixa >= 25 && faixa <= 29.99) {
      return "Acima do peso";
    }

    if (faixa >= 30 && faixa <= 34.99) {
      return "Obsesidade I";
    }

    if (faixa >= 35 && faixa <= 39.99) {
      return "Obsesidade II";
    }

    if (faixa > 40) {
      return "Obsesidade III";
    }
  }
}
