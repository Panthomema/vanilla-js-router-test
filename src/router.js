import Route from './route';

export default class Router {
  constructor() {
    this.routes = [];
    this.currentRoute = null;

    window.addEventListener('popstate', this.handlePopState.bind(this));
    document.addEventListener('click', this.handleClick.bind(this));
  }

  hasRoute(path) {
    return this.routes.some((route) => route.path === path);
  }

  addRoute(route) {
    if (!(route instanceof Route)) throw new Error('Is not a route');

    this.routes.push(route);
    console.log(this.routes);
  }

  handleClick(event) {
    const { target } = event;
    if (target.tagName === 'A') {
      event.preventDefault();
      const path = target.getAttribute('href');
      window.history.pushState({}, '', path);
      this.render();
    }
  }

  handlePopState() {
    this.render();
  }

  render() {
    const path = window.location.pathname;
    const matchingRoute = this.routes.find((route) => route.path === path);

    if (matchingRoute) {
      this.currentRoute = matchingRoute;
      this.renderComponent(matchingRoute.component);
    }
  }

  renderComponent(component) {
    document.querySelector('#app').replaceChildren(component);
  }
}
