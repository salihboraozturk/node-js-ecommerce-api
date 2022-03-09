"use strict";
 
module.exports = (productId, productRepository) => {
 
	return productRepository.delete(productId);
 
}; 