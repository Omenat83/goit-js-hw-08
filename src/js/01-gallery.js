import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

function createGalleryElements (array) {
    return array.map(({preview, original, description}) =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`).join("");
}

function addElementsToHTML(string) {
    galleryPlace.insertAdjacentHTML("afterbegin", string);
}

function onImgClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const bigPictureSrc = evt.target.getAttribute('data-source');
    const instance = basicLightbox.create(`<img src="${bigPictureSrc}" width="800" height="600">`
    ,{
        onShow: (instance) => {document.body.addEventListener('keydown', closeImgByEsc, {once: true})}
    });
    instance.show();

    function closeImgByEsc(evt) {
    if (evt.code === 'Escape') {
        instance.close();
    }
}
}

const galleryPlace = document.querySelector(".gallery");

const galleryElements = createGalleryElements(galleryItems);
addElementsToHTML(galleryElements);

galleryPlace.addEventListener('click', onImgClick);