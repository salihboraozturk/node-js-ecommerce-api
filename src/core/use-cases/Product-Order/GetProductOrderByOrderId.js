"use strict";

const ProductOrderDto = require("../../dtos/ProductOrderDto");

module.exports = async (orderId, productOrderRepository) => {
	var productOrder = await productOrderRepository.getByOrderId(orderId);
	if (productOrder != null) {
		var arr = [];
		arr = productOrder;
		return arr;
	}
	return null;
};
