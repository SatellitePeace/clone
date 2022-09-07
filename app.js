const overlay = document.getElementById("mainBody");
const sidebar = document.querySelector(".sidebar");

const openSidebar = document
  .getElementById("menu")
  .addEventListener("click", () => {
    sidebar.classList.add("show");
    overlay.classList.add("main");
    disableScrolling();
  });

const closeSidebar = document
  .getElementById("close")
  .addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("main");
    enableScrolling();
  });

// Disable Scrolling
function disableScrolling() {
  const x = window.scrollX;
  const y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}
// Enable Scrolling
function enableScrolling() {
  window.onscroll = function () {};
}
// CHANGE NAV COLOR ON SCROLL
const scrollstate = document.querySelector(".scrollNav");
window.addEventListener("scroll", changeStateOnScroll);

function changeStateOnScroll() {
  if (window.scrollY > scrollstate.offsetHeight) {
    scrollstate.classList.add("active");
  } else {
    scrollstate.classList.remove("active");
  }
}
// ADD AND CHANGE DATE DYNAMICALLY
function getDate() {
  let d = new Date().getFullYear();
  const date = document.getElementById("date");
  date.innerText += `  ${d} `;
}
getDate();
