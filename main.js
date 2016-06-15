// $("#logo").click(function(){
	// $("#menu").hide();
	// $("#bg-picture").slideToggle("slow");
// });

var window_w = $(window).width();  
var window_h = $(window).height();
var x = 0

$("#index").mouseover(function(){
	$('#index').css('background-color','rgb(213,73,29)');
});
$("#index").mouseout(function(){
	$('#index').css("background-color","");
});


function countSecond()
{　x = x+1
// 　 document.fm.displayBox.value=x;
　 setTimeout("countSecond()", 1000);
	// console.log(x);
	if(x%30==29){
		$('#bg-pic-right').fadeOut(1000);
	}
	if(x%30==0){
		$('#bg-pic-right').attr('src','img/view4.jpg');
		$('#bg-pic-right').fadeIn(1000);
	}

	if(x%30==4){
		$('#bg-pic-left').fadeOut(1000);
	}
	if(x%30==5){
		$('#bg-pic-left').attr('src','img/view2.jpg');
		$('#bg-pic-left').fadeIn(1000);
	}
	if(x%30==9){
		$('#bg-pic-right').fadeOut(1000);
	}
	if(x%30==10){
		$('#bg-pic-right').attr('src','img/view5.jpg');
		$('#bg-pic-right').fadeIn(1000);
	}

	if(x%30==14){
		$('#bg-pic-left').fadeOut(1000);
	}
	if(x%30==15){
		$('#bg-pic-left').attr('src','img/view3.jpg');
		$('#bg-pic-left').fadeIn(1000);
	}

	if(x%30==19){
		$('#bg-pic-right').fadeOut(1000);
	}
	if(x%30==20){
		$('#bg-pic-right').attr('src','img/view7.jpg');
		$('#bg-pic-right').fadeIn(1000);
	}

	if(x%30==24){
		$('#bg-pic-left').fadeOut(1000);
	}
	if(x%30==25){
		$('#bg-pic-left').attr('src','img/view1.jpg');
		$('#bg-pic-left').fadeIn(1000);
	}
}
countSecond();

