// navbar toggle 
let navBar = document.querySelector('.navLink');
let menuBar = document.querySelector('#menuBtn');

menuBar.onclick = ()=>{
    navBar.classList.toggle('active')
}

// scroll section & sticky navbar 
window.onscroll = ()=>{
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
}

// swiper js code 
let swiper = new Swiper(".myHome", {
    spaceBetween: 30,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // counter code 
$(document).ready(function(){
  $('.num').counterUp({
    delay: 10,
    time: 2000
    });


		
})
