$(".up").mouseover(function(){
	$(this).animate({top: "-=1%"}, 300, function(){
		$(this).animate({top: "+=1%"} ,300)
	})
})

$(".down").mouseover(function(){
	$(this).animate({top: "+=1%"}, 300,function(){
		$(this).animate({top: "-=1%"}, 300)
	})
})

