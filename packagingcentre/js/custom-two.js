$(document).ready(function () {
   

// logo slider
$('.logo-slider').owlCarousel({
    loop:true,
      dots:false,
    autoplayTimeout: 5000,
    margin:10,
      nav:true,             
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"], 
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        571:{
          items:2,
      },
        768:{
            items:3,
        }, 
        991:{
            items:4,
        },
        1280:{
            items:5,
        }
    }
  })
  
});
