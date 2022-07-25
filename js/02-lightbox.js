import { galleryItems } from './gallery-items.js';
// Change code below this line

const simpleLightBoxGallery = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
//console.log(galleryItemsMarkup);
//console.log(createGalleryItemsMarkup(galleryItems));
simpleLightBoxGallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);




function createGalleryItemsMarkup(images) {
    return images.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
        }).join("");
}
//console.log(createGalleryItemsMarkup);

// function createGalleryItemsMarkup(images) {
//     return images.map(({preview, original, description}) => {
//         return `<div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//             <img
//                 class="gallery__image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}"
//             />
//         </a>
//         </div>`;
//     }).join("");




function onClickLightBoxGallery(e) {
    //console.log(e.currentTarget);
    //console.log(e.target);
    e.preventDefault();
    if (!e.target) {
        return;
    }
    
        //const imageOriginal = e.target.dataset.source;
    const gallerySimpleBox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionPosition: 'bottom',
        captionsData: 'alt',
    });
    }
//}

simpleLightBoxGallery.addEventListener('click', onClickLightBoxGallery);


//console.log(galleryItems);
