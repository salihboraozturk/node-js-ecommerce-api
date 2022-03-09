"use strict";

const ProductOrderDto = require("../../dtos/ProductOrderDto");

module.exports = async (productOrderId, productOrderRepository) => {
	var productOrder = await productOrderRepository.get(productOrderId);
	if (productOrder != null)
		return new ProductOrderDto(productOrder.id, productOrder.productId, productOrder.orderId);
	return null;
};
