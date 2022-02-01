// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);




renderGallery(galleryItems);


let gallery = new SimpleLightbox('.gallery__item');
    gallery.on('show.simplelightbox');


galleryRef.addEventListener('click', (event) => event.preventDefault());


function renderGallery(arr) {
    const galleryStr = arr.map(img => `
    
  <a class="gallery__item" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      
      alt="${img.description}"
      title="${img.description}"
    />
  </a>
    `).join('');

    galleryRef.insertAdjacentHTML('beforeend', galleryStr );
}

   
