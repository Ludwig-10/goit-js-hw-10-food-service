import gallery from './menu.json';

import menuTemplate from './templates/menu.hbs';

const galleryRef = document.querySelector('.js-menu');

const markup = menuTemplate(gallery);
galleryRef.insertAdjacentHTML('beforeend', markup);