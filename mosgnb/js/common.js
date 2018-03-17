$(document).ready(function(){

	$(".header_line .info_wrapper .info_block").css("height", "").equalHeights();
	// $(".vantage .item h4").equalHeights();

	$('.slides_wrapper').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		speed: 1250
	});

	$('.head_buttons .open_menu').click(function() {
		$('.mobile_menu').slideToggle();
	});
	$('.close').click(function() {
		$('.mobile_menu').slideToggle();
	});

	$('.head_buttons .open_info').click(function() {
		$('.mobile_info').slideToggle();
	});

});
