"use strict";
 
const OrderRequestDto = require("../../dtos/requests/OrderRequestDto");
 
module.exports = (orderId, request, orderRepository) => {
 
	return orderRepository.update(orderId,
		new OrderRequestDto(
			request.id,
			request.customerId,
			request.description,
			request.address
		)
	);
};