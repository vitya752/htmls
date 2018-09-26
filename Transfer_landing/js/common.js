$(function() {

	// $('input[name=phone], input[name=phone_quest]').mask('+9 (999) 999-99-99', {placeholder: "+_ (___) ___-___-__ "});	
	$('input[name=phone], input[name=phone_quest], .phone_number').mask('+9 (999) 999 99 99');

	$(".tabs li").click(function(){
		$(".tabs li").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_content_wrap .tab_content").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");


	$("#mmenu").mmenu({
	   "extensions": [
	      "pagedim-black",
	      "position-right"
	   ]
	});

	$('.slider').slick({
	  slidesToShow: 3,
	  centerMode: true,
	  centerPadding: "60px",
	  speed: 500,
	  arrows: false
	});

	$('.reviews .arrows_wrap .prev').on('click', function() {
		$('.slider').slick('slickPrev');
	});
	$('.reviews .arrows_wrap .next').on('click', function() {
		$('.slider').slick('slickNext');
	});

	$(".scrollUp").click(function(){
		$("html, body").animate(
			{
				scrollTop:$("header").height() - 100
			},"slow");
		return false;
	});

	// Фиксированная шапка при скролле
	$("header").removeClass("default");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 20) {
			$("header").addClass("default").fadeIn('fast');
		} else {
			$("header").removeClass("default").fadeIn('fast');
		};
	});

	$(document).on("scroll", onScroll);
	$(".menu ul a[href]").click(function(e){
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$("html, body").animate({
		    scrollTop: target.offset().top
		}, 1500, function(){
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});
	});

	// var phone = $('.tabs_wrap .phone_form .phone_number');
	// formatPhone(phone);

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