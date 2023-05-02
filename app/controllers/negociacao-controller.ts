export class NegociacaoController{
    private inputData;
    private inputQuantidadade;
    private inputValor;

    constructor (){
        this.inputData= document.querySelector('#data');
        this.inputQuantidadade=document.querySelector('#quantidade');
        this.inputValor=document.querySelector('#valor');

       
    }
    adiciona(){
                console.log(this.inputData);
                console.log(this.inputQuantidadade);
                console.log(this.inputValor);
            }

}

