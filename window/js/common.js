$(function() {

	$("#mmenu").mmenu({
	   "extensions": [
	      "pagedim-black",
	      "position-right"
	   ]
	});

	$("header").removeClass("default");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 20) {
			$("header").addClass("default").fadeIn('fast');
		} else {
			$("header").removeClass("default").fadeIn('fast');
		};
	});

	$(document).on("scroll", onScroll);
	$(".menu ul a[href], ul.mm-listview a[href]").click(function(e){
		e.preventDefault();
		$(document).off("scroll");
		// $(menu_selector + " a.active").removeClass("active");
		// $(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$("html, body").animate({
		    scrollTop: target.offset().top
		}, 1500, function(){
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});
	});

	$('input[name=phone]').mask('+9 (999) 999-99-99');

	if( $('.actions-slider' ).length){
		$('.actions-slider').slick({
			'dots' : true,
			'fade' : true,
			'autoplay' : true,
			'autoplaySpeed' : 3000,
			appendDots: '.dots',
			prevArrow : '<button class="slick-arrow prev"><img src="img/prev.png" alt="Back"/></button>',
			nextArrow : '<button class="slick-arrow next"><img src="img/next.png" alt="Next"/></button>',
		});
	}

	if( $('.gallery-slider' ).length){
		$('.gallery-slider').slick({
			'dots' : true,
			'fade' : true,
			'autoplay' : true,
			'autoplaySpeed' : 3000,
			appendDots: '.gallery_navigation',
			appendArrows: '.gallery_navigation',
			prevArrow : '<button class="slick-arrow prev"><img src="img/prev_blue.png" alt="Back"/></button>',
			nextArrow : '<button class="slick-arrow next"><img src="img/next_blue.png" alt="Next"/></button>',
		});
	}

	$('.popup').magnificPopup({
		type : 'image',
	    gallery: {
	      enabled: true
	    }
	});

});

var menu_selector = ".menu ul"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
function onScroll(){
	var scroll_top = $(document).scrollTop();
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}