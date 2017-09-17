$(document).ready(function() {

	$(".popup").magnificPopup({type:'image'});
	$(".popup_c").magnificPopup();


    $('.carousel').slick({
		prevArrow: '<img src="img/Shape.png" class= "prev">',
		nextArrow: '<img src="img/Shape180.png" class = "next">'
    });

	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});

	function wResize(){
		$("header").css("height",$(window).height());
	};
	wResize();
	$(window).resize(function(){
		wResize();
	})

	$("header .top_line .tab").click(function(){
		$("header .top_line .tab").removeClass("active").eq($(this).index()).addClass("active");
		$("header .top_line .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$("header .content .tab").click(function(){
		$("header .content .tab").removeClass("active").eq($(this).index()).addClass("active");
		$("header .content .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".top_contacts .tab").click(function(){
		$(".top_contacts .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$("footer .tab").click(function(){
		$("footer .tab").removeClass("active").eq($(this).index()).addClass("active");
		$("footer .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var forma = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
				forma.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});

$(window).load(function() {

	$("header h1").animated("fadeInDown", "fadeOut");
	$("header h2").animated("fadeInUp", "fadeOut");
	$("header .tabs_header").animated("flipInY", "fadeOut");
	$(".more_pros li").animated("fadeInRight", "fadeOut");
	$(".more_pros .callback_form").animated("zoomInRight", "fadeOut");
	$(".prefooter_text").animated("fadeInUp", "fadeOut");
	$("footer").animated("fadeInUp", "fadeOut");

});