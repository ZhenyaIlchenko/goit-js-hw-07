import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const galleryItemEl = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
<a class="gallery__item" href="${item.original}">
<img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"/></a></div>`
  )
  .join("");
galleryEl.insertAdjacentHTML("beforeend", galleryItemEl);
// console.log(galleryEl);

const gallery = new SimpleLightbox(".gallery a");
