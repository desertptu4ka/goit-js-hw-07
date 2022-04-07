import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imgArr = galleryItems.map(
  ({ preview, original, description }) => {
    return `
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
`;
  }
);

gallery.innerHTML = imgArr.join('');

function imgClick() {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();
  const originalImg = event.target.dataset.source;
  instance
    .element()
    .querySelector('img')
    .setAttribute('src', originalImg);
  instance.show();
}

gallery.addEventListener('click', imgClick);

// const basicLightbox = require('basiclightbox');
// import * as basicLightbox from 'basiclightbox';

const instance = basicLightbox.create(
  `
    <img src="" width="800" height="600">
`,
  {
    closable: true,
    onClose: (instance) => {
      instance.element().querySelector('img').setAttribute('src', '');
      //Escape
      document.removeEventListener('keydown', closeWIndow);
    },
    onShow: () => {
      //Escape
      document.addEventListener('keydown', closeWIndow);
    },
  }
);

//Escape
function closeWIndow() {
  if (event.code === 'Escape') {
    if (instance.visible()) {
      instance.close();
    }
  }
}
