$(document).ready(function(){

	// Фиксированная шапка при скролле
	$("header").removeClass("default");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 20) {
			$("header").addClass("default").fadeIn('fast');
			$("header nav").addClass("header_menu-unafter");
			$(".header_line .info_wrapper .info_block").css("height", "").equalHeights();
		} else {
			$("header").removeClass("default").fadeIn('fast');
			$("header nav").removeClass("header_menu-unafter");
			$(".header_line .info_wrapper .info_block").css("height", "").equalHeights();
		};
	});

	$(".header_line .info_wrapper .info_block").css("height", "").equalHeights();
	$('.vantage .item').css("height", "").equalHeights();
	$('.benefit .item ul').css("height", "").equalHeights();
	$('.main_specialists .item').css("height", "").equalHeights();
	$('.documents .item').css("height", "").equalHeights();
	// $(".vantage .item h4").css("height", "").equalHeights();

	$('.slides_wrapper').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		speed: 1250
	});

	$('.slider .slick-dots').wrap('<div class="container" style="position = relative;"></div>');

	$('.head_buttons .open_menu').click(function() {

		$('.mobile_menu').slideToggle();

		if( ($('.mobile_menu').is(':visible')) ){

			$(this).addClass('active');
			$('.mobile_menu').addClass('active');

		}

	});
	$('.close').click(function() {
		$('.mobile_menu').slideToggle();
		$('.head_buttons .open_menu').removeClass('active');
		$('.mobile_menu').removeClass('active');
	});

	$('.head_buttons .open_info').click(function() {

		$('.mobile_info').slideToggle();

		if( !$('.mobile_info').hasClass('active') ){

			$('.head_buttons .open_info').addClass('active');
			$('.mobile_info').addClass('active');

		}else{

			$('.head_buttons .open_info').removeClass('active');
			$('.mobile_info').removeClass('active');

		}

	});

	$('footer h3').click(function() {

		var col = $(this).parent();
		var ul = $(this).parent().find('ul');
		var hr = $(this).parent().find('.hr');

		if( col.hasClass('active') ){

			col.removeClass('active');


		}else{

			col.addClass('active');

		}
		ul.slideToggle();
		hr.slideToggle();

	});

	// $(window).resize(function () {

	// 	if(window.matchMedia('(max-width: 480px)').matches){
	// 		$('.benefits_wrap').slick();
	// 		$('.buttons_benefit').css('display', 'block');
	// 	}else{
	// 		$('.buttons_benefit').css('display', 'none');
	// 	}

	// }


	var media768 = function(mediaQuery) {
		if (mediaQuery.matches) {

			$("ul.breadcrumbs li").last().text(function(i, text) {

				if (text.length >= 20) {
					text = text.substr(0, 20);
				    var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
				    text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
				}
				$(this).text(text);
			});

		} else {

		}
	},
	mql = window.matchMedia('all and (max-width: 768px)');
	media768(mql);
	mql.addListener(media768); 

	var media480 = function(mediaQuery) {
		if (mediaQuery.matches) {
			$('.landing-page .benefits_wrap').slick();
			$('.landing-page .buttons_benefit').css('display', 'block');

			$('.landing-page .projects_wrapper').slick();
			$('.landing-page .buttons_projects').css('display', 'block');

			$('.landing-page .reviews_wrap').slick();
			// $('.reviews .post_content').css('border-bottom', '0');
			// $('.reviews h4').css('margin', '15px 0 0 0');
			$('.landing-page .buttons_projects').css('display', 'block');

		} else {
			// $('.landing-page .benefits_wrap').slick('unslick');
			$('.landing-page .buttons_benefit').css('display', 'none');

			// $('.landing-page .projects_wrapper').slick('unslick');
			$('.landing-page .buttons_projects').css('display', 'none');

			// $('.landing-page .reviews_wrap').slick('unslick');
			$('.landing-page .buttons_projects').css('display', 'none');

		}
	},
	mql = window.matchMedia('all and (max-width: 480px)');
	media480(mql);
	mql.addListener(media480); 

	$('.landing-page .buttons_benefit .prev').on('click', function() {
		$('.landing-page .benefits_wrap').slick('slickPrev');
	});
	$('.landing-page .buttons_benefit .next').on('click', function() {
		$('.landing-page .benefits_wrap').slick('slickNext');
	});

	$('.landing-page .buttons_projects .prev').on('click', function() {
		$('.landing-page .projects_wrapper').slick('slickPrev');
	});
	$('.landing-page .buttons_projects .next').on('click', function() {
		$('.landing-page .projects_wrapper').slick('slickNext');
	});

	$('.question_answer ul.question li').click(function() {
		$(this).find('.answer').slideToggle();

		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}

	});

	$('.list_services li').click(function() {

		$('.list_services li').removeClass('active').eq($(this).index()).addClass("active");
		$(".service_tabs .tab_item").removeClass('active').eq($(this).index()).addClass('active');

	});

	$('.documents .item .popup, .gallery .item .popup').magnificPopup({
		type: 'image',
		gallery: { enabled: true }
	});

	$('.popup_window').magnificPopup();


});
