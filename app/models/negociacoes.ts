import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public add(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    public list(): readonly Negociacao[]{
        //... utiliza uma copia
        return this.negociacoes;
    }
}