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
}