'use strict';

function State(sName, sBehavior) {

  // Call the parent constructor
  Node.call(this, sName);
	this.behavior = sBehavior;
	this.connections = [];
}

// Inherit Node
State.prototype = Object.create(Node.prototype);
// correct the constructor pointer
State.prototype.constructor = Node;

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
