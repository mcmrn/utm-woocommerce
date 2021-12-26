//SHOP IMAGE SLIDER
function currentImg(n) {
    showImg(slideIndex = n);
  }
  
  function showImg(n) {
    var i;
    var x = document.getElementsByClassName("active--image");
    var item = document.getElementsByClassName("items--image");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < item.length; i++) {
    x[slideIndex-1].style.display = "block";
    }
  }

//MOBILE NAV BURGER BUTTON

const toggle = document.querySelector('#toggle');
const menu = document.querySelector('.header__menu');

toggle.addEventListener('click', () => menu.classList.toggle('show'))