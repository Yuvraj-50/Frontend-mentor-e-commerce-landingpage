const thumbnail = document.querySelectorAll("#thumbnail");
const all_big_img = document.querySelectorAll(".big-img");
const big_img = document.querySelector(".big-img");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeMenu = document.querySelector(".close-menu");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const cartIcon = document.querySelector("#cart");
const cartCard = document.querySelector(".cart-empty");
const cartCloseIcon = document.querySelector(".cart-close");
const previousSlide_El = document.querySelectorAll(".previous-slide");
const nextSlide_El = document.querySelectorAll(".next-slide");
const addToCartBtn = document.querySelector(".add-cart-btn");
const cartEmptyText = document.querySelector(".cart-empty-text");
const cartContent = document.querySelector(".item-container");
const noOfItemCartNumber = document.querySelector(".cart-number");
const total = document.querySelector(".price");
const emptyCartText = document.querySelector(".cart-empty-text");
const deleteIcon = document.querySelector(".delete");
const cartNumber = document.querySelector(".cart-number");
const openmenu = document.querySelector(".open-menu");
const closeNavbar = document.querySelector(".close");

let inputValue = document.querySelector(".input");
// for img to show
thumbnail.forEach((thumb) => {
  thumb.addEventListener("click", function (e) {
    all_big_img.forEach(
      (img) => (img.src = `images/image-product-${e.target.dataset.img}.jpg`)
    );
    thumbnail.forEach((thumb) => thumb.classList.remove("thumbnail-active"));
    thumb.classList.add("thumbnail-active");
  });
});

// modal to show
big_img.addEventListener("click", function () {
  window.scrollTo({ top: 0 });
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
});

// modal to close
function closeModal() {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}

closeMenu.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
// plus and  minus button to work
plus.addEventListener("click", function () {
  inputValue.textContent = inputValue.value++;
});

minus.addEventListener("click", function () {
  if (inputValue.value <= 1) {
    inputValue.textContent = 1;
  } else {
    inputValue.textContent = inputValue.value--;
  }
});

// cart functionality
cartIcon.addEventListener("click", function () {
  cartCard.classList.toggle("cart-hidden");
});

cartCloseIcon.addEventListener("click", function () {
  cartCard.classList.add("cart-hidden");
});

const images = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

let counter = 0;

nextSlide_El.forEach((slide) => slide.addEventListener("click", nextSlide));
previousSlide_El.forEach((slide) =>
  slide.addEventListener("click", previousSlide)
);
function nextSlide() {
  counter++;
  let length = images.length;
  if (counter >= length) counter = 0;
  all_big_img.forEach((big_img) => (big_img.src = images[counter]));
  thumbnail.forEach((thumb) => {
    thumb.classList.remove("thumbnail-active");
    const dataset = thumb.dataset.img - 1;
    if (dataset == counter) thumb.classList.add("thumbnail-active");
  });
}

function previousSlide() {
  counter--;
  if (counter < 0) counter = images.length - 1;
  all_big_img.forEach((big_img) => (big_img.src = images[counter]));
  thumbnail.forEach((thumb) => {
    thumb.classList.remove("thumbnail-active");
    const dataset = thumb.dataset.img - 1;
    if (dataset == counter) thumb.classList.add("thumbnail-active");
  });
}

// Add to cart
addToCartBtn.addEventListener("click", function () {
  cartContent.classList.remove("hidden");
  cartEmptyText.classList.add("hidden");
  noOfItemCartNumber.textContent = inputValue.value;
  total.textContent = `$ 125 * ${inputValue.value} = $${
    125 * inputValue.value
  }`;
  total.style.fontWeight = "bold";
  cartNumber.classList.remove("hidden");
});

deleteIcon.addEventListener("click", function () {
  cartContent.classList.add("hidden");
  noOfItemCartNumber.textContent = 0;
  cartNumber.classList.add("hidden");
  inputValue.value = 1;
});

// navigation menu
openmenu.addEventListener("click", function () {
  document.querySelector(".nav-links").classList.add("open");
  document.body.style.overflow = "hidden";
});

closeNavbar.addEventListener("click", function () {
  document.querySelector(".nav-links").classList.remove("open");
  document.body.style.overflow = "auto";
});
