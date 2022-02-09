import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    add(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    list(): ReadonlyArray<Negociacao>{
        //... utiliza uma copia
        return this.negociacoes;
    }
}