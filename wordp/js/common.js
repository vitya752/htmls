$(document).ready(function() {

	$("#grid").mixItUp();

	function heightDetect() {
		$("header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".s_head h2").animated("fadeInDown", 0);
	$(".s_head p").animated("fadeInUp", 0);
	$(".about_me .anim1").animated("fadeInLeft", 0);
	$(".about_me .anim2").animated("fadeInUp", 0);
	$(".about_me .anim3").animated("fadeInRight", 0);
	$(".summary .ta_right .item").animated("fadeInLeft", 0);
	$(".summary .ta_left .item").animated("fadeInRight", 0);

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
	
});


$(window).load(function() { 
			$(".loader-inner").fadeOut(); 
			$(".loader").delay(400).fadeOut("slow"); 
});