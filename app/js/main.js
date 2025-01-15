const menuBtn = document.querySelectorAll(".burger__list");
const menuMobile = document.querySelectorAll(".nav__mobile");

menuBtn[0].addEventListener("click", function () {
  if (menuBtn[0].checked) {
    menuMobile[0].classList.add("nav--active");
    menuMobile[0].classList.remove("nav--diactive");
  } else {
    menuMobile[0].classList.remove("nav--active");
    menuMobile[0].classList.add("nav--diactive");
  }
});