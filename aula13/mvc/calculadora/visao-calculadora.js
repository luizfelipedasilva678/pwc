export class VisaoCalculadora {
  getN1() {
    return Number(document.getElementById("n1").value);
  }

  getN2() {
    return Number(document.getElementById("n2").value);
  }

  getOperacao() {
    return document.getElementById("operacao").value;
  }

  setResultado(resultado) {
    document.getElementById("resultado").value = resultado;
  }

  aoAcionarCalcular(funcao) {
    document
      .getElementById("form-operacoes")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        funcao();
      });
  }
}
