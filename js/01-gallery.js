import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

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
galleryEl.insertAdjacentHTML("beforeend", galleryItemEl);
// console.log(galleryEl);

galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();

  const isImageSwatchEl = event.target.classList.contains("gallery__image");
  if (!isImageSwatchEl) {
    return;
  }

  const modal = basicLightbox.create(
    `
          <img class="modal-image" src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: (modal) => {
        window.addEventListener("keydown", onEscPress);
        // modal.element().querySelector("img").onclick = modal.close;
      },
      onClose: (modal) => {
        window.removeEventListener("keydown", onEscPress);
      },
    }
  );

  function onEscPress(event) {
    if (event.code === "Escape") {
      modal.close();
    }
  }
  modal.show();
}
