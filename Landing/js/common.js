$(document).ready(function(){

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	var media = function(mediaQuery) {
		if (mediaQuery.matches) {

			$(".tab.disactive .text_wrap").removeClass("col-4").addClass("col-10");
			$(".tab.disactive .img_wrap").removeClass("col-8").addClass("col-2");
			$(".tab.disactive").removeClass("disactive").addClass("active");

		} else {
			$(".tab").click(function(){

				var dis = $(".tab.disactive");
				var act = $(".tab.active");

				if( $(this).hasClass("disactive") ) {

					act.removeClass("active").addClass("disactive");
					act.removeClass("col-lg-9").addClass("col-lg-3");

					$(this).removeClass("disactive").addClass("active");
					$(this).removeClass("col-lg-3").addClass("col-lg-9");


					$(".tab.disactive .text_wrap").removeClass("col-10").addClass("col-4");
					$(".tab.disactive .img_wrap").removeClass("col-2").addClass("col-8");

					$(".tab.active .text_wrap").removeClass("col-4").addClass("col-10");
					$(".tab.active .img_wrap").removeClass("col-8").addClass("col-2");

				}

			});	
		}
	},
	mql = window.matchMedia('all and (max-width: 991.98px)');
	media(mql);
	mql.addListener(media); 

/*________________________________________________________________________*/

	var media768 = function(mediaQuery) {
		if (mediaQuery.matches) {
			$(".tab .img_wrap").removeClass("col-2").css("display","none");
			$(".tab .text_wrap").removeClass("col-10").addClass("col-12");
		} else {

		}
	},
	mql768 = window.matchMedia('all and (max-width: 767.98px)');
	media(mql768);
	mql768.addListener(media768); 



	$(".slider").slick({
		prevArrow: '<img src="img/instruments/prev.png" class= "prev">',
		nextArrow: '<img src="img/instruments/next.png" class = "next">'
	});

	$('.contacts').magnificPopup();

});
