/************transition food page ***************/ 

// $('#firstImg').fadeTo(2000,1)

var h = $("#firstImg").height();
var topPicture = $(".three").height();

$('#firstImg').animate({ left: "+5%", opacity: 1 }, 2000);

$(window).scroll(function() {
    if($(window).scrollTop() > (200+h/3)){
    	$('#flower').animate({ right: "+5%", opacity: 1 }, 2000);
    }
    if($(window).scrollTop() > 200+3*(h/3)){
    	$('#breadcream').animate({ left: '+5%', opacity: 1 }, 2000)
    }
    if($(window).scrollTop() > 200+5*(h/3)){
    	$('#chickenegg').animate({ right: "+5%", opacity: 1 }, 2000);
    }
    if($(window).scrollTop() > 200+7*h/3){
    	$('#pigblood').animate({ left: "+5%", opacity: 1 }, 2000)
	}
    if($(window).scrollTop() > 200+9*h/3){
    	$('#myyasu').animate({ right: "+5%", opacity: 1 }, 2000);
    }
    /*******************/
    /********bar********/
    /*******************/ 
    if($(window).scrollTop()> topPicture){
        $("#bar").css("background-color","rgba(255,255,255,0.7)");
        $("header").addClass("fixed");
    }
    if($(window).scrollTop()<topPicture){
        $("#bar").css("background-color","rgb(93,93,93)");
        $("header").removeClass("fixed");
    }
});

	// var height = h*6;
	// console.log($("#firstImg").height());
	// console.log(height);
	// $("#container").height(height);

$(window).resize(function() {
	h = $("#firstImg").height();
    topPicture = $(".three").height();
// 	var height = h*6;
// 	// console.log($("#firstImg").height());
// 	$("#container").height(height);
});



/***************************************************************************************/ 
 

$("#store").click(function() {
    $("#food").hide();
    $("#store-map").show();
});
$("#info").click(function() {
    $("#food").show();
    $("#store-map").hide();
})
