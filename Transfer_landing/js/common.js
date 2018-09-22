$(function() {

	// $('input[name=phone], input[name=phone_quest]').mask('+9 (999) 999-99-99', {placeholder: "+_ (___) ___-___-__ "});	
	$('input[name=phone], input[name=phone_quest]').mask('+9 (999) 999 99 99');

	$(".tabs li").click(function(){
		$(".tabs li").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_content_wrap .tab_content").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

}); 