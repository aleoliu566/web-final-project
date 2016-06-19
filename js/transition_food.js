/************transition food page ***************/ 

$('#firstImg').fadeTo(2000,1);
$(window).scroll(function() {
    // if ($(window).scrollTop() > 1) {
    	// $('#firstImg').fadeIn(1000);
    // }
    if($(window).scrollTop() > (200+h/3)){
    	$('#flower').fadeTo(2000,1);

    	// $('#flower').fadeIn(2000);
    }
    if($(window).scrollTop() > 200+3*(h/3)){
    	$('#breadcream').fadeTo(2000,1);
    }
    if($(window).scrollTop() > 200+5*(h/3)){
    	$('#chickenegg').fadeTo(2000,1);
    }
    if($(window).scrollTop() > 200+7*h/3){
    	$('#pigblood').fadeTo(2000,1);
	}
    // $('#chickenegg').fadeIn(1000);
    if($(window).scrollTop() > 200+9*h/3){
    	$('#myyasu').fadeTo(2000,1);
    }	
});
	var h = $("#firstImg").height();
	// var height = h*6;
	// console.log($("#firstImg").height());
	// console.log(height);
	// $("#container").height(height);

$(window).resize(function() {
	h = $("#firstImg").height();
// 	var height = h*6;
// 	// console.log($("#firstImg").height());
// 	$("#container").height(height);
});


// console.log(h);
// 直線
// var a = $("<svg width="+"20" + "height="+"300><path d="+"M 100 75 L 100 180"+"stroke-width="+"3"+" stroke=black fill=black></svg>");
// a.appendTo("#container");



 

$("#store").click(function() {
    $("#food").hide();
    $("#store-map").show();
});
$("#info").click(function() {
    $("#food").show();
    $("#store-map").hide();
})
