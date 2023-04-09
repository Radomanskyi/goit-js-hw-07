import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`ul`);
const imageMarkup = createImageMarkup (galleryItems);


gallery.insertAdjacentHTML('beforeend', imageMarkup);
gallery.addEventListener(`click`, onGalleryClick);

function createImageMarkup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return`
        <li class="gallery__item js-target">
              <a class="gallery__link js-target" href="${original}">
                <img
                   class="gallery__image js-target js-card"
                   src="${preview}"
                   data-source="${original}"
                   alt="${description}"
                 />
              </a>
            </li>
        `;
    })
    .join(``);
 }

function onGalleryClick (evt) {
    
    if(!evt.target.classList.contains(`js-target`)) {
        return;
    }
    evt.preventDefault();
    const instance = basicLightbox.create(
         `
          <img
            class="gallery__image"
            src=${evt.target.dataset.source}
            alt=${evt.target.alt}
          />
        `,
        {
        onShow: (instance) => {
            document.addEventListener("keydown", onEsc);
            },
        onClose: (instance) => {
            document.removeEventListener("keydown", onEsc);
            },
        }
              );
        instance.show();
          function onEsc(event) {
          if (event.key === "Escape" && modal) {
          instance.close();
          }
         }
}