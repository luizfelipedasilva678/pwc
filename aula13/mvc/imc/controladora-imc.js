import { ModeloIMC } from "./modelo-imc.js";
import { VisaoIMC } from "./visao-imc.js";

export class ControladoraIMC {
  constructor() {
    this.modelo = new ModeloIMC();
    this.visao = new VisaoIMC();
  }

  realizarOperacao() {
    const peso = this.visao.getPeso();
    const altura = this.visao.getAltura();
    const resultado = this.modelo.realizarClassficacao(peso, altura);
    this.visao.setResultado(resultado);
  }

  iniciar() {
    console.log(this.visao);
    this.visao.aoAcionarCalcular(this.realizarOperacao.bind(this));
  }
}
