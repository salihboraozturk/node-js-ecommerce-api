"use strict";
 
const ProductDto = require("../../dtos/ProductDto");
 
module.exports = async (productId, productRepository) => {
 
	var product = await productRepository.get(productId);
	if (product != null)
		return new ProductDto(
			product.id,
			product.productName,
			product.stock,
			product.price
		);
	return null;
 
};