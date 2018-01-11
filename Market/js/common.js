$(function() {

	$('.slideshow').slick({
		speed: 1200,
		prevArrow: '<button type="button" class="prev"><img src="img/prev.png"></button>',
	nextArrow: '<button type="button" class="next"><img src="img/next.png"></button>'
	});

  	$(".special_products .filter_switch_div li").click(function() {
		$(".special_products .filter_switch_div li").removeClass("active");
		$(this).addClass("active");
	});

	$("#grid_spec_products").mixItUp();

});
