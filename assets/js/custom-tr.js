/* slider video trang 7 */
$(".box-preview").on('click', '.box-img-preview', function(){
	var dataSilde = $(this).attr('data-slide');
	if(dataSilde == undefined){
		return false;
	}
	var elm = '.main-overlay-slick[data-name=' + dataSilde + ']';
	$(elm).addClass('active')
	$(".box-overlay").removeClass('hide');
	$(".box-overlay .icon-close-overlay").attr('data-slide', dataSilde);
	setTimeout(function(){
		setSlick(elm);
		$(".box-overlay").animate({
			'opacity' : '1'
		});
	},50)
})
$(".box-overlay .icon-close-overlay").click(function(){
	var dataSilde = $(this).attr('data-slide');
	if(dataSilde == undefined){
		return false;
	}
	var elm = '.main-overlay-slick[data-name=' + dataSilde + ']';
	$(elm).removeClass('active')
	unSlick(elm);
	$(".box-overlay").addClass('hide').css({'opacity' : ''});
})

function setSlick(elm){
	$(elm).slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
}
function unSlick(elm){
  //'.main-overlay-slick'
  $(elm).slick('unslick')
}
$('.box-preview').slick({
	dots: false,
	slidesToShow: 3,prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='assets/img/t7.png' alt=''></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='assets/img/t8.png' alt=''></button>",
	responsive: [
	{
		breakpoint: 768,
		settings: {
			arrows: false,
			centerMode: true,
			slidesToShow: 1
		}
	},
	]
});