$(function() {

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


});