(function(){
	'use strict';

	function State(sName, sBehavior){

		if (typeof sName !== 'string' || typeof sBehavior !== 'function'){
			throw Error('Wrong params to create a node');
		}
		this.name = sName;
		var behavior = sBehavior
		var connections = [];
	}

	/**
	* @name:
	* @desc:
	* @param:
	* @return:
	* @throws:
	**/
	State.prototype.addConnections = function(cons){
		if(cons){
			connections = cons;
		}
		else{
			throw Error('Connections not defined.')
		}
	};

	/**
	* @name:
	* @desc:
	* @param:
	* @return:
	* @throws:
	**/
	State.prototype.move = function(stateName){
		for(var i=0; i < connections.length; i++){
			if (stateName === connections[i].name){
				return connections[i];
			}
		}
		throw Error('State not found or movement not allowed');
	};

	/**
	* @name:
	* @desc:
	* @param:
	* @return:
	* @throws:
	**/
	State.prototype.run = function(data){
		behavior(data);
	};

})()
