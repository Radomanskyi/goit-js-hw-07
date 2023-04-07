import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`ul`);
const imageMarkup = createImageMarkup (galleryItems);


gallery.insertAdjacentHTML('beforeend', imageMarkup);
gallery.addEventListener("click", (event) => {
    event.preventDefault();});
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
    const adress = evt.target.closest(".js-card");
    const { source } = adress.dataset;
    const data = galleryItems.find(({ original }) => original === source);
    const instance = basicLightbox.create(
         `
          <img
            class="gallery__image"
            src=${data.original}
            alt=${data.description}
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
          const modal = document.querySelector(".basicLightbox");
          if (event.key === "Escape" && modal) {
          instance.close();
          }
         }
}