"use strict";
 
const ProductOrderRequestDto = require("../../dtos/requests/ProductOrderRequestDto");
 
module.exports = (request, productOrderRepository) => {
	return productOrderRepository.create(
		new ProductOrderRequestDto(
			request.id,
			request.productId,
			request.orderId
		)
	);
 
};