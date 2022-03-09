"use strict";
 
const ProductRequestDto = require("../../dtos/requests/ProductRequestDto");
 
module.exports = (productId, request, productRepository) => {
 
	return productRepository.update(productId,
		new ProductRequestDto(
			request.id,
			request.productName,
			request.stock,
			request.price
		)
	);
};