(function(win, dom, $, undefined){
	console.info('hello world!');

	var counter = 0;

	$(dom).on('click', function(){
		counter++;
		console.log('why did you click me ' + counter + ' times?');
	});

	var something = function(foo, bar){
		return foo + bar;
	};

	var doSomething = function(foo, bar){
		return foo + bar;
	};

	

		console.log(something('foo', 'bar'));
})(window, document, window.jQuery);