/************transition drink page ***************/ 

$('#tea').fadeIn(1000);
$(window).scroll(function() {
    // if ($(window).scrollTop() > 1) {
    	// $('#firstImg').fadeIn(1000);
    // }
    if($(window).scrollTop() > (200+h/3)){
    	$('#tea').fadeIn(2000);
    }
    if($(window).scrollTop() > 200+3*(h/3)){
    	$('#milktea').fadeIn(2000);
    }
    if($(window).scrollTop() > 200+5*(h/3)){
    	$('#flowertea').fadeIn(2000);
    }
});
// $(document).ready(function() {
	var h = $("#tea").height();
	var height = h*3;
	console.log($("#firstImg").height());
	console.log(height);
	$("#container").height(height);
// });
$(window).resize(function() {
	var h = $("#tea").height();
	var height = h*3;
	console.log($("#firstImg").height());
	$("#container").height(height);
});