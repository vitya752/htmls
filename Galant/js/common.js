$(function() {

	// $("header").removeClass("default");
	// $(window).scroll(function(){
	// 	if ($(this).scrollTop() > 20) {
	// 		$("header").addClass("default").fadeIn('fast');
	// 	} else {
	// 		$("header").removeClass("default").fadeIn('fast');
	// 	};
	// });

	$("#menu").mmenu({
	   "extensions": [
	      "pagedim-black",
	      "position-right",
	      'theme-dark', 
	      'fx-menu-slide', 
	      'pagedim-black'
	   ]
	});

	var API = $("#menu").data( "mmenu" );

	$(".hamburger").click(function() {    //открываем меню по клику на гамбургер
		API.open();
	});
	API.bind( "close:finish", function( $panel ) {      //в момент завершения анимации закрытия меню
		$(".hamburger").removeClass('is-active');   //добавляем класс гамбургеру, чтобы он видоизменился
	});
	API.bind( "open:finish", function( $panel ) {    //в момент завершения анимации открытия меню
		$(".hamburger").addClass('is-active');   //добавляем класс гамбургеру, чтобы он видоизменился
	});

	$('.phone_link, input[name=phone]').mask('9 999 999-99-99');

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
			dots: true,
			arrows: false
		});
	}

	if($('.reviews .slider').length){
		$('.reviews .slider').slick({
			ite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
			{
			  breakpoint: 1200,
			  settings: {
			    slidesToShow: 2
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
			    slidesToShow: 1
			  }
			}
			]
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


});