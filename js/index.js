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

const menu = document.querySelector('.header__menu');
const toggle = document.querySelector('#toggle');
const closeNav = document.querySelector('#closeNav');


toggle.addEventListener('click', () => menu.classList.toggle('show'));

closeNav.addEventListener('click', () => menu.classList.toggle('show'));




// const offClick = () => {
//   menu.classList.toggle('show');
//   document.removeEventListener('click', offClick)
// }

// const handleClick = (e) => {
//   e.stopPropagation()
//   menu.classList.toggle('show');
//   if(menu.classList.contains('show')) {
//     documnent.addEventListener('click', offClick)
//   }
// }
// toggle.addEventListener('click', handleClick)




//PLUS AND MINUS CART

document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

var valueCount;

var price = document.getElementById("price").innerText;

function priceTotal() {
    var total = valueCount * price + ".00";
    document.getElementById("price").innerText = total;
}

document.querySelector(".plus-btn").addEventListener("click", () => {
    valueCount = document.getElementById("quantity").value;

    valueCount++;

    document.getElementById("quantity").value = valueCount;

    if (valueCount > 1) {
        document.querySelector(".minus-btn").removeAttribute("disabled");
    }

    priceTotal()
})

    document.querySelector(".minus-btn").addEventListener("click", () => {
    valueCount = document.getElementById("quantity").value;

    valueCount--;

    document.getElementById("quantity").value = valueCount

    if (valueCount == 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    }
    priceTotal()
})