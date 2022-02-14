import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

    private elemento: HTMLElement;
    
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    template(model: Negociacoes): string{
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.list().map(negocicao => {
                        return `
                            <tr>
                                <td>${}</td>
                                <td>${negocicao.quantidade}</td>
                                <td>${negocicao._valor}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    update(model: Negociacoes): void{
        const template = this.template(model);
        console.log(template);
        this;this.elemento.innerHTML = template;
    }
}