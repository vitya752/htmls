$(document).ready(function() {

	// $(".main-footer .toggle-mnu").click(function() {
	// 	$("html, body").animate({ scrollTop: $(document).height() }, "slow");
	// 	return false;
	// });

	$(".button-up").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$(".button-down a").click(function() {
		$("html, body").animate({ scrollTop: $("header").height()+100 }, "slow");
		return false;
	});

	$(".section-2").waypoint(function() {
		$(".s2-item-wrap").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});

	var waypointsvg = new Waypoint({

		element: $(".section_5"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".section_5 .triangle-item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "tc-svg-" + index
						});
						ths.children(".triangle-content").addClass("triangle-content-on");
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '35%'
	});

	$(".s1-head h2, .s1-head p, .s2-head h2, .s2-head p").animated("fadeIn");
	$(".s3-head h2, s3-head p, s4-head h2, s4-head p").animated("fadeIn");
	$(".info-item-wrap").animated("zoomIn");
	// $(".slider .slide").animated("fadeIn");
	// $(".homesect.section_8 .forms").animated("fadeInRight");
	// $(".homesect.section_8 .p").animated("fadeIn");

	$('.carousel').slick({
		prevArrow: '<img src="img/prev.png" class = "prev">',
		nextArrow: '<img src="img/next.png" class = "next">'
	});

	$(".popup").magnificPopup({type:'image'});

	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.magnificPopup.close();
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});
