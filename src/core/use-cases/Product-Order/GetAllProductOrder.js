"use strict";
 
const ProductOrderDto = require("../../dtos/ProductOrderDto");
 
module.exports = async (productOrderRepository) => {
	var productOrders = await productOrderRepository.list();
	if (productOrders != null)
		return productOrders.map((productOrder) => {
			return new ProductOrderDto(
				productOrder.id,
				productOrder.productId,
				productOrder.orderId
			);
		});
	return null;
 
};