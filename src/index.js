import { createNavLinkComponent, createPageComponent } from './functions';
import Router from './router';
import Route from './route';
import './style.css';

const router = Router.getInstance();
console.log(router);

const homeComponent = createPageComponent('home');
const aboutComponent = createPageComponent('about');
const contactComponent = createPageComponent('contact');

router.addRoute(new Route('/', homeComponent));
router.addRoute(new Route('/about', aboutComponent));
router.addRoute(new Route('/contact', contactComponent));

router.render();

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const pathName = formData.get('route');

  this.reset();

  if (router.hasRoute(`/${pathName}`)) return;

  router.addRoute(
    new Route(`/${pathName}`, createPageComponent(`${pathName}`)),
  );

  const navLink = createNavLinkComponent(pathName);

  document.querySelector('nav').appendChild(navLink);
});
