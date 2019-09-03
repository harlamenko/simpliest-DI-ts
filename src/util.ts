export interface ConstructorType<T> {
    new(...args: any[]): T;
}

export const InjectableClass = (target: ConstructorType<any>) => {
    // здесь можно взаимодействовать с конструктором
}