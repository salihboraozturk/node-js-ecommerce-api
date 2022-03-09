"use strict";
 
const ProductRequestDto = require("../../dtos/requests/ProductRequestDto");
 
module.exports = (request, productRepository) => {
 
	return productRepository.create(
		new ProductRequestDto(
			request.id,
			request.productName,
			request.stock,
			request.price
		)
	);
 
};