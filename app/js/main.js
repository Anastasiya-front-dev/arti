const menuBtn = document.querySelectorAll(".burger__list");
const burg=document.querySelectorAll(".burger");
const menuMobile = document.querySelectorAll(".nav__mobile");
const navArrow = document.querySelectorAll(".nav__arrow");
menuBtn[0].addEventListener("click", function () {
  if (menuBtn[0].checked) {

    menuMobile[0].classList.add("nav--active");
    menuMobile[0].classList.remove("nav--diactive");
  } else {
   
    menuMobile[0].classList.remove("nav--active");
    menuMobile[0].classList.add("nav--diactive");
  }
});


// menuMobile[0].addEventListener("click", function (event) {
//   if (event.target !== menuMobile[0]) {

//       menuBtn[0].checked = false;
//       menuMobile[0].classList.remove("nav--active");
//       menuMobile[0].classList.add("nav--diactive");

//   }
// });

const acc = document.getElementsByClassName("accordionn");
let i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("mouseover", function () {
//     this.classList.add("active");
//     var panel = this.nextElementSibling;
//     panel.style.maxHeight = panel.scrollHeight + "px";
//   });

//   acc[i].addEventListener("mouseout", function () {
//     this.classList.remove("active");
//     var panel = this.nextElementSibling;
//     panel.style.maxHeight = null;
//   });
// }

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      navArrow[0].classList.remove("nav__arrow--rotate");
      
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      navArrow[0].classList.add("nav__arrow--rotate");
    }
  });
}
// Обработчик для клика вне аккордеона
document.addEventListener("click", function (event) {
  let isClickInside = false;
  for (i = 0; i < acc.length; i++) {
    if (acc[i].contains(event.target)) {
      isClickInside = true;
      break;
    }
  }
  if (!isClickInside) {
    for (i = 0; i < acc.length; i++) {
      const panel = acc[i].nextElementSibling;
      panel.style.maxHeight = null;
      navArrow[0].classList.remove("nav__arrow--rotate");
      acc[i].classList.remove("active");
    }
  }
});
