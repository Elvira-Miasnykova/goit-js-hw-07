import { galleryItems } from './gallery-items.js';
// Change code below this line

const simpleLightBoxGallery = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
console.log(galleryItemsMarkup);
simpleLightBoxGallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);

// const galleryItemsContainer = document.querySelector('.gallery');
// const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
// galleryItemsContainer.insertAdjacentHTML('beforeend',galleryItemsMarkup);


function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({original, preview, description}) => {
        return `<a class="gallery__item" href="${original}">
        < img class="gallery__image" src = "${preview}"
        alt = "${description}" />
            </a>`}).join("");
}

function onClickLightBoxGallery(e) {
    e.preventDefault();
    if (e.nodeName) {
        const imageOriginal = e.target.dataset.source;
        const gallerySimpleBox = new SimpleLightbox('.gallery a', { captionDelay: '250', captionPosition: 'bottom', captionData: "alt" });
    }
}

simpleLightBoxGallery.addEventListener('click', onClickLightBoxGallery);


console.log(galleryItems);
