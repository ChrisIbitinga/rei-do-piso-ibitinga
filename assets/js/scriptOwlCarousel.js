$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true,
            dots:true,
            autoplay: true
        },
        600:{
            items:2,
            nav:false,
            loop:true,
            dots:true,
            autoplay: true
        },
        1000:{
            items:4,
            nav:false,
            loop:true,
            dots:true,
            autoplay: true
        }
    }
})

