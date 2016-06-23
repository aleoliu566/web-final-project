$("#botton2").click(function(){
	$("#text").css("display","none");
	$("#store").css("display","inline-block");
});
$("#botton1").click(function(){
	$("#text").css("display","inline-block");
	$("#store").css("display","none");
});

if (window_w < 450) {
	$("#logo img").attr('src', '../img/logo_nav_small.png');
}

