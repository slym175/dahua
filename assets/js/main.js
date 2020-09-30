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

    $('select.juridical-form-control#orderby').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Sắp xếp theo",
        data: [
            {
                id: 0,
                text: 'Giá tăng dần'
            },
            {
                id: 1,
                text: 'Giá giảm dần'
            },
            {
                id: 2,
                text: 'Ngày phát hành'
            },
            {
                id: 3,
                text: 'Bán chạy'
            },
        ]
    });

    $('select.juridical-form-control#catalog').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Danh mục sản phẩm",
        data: [
            {
                id: 0,
                text: 'Danh mục A'
            },
            {
                id: 1,
                text: 'Danh mục B'
            },
            {
                id: 2,
                text: 'Danh mục C'
            },
            {
                id: 3,
                text: 'Danh mục D'
            },
            {
                id: 4,
                text: 'Danh mục E'
            }
        ]
    });

    $('select.juridical-form-control#category').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Dòng sản phẩm",
        data: [
            {
                id: 0,
                text: 'Dòng A'
            },
            {
                id: 1,
                text: 'Dòng A1'
            },
            {
                id: 2,
                text: 'Dòng A2'
            },
        ]
    });

    $('select.juridical-form-control#price').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Khoảng giá",
        data: [
            {
                id: 0,
                text: 'Dưới 1$'
            },
            {
                id: 1,
                text: 'Từ 1$ đến 5$'
            },
            {
                id: 2,
                text: 'Từ 5$ đến 10$'
            },
            {
                id: 3,
                text: 'Từ 10$ đến 50$'
            },
            {
                id: 4,
                text: 'Trên 50$'
            }
        ]
    });
});