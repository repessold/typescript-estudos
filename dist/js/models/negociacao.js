export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // get data(): Date{
    //     return this.data;
    // }
    // get quantidade(): number{
    //     return this.quantidade;
    // }
    // get valor(): number{
    //     return this.valor;
    // }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
