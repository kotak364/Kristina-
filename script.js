//nav bar

const bar = document.querySelector("#bar");
const close = document.querySelector("#close");
const menubar = document.querySelector(".menubar");

bar.addEventListener("click", function () {
  menubar.classList.add("animation-top-to-bottom");
  menubar.classList.remove("animation-bottom-to-top");
});
close.addEventListener("click", function () {
  menubar.classList.add("animation-bottom-to-top");
  menubar.classList.remove("animation-top-to-bottom");
});

//image gallery

const current = document.querySelector("#current");
const image = document.querySelectorAll(".image-slider img");
const opacity = 0.6;

image[0].style.opacity = opacity;

image.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  image.forEach((img) => (img.style.opacity = 1));
  current.src = e.target.src;
  e.target.style.opacity = opacity;
  current.classList.add("fade-in");
  setTimeout(() => current.classList.remove("fade-in"), 500);
  //
}

//image slider
const arrowright = document.querySelector("#arrow-right");
const arrowleft = document.querySelector("#arrow-left");
let initialleft = 1;

function slideLeft() {
  image.forEach((img) => img.classList.add("slide-left"));
  left = initialleft++;
  console.log(left);
  image.forEach((img) => (img.style.left = `${-300 * left}px`));
  let setimage = localStorage.setItem("image", left);
}
arrowleft.addEventListener("click", function () {
  slideLeft();
});
// localStorage.clear();
// console.log(get);

function slideRight() {
  let getimage = localStorage.getItem("image");
  getimage--;
  let set = localStorage.setItem("image", getimage);
  let getimage2 = localStorage.getItem("image");
  console.log(getimage);
  image.forEach((img) => img.classList.add("slide-right"));
  image.forEach((img) => (img.style.left = `${-300 * getimage2}px`));
}
arrowright.addEventListener("click", function () {
  slideRight();
});
