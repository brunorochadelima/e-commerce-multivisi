const btnHamburger = document.querySelector(".btnHamburger");
const drawer = document.querySelector(".header-mobile-drawer");
const btncloseDrawer = document.querySelector(".btncloseDrawer");

btnHamburger.addEventListener("click", openDrawer, {passive: true});
btncloseDrawer.addEventListener("click", closeDrawer, {passive: true});
btnHamburger.addEventListener("touchstart", openDrawer);
btncloseDrawer.addEventListener("touchstart", closeDrawer);

function openDrawer(event) {
  if (event.type === "touchstart") event.preventDefault();
  drawer.classList.add("active");
}

function closeDrawer(event) {
  if (event.type === "touchstart") event.preventDefault();
  drawer.classList.remove("active");
}
