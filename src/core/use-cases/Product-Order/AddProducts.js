"use strict";

const ProductOrderRequestDto = require("../../dtos/requests/ProductOrderRequestDto");

module.exports = (request, productOrderRepository) => {
	request.forEach((element) => {
		return productOrderRepository.create(
			new ProductOrderRequestDto(element.id, element.productId, element.orderId)
		);
	});
};
