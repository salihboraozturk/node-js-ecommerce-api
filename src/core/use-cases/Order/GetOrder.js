"use strict";
 
const OrderDto = require("../../dtos/OrderDto");
 
module.exports = async (orderId, orderRepository) => {
 
	var order = await orderRepository.get(orderId);
	if (order != null)
		return new OrderDto(
			order.id,
			order.customerId,
			order.description,
			order.address
		);
	return null;
 
};