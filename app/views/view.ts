import { inspect } from "../decorators/inspect.js";

export abstract class View<T> {
    //uma classe abstract não pode ser criada uma instancia diretamente dela.
    protected elemento: HTMLElement;

    //com o ? em frente ao escapar, significa que esté parametro  é opcional a ser passado por parametro.
    constructor(seletor: string){
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        }else {
            throw new Error(`Seletor ${seletor}não existe no DOM.`);
            
        }
    }
    
    @inspect()
    public update(model: T): void{
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    //protected apenas pai e filhas podem ter acesso.
    protected abstract template(model: T): string;
}