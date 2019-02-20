$(function() {

	// $("header").removeClass("default");
	// $(window).scroll(function(){
	// 	if ($(this).scrollTop() > 20) {
	// 		$("header").addClass("default").fadeIn('fast');
	// 	} else {
	// 		$("header").removeClass("default").fadeIn('fast');
	// 	};
	// });

	if($('.banner_slider').length){
		$('.banner_slider').slick({
			lazyLoad: 'ondemand',
			autoplay: true,
			autoplaySpeed: 5000,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			cssEase: 'linear',
			speed: 500,
			dots: true
		});
	}

	if($('.reviews .slider').length){
		$('.reviews .slider').slick({
			ite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
		});
	}

	if($('.projects .popup').length){		
		$('.projects .popup').magnificPopup({
			type: 'image',
			gallery: { enabled: true }
		});
	}	
	if($('.reviews .popup').length){		
		$('.reviews .popup').magnificPopup({
			type: 'image',
			gallery: { enabled: true }
		});
	}

	$(".totop").click(function(){
		$("html, body").animate({scrollTop:0},"slow");
		return false;
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 1000) {
			$('.totop').show();
		}else{
			$('.totop').hide();
		}
	});

	$('.phone_link, input[name=phone]').mask('9 999 999-99-99');

});