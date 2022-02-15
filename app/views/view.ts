export abstract class View<T> {
    //uma classe abstract não pode ser criada uma instancia diretamente dela.
    protected elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    abstract template(model: T): string;
    
    update(model: T): void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}