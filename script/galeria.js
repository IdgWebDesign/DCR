(function($) {


//Galeria

document.getElementById('SEC').addEventListener('click', function(e){


    document.getElementById('GALSEC').style.display= 'flex';
    console.log("Abierto");


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