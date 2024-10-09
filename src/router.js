import Singleton from './singleton';

export default class Router extends Singleton {
  constructor() {
    super();
    this.routes = [];
  }

  static getInstance() {
    return super.getInstance();
  }
}
