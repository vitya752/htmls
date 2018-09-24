$(function() {

	// $('input[name=phone], input[name=phone_quest]').mask('+9 (999) 999-99-99', {placeholder: "+_ (___) ___-___-__ "});	
	$('input[name=phone], input[name=phone_quest]').mask('+9 (999) 999 99 99');

	$(".tabs li").click(function(){
		$(".tabs li").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_content_wrap .tab_content").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	// $('.slider').slick({
	//   centerPadding: '60px',
	//   slidesToShow: 1,
	//   prevArrow: '<button type="button" class="slick-prev">prev</button>',
	//   nextArrow: '<button type="button" class="slick-next">next</button>',
	//   responsive: [
	//     {
	//       breakpoint: 768,
	//       settings: {
	//         arrows: false,
	//         centerPadding: '40px',
	//         slidesToShow: 1
	//       }
	//     },
	//     {
	//       breakpoint: 480,
	//       settings: {
	//         arrows: false,
	//         centerPadding: '40px',
	//         slidesToShow: 1
	//       }
	//     }
	//   ]
	// });
	$('.slider').slick({
	  slidesToShow: 3,
	  centerMode: true,
	  centerPadding: "60px",
	  speed: 500
	});

	$(".scrollUp").click(function(){
		$("html, body").animate(
			{
				scrollTop:$("header").height() - 100
			},"slow");
		return false;
	});

}); 