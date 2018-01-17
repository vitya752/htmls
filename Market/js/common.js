$(function() {

/**
* SLIDER
**/

	$('.slideshow').slick({
		speed: 1200,
		touchMove: false,
		swipeToSlide: false,
		lazyLoad: 'ondemand'
	});

	$('.products_slider').slick({
		speed: 1200,
		touchMove: false,
		swipeToSlide: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		{
		  breakpoint: 1024,
		  settings: {
		    slidesToShow: 3,
		    slidesToScroll: 3,
		    infinite: true,
		    dots: true
		  }
		},
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.img_block').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.img_items'
	});

	$('.img_items').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.img_block',
		dots: false,
		focusOnSelect: true,
		arrows: true,
		prevArrow: '<button type="button" class="product_sl_button prev"><img src="img/prev.png" alt="prev" /></button>',
		nextArrow: '<button type="button" class="product_sl_button next"><img src="img/next.png" alt="next" /></button>',
		responsive: [
		{
		  breakpoint: 480,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 2,
		    infinite: true,
		    dots: true
		  }
		}
		]
	});

/**
*Custom buttons for the change slide.
**/

	$('.prev').on('click', function() {
	  $('.slideshow').slick('slickPrev');
	});
	$('.next').on('click', function() {
	  $('.slideshow').slick('slickNext');
	});

	$('.new_products_section .prev').on('click', function() {
	  $('.new_products_section .products_slider').slick('slickPrev');
	});
	$('.new_products_section .next').on('click', function() {
	  $('.new_products_section .products_slider').slick('slickNext');
	});

	$('.recommendations .prev').on('click', function() {
	  $('.recommendations .products_slider').slick('slickPrev');
	});
	$('.recommendations .next').on('click', function() {
	  $('.recommendations .products_slider').slick('slickNext');
	});


/*******/
	$(".product_item_wrap h4.name_product").css("height", "").equalHeights();
	$("footer .category li").css("height", "").equalHeights();

/**
* ADAPRIVE ICON MENU
**/

	$('#button_gumb').click(function(){
		if($(".topline_menu .main_menu").is(":visible")) {
			$(".topline_menu .main_menu").fadeOut(600);
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
			$(".topline_menu .main_menu").fadeIn(600);
		}
	});


/**
*Sort the products
**/
  	$(".special_products .filter_switch_div li").click(function() {
		$(".special_products .filter_switch_div li").removeClass("active");
		$(this).addClass("active");
	});
	$("#grid_spec_products").mixItUp();
/*****/

/**
*Скрипт запрещает перетаскивать мышью ссылки и изображение
*The script forbids dragging links and images with the mouse
**/
	$("img, a").on("dragstart",function(event){
		event.preventDefault()
	});

/**
* TABS
**/ 

	$(".information .wrapper .tab").click(function(){
		$(".information .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".information .wrapper .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");


/**
* RANGE OF PRICES
**/
	$( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 7000,
      values: [ 50, 5000 ],
      slide: function( event, ui ) {
        $( "#min_price" ).text( ui.values[ 0 ] + "€" );
        $( "#max_price" ).text( ui.values[ 1 ] + "€" );
      }
    });
    $( "#min_price" ).text( $( "#slider-range" ).slider( "values", 0 ) + "€");
    $( "#max_price" ).text( $( "#slider-range" ).slider( "values", 1 ) + "€");

});
