"use strict";
 
module.exports = (productOrderId, productOrderRepository) => {
 
	return productOrderRepository.delete(productOrderId);
 
}; 