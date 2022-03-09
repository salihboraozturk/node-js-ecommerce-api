"use strict";
 
module.exports = class {
	constructor(id = null, productName, stock, price) {
		this.id = id;
		this.productName = productName;
		this.stock = stock;
		this.price = price;
	}
};