export function logarTempoDeExecucao() {
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        return descriptor;
    }
}