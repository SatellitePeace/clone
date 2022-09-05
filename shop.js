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
const controls = document.querySelectorAll(".productsControls");
const figures = document.getElementsByTagName("figure");
let slide = 0;
controls[1].onclick = () => {
  slide++;
  for (let i of figures) {
    if (slide == 0) {
      i.style.left = "0px";
    }
    if (slide == 1) {
      i.style.left = "-400px";
    }
    if (slide == 2) {
      i.style.left = "-800px";
    }
    if (slide == 3) {
      i.style.left = "-1600px";
    }
    if (slide == 4) {
      i.style.left = "-2400px";
    }
    if (slide > 4) {
      slide = 4;
    }
  }
};
controls[0].onclick = () => {
  slide--;
  for (let i of figures) {
    if (slide == 0) {
      i.style.left = "0px";
    }
    if (slide == 1) {
      i.style.left = "-740px";
    }
    if (slide == 2) {
      i.style.left = "-1480px";
    }
    if (slide == 3) {
      i.style.left = "-2220px";
    }
    if (slide == 4) {
      i.style.left = "-2800px";
    }
    if (slide < 0) {
      slide = 4;
    }
  }
};
