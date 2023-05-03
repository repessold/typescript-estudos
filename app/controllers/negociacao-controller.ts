import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidadade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes= new Negociacoes;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidadade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        negociacao.data.setDate(12);
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparformulario();
    }     

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidadade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    limparformulario():void{
        this. inputData.value='';
        this.inputQuantidadade.value='';
        this.inputValor.value='';
        this.inputData.focus();
    }

}