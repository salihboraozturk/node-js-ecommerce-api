"use strict";
 
module.exports = (orderId, orderRepository) => {
 
	return orderRepository.delete(orderId);
 
}; 