$(function() {

	$("#mmmenu").mmenu({
	   "extensions": [
	      "pagedim-black",
	      "position-right"
	   ]
	});

    $(".down").click(function () {
        var elementClick = $(".main").next();
        var destination = $(elementClick).offset().top;
        $('html, body').animate({ scrollTop: destination }, 1100);
    });

	$("input, select").styler({
		selectSearch: true,
		selectVisibleOptions: 3
	});

	$(".popup").magnificPopup();
	$(".play").magnificPopup({
		type: "iframe"
	});

	$('.faq_section ul.question li').click(function() {
		$(this).find('.answer').slideToggle();

		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}

	});

	// $('input[name=phone], input[name=phone_quest]').mask('+9 (999) 999-99-99', {placeholder: "+_ (___) ___-___-__ "});	
	$('input[name=phone], input[name=phone_quest]').mask('+9 (999) 999-99-99');

	$('#attachment,#replenishment').priceFormat({
		prefix: '',
		suffix: ' USD',
		thousandsSeparator: ' ',
		centsSeparator: ',',
		clearOnEmpty: true
	});

	$('.calculator .result .money').priceFormat({
		prefix: '',
		suffix: '',
		thousandsSeparator: ' ',
		centsSeparator: ',',
		clearOnEmpty: true
	});

});

function cislo(){
    if (event.keyCode < 48 || event.keyCode > 57)
    event.returnValue= false;
}