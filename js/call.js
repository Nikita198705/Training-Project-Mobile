$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        // items: 7,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 300,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },
            640:{
                items:5
            },
            860:{
                items:7
            }
        }
    });
});