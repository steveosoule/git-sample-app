$timer = $('#timer');
var setTimer = function(){
	var d = new Date();
	$timer.text( d.toTimeString() );
};
setInterval(setTimer, 250);