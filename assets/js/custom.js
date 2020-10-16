$(function () {
    $('.angle-lv1').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parents('.nav-item').toggleClass('active');
    })
});

$(function () {
    $('.angle-lv2').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parents('.submenu.mega-submenu li').toggleClass('active');
    })
});