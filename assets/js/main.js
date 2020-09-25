$(function () {

    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    $('.home-carousel').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        autoHeight: true,
        nav: true,
        dots: false,
        responsive: {

        }
    })

    $('.solutions-carousel').owlCarousel({
        loop: true,
        margin: 30,
        items: 3,
        autoHeight: true,
        nav: true,
        dots: true,
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

    $('.partner-carousel').owlCarousel({
        loop: true,
        margin: 27,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    })

    $(".stick-header").sticky({
        topSpacing: 0,
        zIndex: 1000
    });

    $('.btn-search').click(function(e) {
        e.preventDefault();
        $('.search-form').toggleClass('d-none');
    })

    $('#owl-detail').owlCarousel({
        loop: false,
        margin: 10,
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

    $('#owl-detail .owl-item').click(function(e){
        e.preventDefault();
        $('#owl-detail .owl-item').removeClass('selected');
        $(this).addClass('selected');
    })
});