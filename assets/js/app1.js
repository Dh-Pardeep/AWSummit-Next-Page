$(function () {
  $("#slider").slick({
    arrows: false,
    autoplay: false,
    autoplaySpeed: 0,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          autoplay: true,
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          autoplay: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          slidesToShow: 2.7,
        },
      },
      {
        breakpoint: 400,
        settings: {
          autoplay: true,
          slidesToShow: 1.7,
        },
      },
    ],
  });
});


// slider 
$(".sponsors").slick({
  dots: true,
  infinite: false,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  infinite: true,
  cssEase: "linear",
  autoplaySpeed: 0,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        dots: false,
      },
    },
  ],
});


// nav bar
const a = document.getElementById("nav")
const b = document.getElementById("change")
function navresponsive() {
  a.classList.toggle("show")
  document.body.classList.toggle("overflow_hidden")
  b.classList.toggle("change")
}


// check box function
function check() {
  document.getElementById("check").classList.toggle("d-none");
}


// preloader
const preloader = document.getElementById("preloader")
setTimeout(() => {
  preloader.classList.add("d-none")
  document.body.classList.remove("overflow_hidden_two")
}, 3000)



// back to top

let mybutton = document.getElementById("back-top");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// aos
AOS.init({
  duration: 1300,
  once: true,
});



// JavaScript to apply alternating row colors
const rows = document.querySelectorAll('tbody tr');
rows.forEach((row, index) => {
    if (index % 2 === 0) {
        row.classList.add('even-row');
    } else {
        row.classList.add('odd-row');
    }
});