/************transition drink page ***************/ 

$('#tea').fadeTo(2000,1);
$(window).scroll(function() {
    if($(window).scrollTop() > (200+h/3)){
    	$('#tea').fadeTo(2000,1);
    }
    if($(window).scrollTop() > 200+3*(h/3)){
    	$('#milktea').fadeTo(2000,1);
    }
    if($(window).scrollTop() > 200+5*(h/3)){
    	$('#flowertea').fadeTo(2000,1);
    }
    /****bar****/ 
    if($(window).scrollTop()> topPicture){
        $("#bar").css("background-color","rgba(255,255,255,0.7)");
        $("header").addClass("fixed");
    }
    if($(window).scrollTop()<topPicture){
        $("#bar").css("background-color","rgb(93,93,93)");
        $("header").removeClass("fixed");
    }
});
// $(document).ready(function() {
	var h = $("#tea").height();
	var topPicture = $(".three").height();
	// var height = h*3;
	// console.log($("#firstImg").height());
	// console.log(height);
	// $("#container").height(height);
// });
$(window).resize(function() {
	var h = $("#tea").height();
	var topPicture = $(".three").height();
	// var height = h*3;
	// console.log($("#firstImg").height());
	// $("#container").height(height);
});