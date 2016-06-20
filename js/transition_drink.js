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
});
// $(document).ready(function() {
	var h = $("#tea").height();
	// var height = h*3;
	// console.log($("#firstImg").height());
	// console.log(height);
	// $("#container").height(height);
// });
$(window).resize(function() {
	var h = $("#tea").height();
	// var height = h*3;
	// console.log($("#firstImg").height());
	// $("#container").height(height);
});