"use strict";

module.exports = class {
	constructor(id = null, productId, orderId) {
		this.id = id;
		this.productId = productId;
		this.orderId = orderId;
	}
};
