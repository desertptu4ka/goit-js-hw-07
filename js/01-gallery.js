import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imgArr = [];

galleryItems.forEach(({ preview, original, description }) => {
  const wrap = document.createElement('A');
  const img = document.createElement('IMG');

  wrap.classList.add('gallery__link');
  wrap.setAttribute('href', original);

  img.classList.add('gallery__image');
  img.setAttribute('src', preview);
  img.setAttribute('data-source', original);
  img.setAttribute('atl', description);

  wrap.append(img);
  imgArr.push(wrap);
});

gallery.append(...imgArr);

function imgClick() {
  event.preventDefault();
  const originalImg = event.target.getAttribute('data-source');
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
    },
  }
);

document.addEventListener('keydown', () => {
  if (event.code === 'Escape') {
    if (instance.visible()) {
      instance.close();
    }
  }
});
