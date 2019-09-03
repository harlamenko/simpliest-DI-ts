import DependencyContainer from './src/dependency-container';
import { InjectableClass } from './src/util';

class HttpService {
  constructor() {
    console.log(`HttpService is created.`);
  }
  getInfo() {
    return {
      isAdmin: false
    }
  }
}


class BaseService {
  constructor(
    public _httpService: HttpService,
  ) {
    console.log(`BaseService is created.`);
  }
}

class AuthService {
  constructor(
    public _httpService: HttpService,
  ) {
    this._httpService = new HttpService();
    console.log(`AuthService is created.`);
  }
  checkIsAdmin() {
    return this._httpService.getInfo().isAdmin;
  }
}

@InjectableClass
class MainClass {
  constructor(
    public _baseService: BaseService,
    public _authService: AuthService,
    public _httpService: HttpService,
  ) {
    console.log(`MainClass is created.`);
  }

  public check() {
    console.log(this._authService.checkIsAdmin());
  }
}

const diContainer = new DependencyContainer();

const mainObj = diContainer.resolve(MainClass);
const authObj = diContainer.resolve(AuthService);

mainObj.check(); // ожидаем false