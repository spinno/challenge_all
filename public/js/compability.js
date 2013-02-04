/*
This module defines functions that guarantee cross broswer compability.
*/
define(function(){
	if ( !Array.prototype.forEach ) {
	  Array.prototype.forEach = function(fn, scope) {
	    for(var i = 0, len = this.length; i < len; ++i) {
	      fn.call(scope, this[i], i, this);
	    }
	  }
	}

	return {};
});