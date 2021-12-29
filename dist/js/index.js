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

//PLUS AND MINUS CART
function increment() {
  document.getElementById("input").stepUp();
}
function decrement() {
  document.getElementById("input").stepDown();
}

//WISHLIST BUTTON

// function wishlist(x) {
//   x.classList.toggle("fa-heart");
// }

// const whiteHeart = '\u2661';
// const blackHeart = '\u2665';
// const button = document.querySelector('button');
// button.addEventListener('click', toggle);

// function toggleWish() {
//   const like = button.textContent;
//   if(like==whiteHeart) {
//     button.textContent = blackHeart;
//   } else {
//     button.textContent = whiteHeart;
//   }
// }