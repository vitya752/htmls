$(document).ready(function() {

	$(".instagram .switch, .iPhone .switch, .Android .switch").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}else $(this).addClass("active");
	});

});