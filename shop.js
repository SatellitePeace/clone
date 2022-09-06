// SHOP HEADER SLIDER
let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

// Change navbar state on scroll
const nav = document.getElementById("shopNav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

// Products carousel controller
const carousel = document.getElementById("carousel");
const items = document.getElementsByClassName("fig");
function next() {
  carousel.append(items[0]);
}
function prev() {
  carousel.prepend(items[items.length - 1]);
}
