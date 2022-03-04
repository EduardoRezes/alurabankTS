export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertKey}, tempo de execução: ${(t2-t1)/100} ${unidade}.`);
            retorno
        }
        return descriptor;
    }
}