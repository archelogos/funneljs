'use strict';

function Machine(){

	this.states = [];
	this.current;

}

/**
* @name:
* @desc:
* @param:
* @return:
* @throws:
**/
Machine.prototype.isRegistered = function(stateName){
	for(var i=0; i < this.states.length; i++){
		if (stateName === this.states[i].name){
			return this.states[i];
		}
	}
	return false;
};

/**
* @name:
* @desc:
* @param:
* @return:
* @throws:
**/
Machine.prototype.addStates = function(states){
	this.states = states;
};

/**
* @name:
* @desc:
* @param:
* @return:
* @throws:
**/
Machine.prototype.move = function(followingStateName, commonData){
	var aux = this.current;
	this.current = aux.move(followingStateName);
	this.current.run(commonData);
};

/**
* @name:
* @desc:
* @param:
* @return:
* @throws:
**/
Machine.prototype.init = function(initStateName){
	var state = this.isRegistered(initStateName);
	if(state){
		this.current = state;
		state.run();
	}
	else{
		throw Error('State '+initStateName+' doesnt exist');
	}
};
