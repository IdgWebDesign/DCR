
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
  // document.querySelectorAll(".itemNav").forEach(element => {
  //   element.addEventListener('mouseenter', function(){

  //     element.classList.add("animate__flipInX");




  //   })

  //   element.addEventListener('mouseleave', function(){

  //     element.classList.remove("animate__flipInX");




  //   })



  // });



  //Galeria

  document.getElementById('SEC').addEventListener('click', function(e){


    document.getElementById('GALSEC').style.display= 'flex';



  });

  document.getElementById('PRIM').addEventListener('click', function(e){


    document.getElementById('GALPRIM').style.display= 'flex';
   
   
   
  });

  document.getElementById('QUINC').addEventListener('click', function(e){


    document.getElementById('GALQUINC').style.display= 'flex';
  
  
  
  });

  document.querySelector('.crossQuinc').addEventListener('click', function(e){


    document.getElementById('GALQUINC').style.display= 'none';
  
  
  
  });

  document.querySelector('.crossPrim').addEventListener('click', function(e){


    document.getElementById('GALPRIM').style.display= 'none';
  
  
  
  });

  document.querySelector('.crossSec').addEventListener('click', function(e){


    document.getElementById('GALSEC').style.display= 'none';
  
  
  
  });


  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 50,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    
    thumbs: {
      swiper: swiper,
    },
    autoplay: true,
    repeat: true,
  });

  var swiperPrim = new Swiper(".SwiperPrim", {
    loop: true,
    spaceBetween: 50,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
  });

  
  var swiperPrim2 = new Swiper(".SwiperPrim2", {
    loop: true,
    spaceBetween: 10,
    
    thumbs: {
      swiper: swiperPrim,
    },
    autoplay: true,
    repeat: true,
  });

  var swiperQuinc = new Swiper(".SwiperQuinc", {
    loop: true,
    spaceBetween: 50,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  
  var swiperQuinc = new Swiper(".SwiperQuinc2", {
    loop: true,
    spaceBetween: 10,
    
    thumbs: {
      swiper: swiperQuinc,
    },
    autoplay: true,
    repeat: true,
  });




})(jQuery);