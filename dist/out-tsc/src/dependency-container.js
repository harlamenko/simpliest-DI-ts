import 'reflect-metadata';
export default class DependencyContainer extends Map {
    resolve(target) {
        // получаем список заинжекченных классов
        const targets = Reflect.getMetadata('design:paramtypes', target) || [];
        // итерируем по свойствам зависимых классов и создаем их экземпляры рекурсивно
        const injectors = targets.map(injector => this.resolve(injector));
        let entity = this.get(target);
        if (entity) {
            return entity;
        }
        // target === (текущий класс), injectors === (объекты инжектируемых классов)
        entity = new target(...injectors);
        this.set(target, entity);
        return entity;
    }
}
//# sourceMappingURL=dependency-container.js.map