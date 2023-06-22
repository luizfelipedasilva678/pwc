export class VisaoIMC {
  getPeso() {
    return Number(document.getElementById("peso").value);
  }

  getAltura() {
    return Number(document.getElementById("altura").value);
  }

  setResultado(resultado) {
    document.getElementById("resultado").innerHTML = resultado;
  }

  aoAcionarCalcular(funcao) {
    document.getElementById("form-medidas").addEventListener("submit", (e) => {
      e.preventDefault();
      funcao();
    });
  }
}
