export class Negociacao {
    constructor(
        private _data: Date,
        private _quantidade: number,
        //todos podem ter acesso a essa propriedade, porem ninguem pode manipula-la, somente leitura.
        public readonly _valor: number) {}

    get data(): Date { return this._data};

    get quantidade(): number { return this._quantidade};

    get valor():number { return this._valor};

    get volume():number { return this._quantidade * this._valor};
}