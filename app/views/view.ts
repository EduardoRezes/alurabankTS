export abstract class View<T> {
    //uma classe abstract não pode ser criada uma instancia diretamente dela.
    protected elemento: HTMLElement;
    private escapar =  false;

    //com o ? em frente ao escapar, significa que esté parametro  é opcional a ser passado por parametro.
    constructor(seletor: string, escapar?: boolean){
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        }else {
            throw new Error(`Seletor ${seletor}não existe no DOM.`);
            
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
        
    public update(model: T): void{
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

    //protected apenas pai e filhas podem ter acesso.
    protected abstract template(model: T): string;
}