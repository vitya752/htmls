$(document).ready(function() {

	$("#grid").mixItUp();

	function heightDetect() {
		$("header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
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
	
});


$(window).load(function() { 
			$(".loader-inner").fadeOut(); 
			$(".loader").delay(400).fadeOut("slow"); 
});