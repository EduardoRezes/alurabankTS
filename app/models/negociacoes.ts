import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    add(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    list(): readonly Negociacao[]{
        //... utiliza uma copia
        return this.negociacoes;
    }
}