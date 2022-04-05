import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imgArr = [];

galleryItems.forEach(({ preview, original, description }) => {
  const wrap = document.createElement('A');
  const img = document.createElement('IMG');

  wrap.classList.add('gallery__item');
  wrap.setAttribute('href', original);

  img.classList.add('gallery__image');
  img.setAttribute('src', preview);
  img.setAttribute('atl', description);
  img.setAttribute('title', description);

  wrap.append(img);
  imgArr.push(wrap);
});

gallery.append(...imgArr);

function imgClick() {
  event.preventDefault();
  lightbox.open();
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

//css
let style = document.createElement('STYLE');
style.type = 'text/css';
style.innerHTML =
  '.sl-overlay {background: linear-gradient(0deg, rgba(120,121,9,1) 0%, rgba(0,6,179,1) 100%);}';
document.querySelector('body').append(style);
