import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

function createGalleryElements (array) {
    return array.map(({preview, original, description}) =>
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
    </a>`).join("");
}

function addElementsToHTML(string) {
    galleryPlace.insertAdjacentHTML("afterbegin", string);
}

const galleryPlace = document.querySelector(".gallery");

const galleryElements = createGalleryElements(galleryItems);
addElementsToHTML(galleryElements);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
});
