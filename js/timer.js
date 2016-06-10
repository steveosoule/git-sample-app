$timer = $('#timer');
var setTimer = function(){
	var time = +new Date();
	$timer.text( time );
};
setInterval(setTimer, 250);