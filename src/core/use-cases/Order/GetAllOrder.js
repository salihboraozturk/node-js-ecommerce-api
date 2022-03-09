"use strict";
 
const OrderDto = require("../../dtos/OrderDto");
 
module.exports = async (orderRepository) => {
 
	var orders = await orderRepository.list();
	if (orders != null)
		return orders.map((order) => {
			return new OrderDto(
				order.id,
				order.customerId,
				order.description,
				order.address
			);
		});
	return null;
 
};