'use strict';

function Node(){

	var id;
	var connections;

	this.getId = () => {
		return id;
	}

	this.getConnections = () => {
		return connections;
	}

	this.setConnections = (cons) => {
		connections = (cons) ? cons : [];
	}

	// Init
	(function(){
		id = (Math.random()*10).toString(36);
	})();

}
