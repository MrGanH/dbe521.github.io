$(function(){
	$(".nav_buttom").click(function(e){
		e.preventDefault();
		if($(".nav_buttom span").prop("class")==""){
			$(".nav_buttom span").eq(0).addClass("first");
			$(".nav_buttom span").eq(1).addClass("tow");
			$(".nav_buttom span").eq(2).addClass("three");
			$(".intters_nav").addClass("nav_show");
		}else{
			$(".nav_buttom span").removeClass()
			$(".intters_nav").removeClass("nav_show");
		}
	});
})