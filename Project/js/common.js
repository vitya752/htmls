$(function() {

	if($('.popup').length){		
		$('.popup').magnificPopup({
			type: 'image',
			gallery: { enabled: true }
		});
	}

	if($('.popup_form').length){		
		$('.popup_form').magnificPopup();
	}

	$('.phone, input[name=phone').mask('+9 (999) 999-99-99');

	$('.button_down button').click(function(){
		$("html, body").animate(
		{
			scrollTop: $("footer").offset().top
		},"slow");
		return false;
	});

});

