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