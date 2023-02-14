// Menu Hamburger
const menu = document.querySelector("#menu");
const navMenu = document.querySelector("#nav-menu");

// Menu Navbar
menu.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
  navMenu.classList.toggle("hidden");
});

// Ketika klik di luar menu
window.addEventListener("click", function (e) {
  if ((e.target != menu) & (e.target != navMenu)) {
    menu.classList.remove("menu-active");
    navMenu.classList.add("hidden");
  }
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Dark Mode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// sesuaikan checkbox dengan tema
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
