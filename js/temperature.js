var skycons = new Skycons();

// skycons.add("todayicon",Skycons.RAIN);
// skycons.set(dayicon[1], Skycons.RAIN);
skycons.play();

var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22%E5%8F%B0%E5%8C%97%E5%B8%82%22)%20and%20u=%27c%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
$.getJSON(url,function(data){
	var front = data.query.results.channel.item;
	var todaytemp = front.condition.temp;
	var todaydate = front.forecast[0].date;
	var todayhigh = front.forecast[0].high;
	var todaylow  = front.forecast[0].low;
	var humid     = data.query.results.channel.atmosphere.humidity
	var date      = $("<p>"+todaydate+"</p>");
	var temp      = $("<p>今日溫度："+todaytemp+"℃</p>");
	// var today     = $("<h3>"+todaytemp+"℃</h3>");
	var todayhumid =$("<p>濕度："+humid+"%</p>");
	var todayhighlowTemp = $("<p>本日最高溫"+todayhigh+"℃ 本日最低溫"+todaylow+"℃</p>");
	

	date.appendTo("#weather");
	temp.appendTo("#weather");
	todayhumid.appendTo("#todayweather");
	todayhighlowTemp.appendTo("#todayweather");
	// todaylowTemp.appendTo("#todayweather");
	for(var i=1 ; i<=5 ; i++){
		var date = front.forecast[i].date;
		var day  = front.forecast[i].day;
		var high = front.forecast[i].high;
		var low  = front.forecast[i].low;
		var text = front.forecast[i].text;

		var days=$("<td>"+day+"</td>");
		var lowToHigh=$("<td>"+low+"℃-"+high+"℃</td>");
		days.appendTo("#week");
		lowToHigh.appendTo("#temp");
		icon(front);
	}
})


function icon (front){
      var dayicon = ["todayicon","firsticon","secondicon","thirdicon","forthicon","fifthicon"];
      for(var i = 0; i<dayicon.length ;i++){
        var daycode = parseInt(front.forecast[i].code);
        if(daycode === 1 || daycode === 3 || daycode === 4 || daycode === 9 || daycode === 10 || daycode === 11 || daycode === 12 || daycode === 35 || daycode === 37 ||daycode === 38 ||daycode === 39 || daycode === 40 || daycode === 45 ||daycode === 47 || daycode === 48 ){
           skycons.set(dayicon[i], Skycons.RAIN);                 //下雨
        }else if ( daycode === 26 || daycode === 26 || daycode === 28){
           skycons.set(dayicon[i], Skycons.CLOUDY);               //多雲
        }else if ( daycode === 32 ||daycode === 34 || daycode === 36){
           skycons.set(dayicon[i], Skycons.CLEAR_DAY);            //晴朗無雲的太陽
        }else if ( daycode === 31 ||daycode === 33){
           skycons.set(dayicon[i], Skycons.CLEAR_NIGHT);          //晴朗無雲的月亮
        }else if ( daycode === 30 || daycode === 44 ){
           skycons.set(dayicon[i], Skycons.PARTLY_CLOUDY_DAY);    //多雲但看得到太陽
        }else if ( daycode === 29){
           skycons.set(dayicon[i], Skycons.PARTLY_CLOUDY_NIGHT);  //多雲但看得到月亮
        }else if ( daycode === 5 || daycode === 6 || daycode === 7 || daycode === 8 || daycode === 17 || daycode === 18){
           skycons.set(dayicon[i], Skycons.SLEET);                //下雨雪
        }else if ( daycode === 13 || daycode === 14 || daycode === 15 || daycode === 16 || daycode === 41 || daycode === 42 || daycode === 43 ||daycode === 46){
           skycons.set(dayicon[i], Skycons.SNOW);                 //下雪
        }else if ( daycode === 0 ||daycode === 2 || daycode === 23 || daycode === 24 ||daycode === 25 ){
           skycons.set(dayicon[i], Skycons.WIND);                 //強風
        }else if ( daycode === 19|| daycode === 20 || daycode === 21 || daycode === 22){
           skycons.set(dayicon[i], Skycons.FOG);                  //濃霧
        }else{
          console.log("no");
        }
      }
}