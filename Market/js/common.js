$(function() {

	$('.slideshow').slick({
		speed: 1200,
		touchMove: false,
		swipeToSlide: false
	});

	$('.new_products_section .products_wrap').slick({
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
	  $('.new_products_section .products_wrap').slick('slickPrev');
	});
	$('.new_products_section .next').on('click', function() {
	  $('.new_products_section .products_wrap').slick('slickNext');
	});

/*******/
	$(".product_item_wrap h4.name_product").css("height", "").equalHeights();
	$("footer .category li").css("height", "").equalHeights();


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

	// function heightDetect() {
	// 	$(".slideshow_section").css("height", $(window).height());
	// };
	// heightDetect();
	// $(window).resize(function() {
	// 	heightDetect();
	// });

});
