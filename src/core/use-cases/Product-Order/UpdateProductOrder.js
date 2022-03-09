"use strict";
 
const ProductOrderRequestDto = require("../../dtos/requests/ProductOrderRequestDto");
 
module.exports = (productOrderId, request, productOrderRepository) => {
	return productOrderRepository.update(productOrderId,
		new ProductOrderRequestDto(
			request.id,
			request.productId,
			request.orderId
		)
	);
};