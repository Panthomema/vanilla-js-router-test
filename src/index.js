import Router from './router';
import Route from './route';
import './style.css';

const router = new Router();

const homeComponent = document.createElement('div');
homeComponent.textContent = 'Hello from home';

const aboutComponent = document.createElement('div');
aboutComponent.textContent = 'Hello from about';

const contactComponent = document.createElement('div');
contactComponent.textContent = 'Hello from contact';

router.addRoute(new Route('/', homeComponent));
router.addRoute(new Route('/about', aboutComponent));
router.addRoute(new Route('/contact', contactComponent));


router.render();

