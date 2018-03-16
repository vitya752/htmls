$(document).ready(function(){

	$(".header_line .info_block").css("height", "").equalHeights();
	// $(".vantage .item h4").equalHeights();

	$('.slides_wrapper').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		speed: 1250
	});

});
