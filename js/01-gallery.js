import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryItemsContainer.insertAdjacentHTML('beforeend',galleryItemsMarkup);
//console.log(createGalleryItemsMarkup(galleryItems));

function createGalleryItemsMarkup(images) {
    return images.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
        </div>`;
    }).join("");
    
}

function onClickgalleryItemsContainer(e) {
    e.preventDefault();

    //console.log(e.target);
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    const imageOriginal = e.target.dataset.source;
    
    const modalLightBox = basicLightbox.create(`
    <img src="${imageOriginal}", width="1280", heigth="800">`,
        {
            onShow: (modalLightBox) => { addEventListener('keydown', onPressEsc) },
            onClose: (modalLightBox) => { removeEventListener('keydown', onPressEsc) },
        });

    modalLightBox.show();


    function onPressEsc(e) {
        if (e.code === "Escape") {
            modalLightBox.close();
        }
    }
}

galleryItemsContainer.addEventListener('click', onClickgalleryItemsContainer);
 
//console.log(galleryItems);
