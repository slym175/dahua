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

    $(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        nextEffect  : 'none',
        prevEffect  : 'none',
        padding     : 0,
        margin      : [20, 60, 20, 60] // Increase left/right margin
    });

    $('.home-carousel').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        autoHeight: true,
        nav: true,
        dots: true,
        autoplay: true,
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
        margin: 20,
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
                items: 5
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
        onInitialized: function() {
            $('#owl-detail .owl-item:first-child').addClass('selected');
        },
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

    $('.news-carousel').owlCarousel({
        loop:true,
        nav:true,
        items: 1,
        dots: false,
    })

    $('.menu-carousel').owlCarousel({
        loop:false,
        nav:true,
        items: 6,
        dots: false,
        onChanged: menuOnchange,
        navText: ["<i class='fa fa-angle-double-left' aria-hidden='true'></i>","<i class='fa fa-angle-double-right' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 4
            },
            1200: {
                iitems: 6,
            }
        }
    })

    function menuOnchange(el) {
        $(el.target)
        .find('.owl-item').removeClass('last')
        .eq(el.item.index + el.page.size - 1).addClass('last');
    }

    $('select.juridical-form-control#orderby').niceSelect();

    $('select.juridical-form-control#catalog').niceSelect();

    $('select.juridical-form-control#category').niceSelect();

    $('select.juridical-form-control#price').niceSelect();
});