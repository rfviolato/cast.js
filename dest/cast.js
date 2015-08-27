/*
*
* Cast.js - Javascript simple events system inspired on angular.js' one.
* Created by Rafael Violato - http://rviolato.com
*
*/

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
		var self = this;
		var event = {
			name: name,
			trigger: triggerFn
		};
		var index = this.$$listeners.push(event);

		return _unregister;

		function _unregister(){
			self.$$listeners.splice(index-1, 1);
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