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

	$('#percent').priceFormat({
		prefix: '',
		suffix: ' %',
		thousandsSeparator: '',
		centsSeparator: '',
		clearOnEmpty: true
	});

	$('.calculator .result .money').priceFormat({
		prefix: '',
		suffix: '',
		thousandsSeparator: ' ',
		centsSeparator: ',',
		clearOnEmpty: true
	});

	$('.money .money_format').priceFormat({
		prefix: '',
		suffix: '',
		thousandsSeparator: ',',
		clearOnEmpty: true,
	    // limit: 2,
	    centsLimit: 0
	});

	$('td .money').priceFormat({
		prefix: '',
		suffix: '',
		thousandsSeparator: ' ',
		clearOnEmpty: true,
	    // limit: 2,
	    centsLimit: 0
	});

	// $("#attachment,#replenishment").click(function() {
	// 	alert($('#element').unmask());
	// });

	$('.radio_label + .row label input, .radio_label + .row + .button_wrap > button').prop('disabled',true);
	$('.radio_label + .row label .jq-number').addClass('disabled');

	$('.radio_label input[type="radio"]').change(function(){
		if ($(this).prop('checked')==true) {
			$('.radio_label + .row label input, .radio_label + .row + .button_wrap > button').prop('disabled',true);
			$('.radio_label + .row label .jq-number').addClass('disabled');
			$(this).parent().parent().find('+ .row label input, + .row + .button_wrap > button').prop('disabled',false);
			$(this).parent().parent().find('+ .row label .jq-number').removeClass('disabled');
		}
	});

//.money_format


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

	new ClipboardJS('.link_copy');

});

function cislo(){
    if (event.keyCode < 48 || event.keyCode > 57)
    event.returnValue= false;
}