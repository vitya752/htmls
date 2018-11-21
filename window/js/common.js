$(function() {

	$('input[name=phone]').mask('+9 (999) 999-99-99');

	if( $('.actions-slider' ).length){
		$('.actions-slider').slick({
			'dots' : true,
			'fade' : true,
			appendDots: '.dots',
			prevArrow : '<button class="slick-arrow prev"><img src="img/prev.png" alt="Back"/></button>',
			nextArrow : '<button class="slick-arrow next"><img src="img/next.png" alt="Next"/></button>',
		});
	}

	if( $('.gallery-slider' ).length){
		$('.gallery-slider').slick({
			'dots' : true,
			'fade' : true,
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
