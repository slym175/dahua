$(function () {
    $('.home-carousel').owlCarousel({
        loop:true,
        margin:10,
        items: 1,
        autoHeight:true,
        nav:true,
        dots: false,
        responsive:{
            
        }
    })

    $('.solutions-carousel').owlCarousel({
        loop: true,
        margin: 30,
        items: 3,
        autoHeight: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
});