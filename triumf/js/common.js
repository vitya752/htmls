$(function() {

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

	$('.phone span, .contacts-phones a').mask('9 (999) 999-99-99');
	$('input[name=phone]').mask('+9 (999) 999-99-99');

	if($('.slider').length){
		$('.slider').slick({
			dots: true,
			arrows: false,
			slidesToShow: 10,
			slidesToScroll: 10,
			responsive: [
			{
			  breakpoint: 1200,
			  settings: {
			    slidesToShow: 8,
				slidesToScroll: 8
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
			    slidesToShow: 6,
				slidesToScroll: 6
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
			    slidesToShow: 4,
				slidesToScroll: 4
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
			    slidesToShow: 3,
				slidesToScroll: 3
			  }
			}
			]
		});
	}


	if( $('.systems').length ){
		let vantages = $(".systems").offset().top;
		$(window).bind('scroll', function(){
			var windowTop = $(this).scrollTop();
			if( windowTop > vantages ){
				if($('.popup').length){		
					$('.popup').magnificPopup({
						type: 'image'
					});
				}
				$(window).unbind('scroll');
			}
		});
	}

	if($('.product-gallery').length){
	    $('.product-gallery').magnificPopup({
	        delegate: 'a', // the selector for gallery item
	        type: 'image',
	        gallery: {
	          enabled:true
	        }
	    });
	}

	$('.catalog-tabs li').on('click',function(){
		if( $(this).hasClass('active') ) return false;
		var name = $(this).data('name');
		$('.catalog-tabs li').removeClass('active').eq($(this).index()).addClass('active');
		$('.catalog-content-tab').hide().eq($(this).index()).show();
	});

	if($('input[type=number]').length){
		$('input[type=number]').niceNumber();	
	}

});