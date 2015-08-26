(function(){
	'use strict';

	Cast.prototype = {
		$on: $on,
		$broadcast: $broadcast
	};

	window.cast = new Cast();
	
	function Cast(){
		this.$$listeners = [];
	}

	function $on(){
		
	}

	function $broadcast(){
		
	}
})(window, document);