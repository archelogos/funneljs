'use strict';

function Node(nName){

	if (typeof nName !== 'string'){
		throw Error('Invalid params to create a Node');
	}

	var name = nName;
	var id = null;

	var getRandom = function(){
		return Math.round(Math.random()*Math.pow(10,6));
	};

	var setId = function(){
		id = name+'-'+getRandom();
	};

	this.getId = function(){
		return id;
	};

	this.getName = function(){
		return name;
	};

	this.setName = function(n){
		if(n){
			name = n;
			setId();
		}
		else{
			throw Error('Undefined: '+n);
		}
	};

	// Init
	(function(){
		setId();
	})();

}
