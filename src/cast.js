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

	function $on(name, triggerFn){
		var event = {
			name: name,
			trigger: triggerFn
		};

		this.$$listeners.push(event);

		return _unregister;

		function _unregister(){
			
		}
	}

	function $broadcast(name, data){
		this.$$listeners.forEach(_searchListener);

		function _searchListener(listener){
			if(listener.name === name){
				listener.trigger(data);
			}
		}
	}
})(window, document);