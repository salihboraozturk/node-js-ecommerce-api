"use strict";
 
module.exports = class {
	constructor(id = null, customerId, description, address) {
		this.id = id;
		this.customerId = customerId;
		this.description = description;
		this.address = address;
	}
};