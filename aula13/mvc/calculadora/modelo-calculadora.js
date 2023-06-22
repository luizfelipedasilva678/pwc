export class ModeloCalculadora {
  realizarOperacao(n1, n2, operacao) {
    switch (operacao) {
      case "+":
        return n1 + n2;
      case "-":
        return n1 - n2;
      case "*":
        return n1 * n2;
      case "/":
        return n1 / n2;
      default:
        return 0;
    }
  }
}
