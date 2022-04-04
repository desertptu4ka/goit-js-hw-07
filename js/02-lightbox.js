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
  const originalImg = event.target.getAttribute('data-source');
  lightbox.open();
}

gallery.addEventListener('click', imgClick);

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
