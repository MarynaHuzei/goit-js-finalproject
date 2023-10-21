import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryCreate = makeGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryCreate);
gallery.addEventListener("click", galleryModal);

function makeGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

const instance = basicLightbox.create(` <img src=""> `, {
  onShow: () => {
    document.addEventListener("keydown", onEsc);
  },
  onClose: () => {
    document.removeEventListener("keydown", onEsc);
  },
});

function galleryModal(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") return;
  instance.element().querySelector("img").src = evt.target.dataset.source;
  instance.show();
}

function onEsc(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
