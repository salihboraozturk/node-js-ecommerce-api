"use strict";
 
const ProductDto = require("../../dtos/ProductDto");
 
module.exports = async (productRepository) => {
 
	var products = await productRepository.list();
	if (products != null)
		return products.map((product) => {
			return new ProductDto(
				product.id,
				product.productName,
				product.stock,
				product.price
			);
		});
	return null;
 
};