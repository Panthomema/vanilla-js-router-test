function createPageComponent(name) {
  const page = document.createElement('div');
  page.textContent = `hello from ${name}`;

  return page;
}

function createNavLinkComponent(name) {
  const navLink = document.createElement('div');
  navLink.classList.add('nav-link');

  const link = document.createElement('a');
  link.textContent = name;
  link.setAttribute('href', `/${name}`);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'remove';

  navLink.append(link, removeButton);

  return navLink;
}


export { createPageComponent, createNavLinkComponent };
