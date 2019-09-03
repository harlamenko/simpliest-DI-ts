import { __decorate, __metadata } from "tslib";
import DependencyContainer from './src/dependency-container';
import { InjectableClass } from './src/util';
class HttpService {
    constructor() {
        console.log(`HttpService is created.`);
    }
    getInfo() {
        return {
            isAdmin: false
        };
    }
}
class BaseService {
    constructor(_httpService) {
        this._httpService = _httpService;
        console.log(`BaseService is created.`);
    }
}
class AuthService {
    constructor(_httpService) {
        this._httpService = _httpService;
        this._httpService = new HttpService();
        console.log(`AuthService is created.`);
    }
    checkIsAdmin() {
        return this._httpService.getInfo().isAdmin;
    }
}
let MainClass = class MainClass {
    constructor(_baseService, _authService, _httpService) {
        this._baseService = _baseService;
        this._authService = _authService;
        this._httpService = _httpService;
        console.log(`MainClass is created.`);
    }
    check() {
        console.log(this._authService.checkIsAdmin());
    }
};
MainClass = __decorate([
    InjectableClass,
    __metadata("design:paramtypes", [BaseService,
        AuthService,
        HttpService])
], MainClass);
const diContainer = new DependencyContainer();
const mainObj = diContainer.resolve(MainClass);
const authObj = diContainer.resolve(AuthService);
mainObj.check(); // ожидаем false
//# sourceMappingURL=main.js.map