$('#firstImg').fadeIn(1000);
$(window).scroll(function() {
    // if ($(window).scrollTop() > 1) {
    	// $('#firstImg').fadeIn(1000);
    // }
    if($(window).scrollTop() > (200+h/3)){
    	$('#flower').fadeIn(1000);
    }
    if($(window).scrollTop() > 200+3*(h/3)){
    	$('#breadcream').fadeIn(1000);
    }
    if($(window).scrollTop() > 200+5*(h/3)){
    	$('#chickenegg').fadeIn(1000);
    }
    if($(window).scrollTop() > 200+7*h/3){
    	$('#pigblood').fadeIn(1000);
	}
    // $('#chickenegg').fadeIn(1000);
    if($(window).scrollTop() > 500){
    }	
});
// $(document).ready(function() {
	var h = $("#firstImg").height();
	var height = h*5;
	console.log($("#firstImg").height());
	console.log(height);
	$("#container").height(height);
// });
$(window).resize(function() {
	var h = $("#firstImg").height();
	var height = h*5;
	console.log($("#firstImg").height());
	$("#container").height(height);
});
// console.log(h);




$("#store").click(function() {
    $("#food").hide();
    $("#store-map").show();
});
$("#info").click(function() {
    $("#food").show();
    $("#store-map").hide();
})
