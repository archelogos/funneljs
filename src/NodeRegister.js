'use strict';

// Singleton Pattern
const Register = (() => {

	function Reg(){
		var storage = {};
		var hashMap = false;
		var order;

		this.getStorage = () => {
			return storage;
		};

		this.addNode = (node) => {
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
    getInstance: () => {
      if(!instance){
        instance = new Reg();
      }
      return instance;
    }
  };

})();

const NodeRegister = Register.getInstance();
