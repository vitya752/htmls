$(document).ready(function() {

	$("#grid").mixItUp();

	function heightDetect() {
		$("header").css("height", $(window).height());
	};
	function clearAnim() {
		var windowWidth = document.documentElement.clientWidth;
		if (windowWidth <= 480) {
			$(".s_head, .about_me .anim1, .about_me .anim2, .about_me .anim3, .summary .ta_right .item, .summary .ta_left .item").removeClass("animated");
		}else{
			$(".s_head").animated("fadeInUp", 0);
			$(".about_me .anim1").animated("fadeInLeft", 0);
			$(".about_me .anim2").animated("fadeInUp", 0);
			$(".about_me .anim3").animated("fadeInRight", 0);
			$(".summary .ta_right .item").animated("fadeInLeft", 0);
			$(".summary .ta_left .item").animated("fadeInRight", 0);
		}
	}
	heightDetect();
	$(window).resize(function() {
		heightDetect();
		clearAnim();
	});
	clearAnim();

	$("portfolio filter_div li").click(function() {
		$("portfolio filter_div li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".btn-menu, .menu_item").click(function() {
		if ($(".top-mnu").is(":visible")) {
			$(".sandwich").removeClass("active");
			$(".top-text").css("opacity", "1");
			$(".top-mnu").fadeOut(600);
			$(".top-mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top-text").css("opacity", ".1");
			$(".sandwich").addClass("active");
			$(".top-mnu").fadeIn(600);
			$(".top-mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".portfolio_item").each(function(i){
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});
	
	$(".top-mnu a").mPageScroll2id();

});


$(window).load(function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown"); 
});