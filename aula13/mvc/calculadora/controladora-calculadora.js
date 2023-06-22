import { ModeloCalculadora } from "../modelo-calculadora.js";
import { VisaoCalculadora } from "../visao-calculadora.js";

export class ControladoraCalculadora {
  constructor() {
    this.modelo = new ModeloCalculadora();
    this.visao = new VisaoCalculadora();
  }

  realizarOperacao() {
    const n1 = this.visao.getN1();
    const n2 = this.visao.getN2();
    const operacao = this.visao.getOperacao();
    const resultado = this.modelo.realizarOperacao(n1, n2, operacao);
    this.visao.setResultado(resultado);
  }

  iniciar() {
    this.visao.aoAcionarCalcular(this.realizarOperacao.bind(this));
  }
}
