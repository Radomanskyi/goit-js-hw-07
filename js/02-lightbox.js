import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(`ul`);
const imageMarkup = createImageMarkup (galleryItems);


gallery.insertAdjacentHTML('beforeend', imageMarkup);

function createImageMarkup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return`
        <li class="gallery__item js-target">
   <a class="gallery__link js-target" href="${original}">
      <img class="gallery__image js-target js-card" src="${preview}" alt="${description}" />
   </a>
</li>
        `;
    })
    .join(``);
 }

 var lightbox = new SimpleLightbox(".gallery a", {captionSelector: "img",
 captionDelay: 250,
 captionsData: "alt",
 captionPosition: "bottom",
});