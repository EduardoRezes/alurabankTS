export class Negociacao {
    constructor(
        private _data: Date,
        private _quantidade: number,
        //todos podem ter acesso a essa propriedade, porem ninguem pode manipula-la, somente leitura.
        public readonly _valor: number) {}

    get data(): Date { 
        const data = new Date(this._data.getTime());
        return data
    };

    get quantidade(): number { return this._quantidade};

    get volume():number { return this._quantidade * this._valor};

    //todo método static pode ser chamado direto da classe, sem precisar instaciar a classe.
    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
          //Regular expression
          const exp = /-/g;
          //get value on form and format type
          const date = new Date(dataString.replace(exp, ','));
          const quantidade = parseInt(quantidadeString);
          const valor = parseFloat(valorString);
          return new Negociacao(date, quantidade, valor);
    }
}