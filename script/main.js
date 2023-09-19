
(function($) {
    const nav = document.querySelector("#navInicio");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
    
  });


  // const swiper = new Swiper('.swiper', {
  //   speed: 400,
  //   spaceBetween: 100,
  // });

  AOS.init({
    once: true
  });

  var Wrapper= document.querySelector(".menuWrapper");

   document.querySelectorAll(".itemWrapper").forEach(element => {
     element.addEventListener('click', function(){
      Wrapper.style.display='none';

     })
  });

  

  document.querySelector(".menu__icon").addEventListener('click', function(e){
    Wrapper.style.display='flex';

  })



  




})(jQuery);