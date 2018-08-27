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

	$('.faq_section ul.question li').click(function() {
		$(this).find('.answer').slideToggle();

		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}

	});


	// $('input[name=phone]').mask('+7 (999) 999-99-99');

});

function number_format(){
	// var input = $("input[type='text']");
	// var str = input.val();
	// var replaceNumber = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	// return input.val(replaceNumber);

}

function cislo(){
    if (event.keyCode < 48 || event.keyCode > 57)
    event.returnValue= false;
}