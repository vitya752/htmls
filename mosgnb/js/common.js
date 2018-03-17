$(document).ready(function(){

	$(".header_line .info_wrapper .info_block").css("height", "").equalHeights();
	$('.vantage .item').css("height", "").equalHeights();
	// $(".vantage .item h4").css("height", "").equalHeights();

	$('.slides_wrapper').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		speed: 1250
	});

	$('.head_buttons .open_menu').click(function() {

		$('.mobile_menu').slideToggle();

		if( ($('.mobile_menu').is(':visible')) ){

			$(this).addClass('active');
			$('.mobile_menu').addClass('active');

		}

	});
	$('.close').click(function() {
		$('.mobile_menu').slideToggle();
		$('.head_buttons .open_menu').removeClass('active');
		$('.mobile_menu').removeClass('active');
	});

	$('.head_buttons .open_info').click(function() {

		$('.mobile_info').slideToggle();

		if( !$('.mobile_info').hasClass('active') ){

			$('.head_buttons .open_info').addClass('active');
			$('.mobile_info').addClass('active');

		}else{

			$('.head_buttons .open_info').removeClass('active');
			$('.mobile_info').removeClass('active');

		}

	});

	$('footer h3').click(function() {

		var col = $(this).parent();
		var ul = $(this).parent().find('ul');
		var hr = $(this).parent().find('.hr');

		if( col.hasClass('active') ){

			col.removeClass('active');


		}else{

			col.addClass('active');

		}
		ul.slideToggle();
		hr.slideToggle();

	});

});
