'use strict';

function State() {

  // Call the parent constructor
  Node.call(this);
  this.name;
	this.behavior;

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
