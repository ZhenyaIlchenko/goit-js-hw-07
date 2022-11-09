import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const modal = basicLightbox.create(`
    <div class="modal">
        <p>
            <img class="modal-image" src=""></img>
        </p>
    </div>
`);

const refs = {
  gallery: document.querySelector(".gallery"),
  modalImage: modal.element().querySelector(".modal-image"),
};

const galleryItemEl = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"/></a></div>`
  )
  .join("");
refs.gallery.insertAdjacentHTML("beforeend", galleryItemEl);
console.log(refs.gallery);

refs.gallery.addEventListener("click", onImageClick);

// function onImageClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
// }

function onImageClick(event) {
  event.preventDefault();

  const isImageSwatchEl = event.target.classList.contains("gallery__image");

  if (!isImageSwatchEl) {
    return;
  }
  const swatchEl = event.target.dataset.source;
  //   console.log(event.target.dataset.source);
}

modal.show();
