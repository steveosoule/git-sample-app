$timer = $('#timer');
var setTimer = function(){
	var d = new Date();
	$timer.text( d.toLocaleTimeString() );
};
setInterval(setTimer, 250);