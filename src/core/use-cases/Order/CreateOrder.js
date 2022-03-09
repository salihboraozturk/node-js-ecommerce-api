"use strict";
 
const OrderRequestDto = require("../../dtos/requests/OrderRequestDto");
 
module.exports = (request, orderRepository) => {
 
	return orderRepository.create(
		new OrderRequestDto(
			request.id,
			request.customerId,
			request.description,
			request.address
		)
	);
 
};