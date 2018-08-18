$(document).ready(function(){

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".tab").click(function(){

		var dis = $(".tab.disactive");
		var act = $(".tab.active");

		if( $(this).hasClass("disactive") ) {

			act.removeClass("active").addClass("disactive");
			act.removeClass("col-md-9").addClass("col-md-3");

			$(this).removeClass("disactive").addClass("active");
			$(this).removeClass("col-md-3").addClass("col-md-9");


			$(".tab.disactive .text_wrap").removeClass("col-10").addClass("col-4");
			$(".tab.disactive .img_wrap").removeClass("col-2").addClass("col-8");

			$(".tab.active .text_wrap").removeClass("col-4").addClass("col-10");
			$(".tab.active .img_wrap").removeClass("col-8").addClass("col-2");


			// $(".tab.active .text_wrap").removeClass("col-10").addClass("col-4").
			// $(".tab.active .img_wrap").removeClass("col-2").addClass("col-8");

			// $(".tab.disactive .text_wrap").removeClass("col-4").addClass("col-10");
			// $(".tab.disactive .img_wrap").removeClass("col-8").addClass("col-2");

		}

	});

});
