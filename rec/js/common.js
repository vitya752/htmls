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

//.money_format

	$('.calculator .result .money').priceFormat({
		prefix: '',
		suffix: '',
		thousandsSeparator: ' ',
		centsSeparator: ',',
		clearOnEmpty: true
	});

	var myCircle = Circles.create({
	  id:                  'circles-1',
	  radius:              124,
	  value:               123751,
	  maxValue:            200000,
	  width :                6 ,
	  text:                function(value){return '<span class="valuta">&#36;</span>' + '<span class="money_circle">' + value + '</span>';},
	  colors:              ['#f5edf4', '#e40060'],
	  duration:            1000,
	  wrpClass:            'circles-wrp',
	  textClass:           'circles-text',
	  valueStrokeClass:    'circles-valueStroke',
	  maxValueStrokeClass: 'circles-maxValueStroke',
	  styleWrapper:        true,
	  styleText:           true
	});

});

function cislo(){
    if (event.keyCode < 48 || event.keyCode > 57)
    event.returnValue= false;
}