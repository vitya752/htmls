$(function() {

	$('.menu .toggle_menu').click(function(e){
		e.preventDefault();
		$(this).find('+ ul').slideToggle();
	});

	$('.product-toggle-desc').click(function(e){
		e.preventDefault();
		if( $(this).hasClass('active') ){

			$(this).removeClass('active').html('Показать описание товара').parent().find('.product-description').slideUp();

		}else{

			$(this).addClass('active').html('Скрыть описание товара').parent().find('.product-description').slideDown();

		}
	});

	$('.load_more').click(function(e){
		e.preventDefault();
		$(this).addClass('loading');
		setTimeout( function(){$('.load_more').removeClass('loading');} , 2000);
	});

});
