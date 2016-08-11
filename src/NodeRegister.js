'use strict';

// Singleton Pattern
const Register = (function(){

	function Reg(){
		var storage = {};
		var hashMap = false;
		var order;

		this.getStorage = function(){
			return storage;
		};

		this.addNode = function(node){
			for(let key in storage){
				if(key === String(node.id)){
					throw Error('Node: '+node.id+' already exists.');
				}
			}
			storage[node.id] = node;
		};

	};

  var instance;

  return {
    getInstance: function(){
      if(!instance){
        instance = new Reg();
      }
      return instance;
    }
  };

})();

const NodeRegister = Register.getInstance();
