$(document).ready(function() {

	$("#grid").mixItUp();

	function heightDetect() {
		$("header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".s_head h2").animated("fadeInDown", "fadeOutUp");
	$(".s_head p").animated("fadeInUp", "fadeOutDown");
	$(".about_me .anim1").animated("fadeInLeft", "fadeOutLeft");
	$(".about_me .anim2").animated("fadeInUp", "fadeOutDown");
	$(".about_me .anim3").animated("fadeInRight", "fadeOutRight");
	$(".summary .ta_right .item").animated("fadeInLeft", "fadeOutRight");
	$(".summary .ta_left .item").animated("fadeInRight", "fadeOutRight");

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
	
});


$(window).load(function() { 
			$(".loader-inner").fadeOut(); 
			$(".loader").delay(400).fadeOut("slow"); 
});