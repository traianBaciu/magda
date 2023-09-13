// variables
const menuToggler = document.querySelector(".menu-toggler");
const mobileMenu = document.querySelector(".mobile-navigation");

// functions
function toggleSandwich(e) {
  e.preventDefault();
  this.classList.toggle("clicked");
  mobileMenu.classList.toggle("show");
}
// listeners
menuToggler.addEventListener("click", toggleSandwich);
