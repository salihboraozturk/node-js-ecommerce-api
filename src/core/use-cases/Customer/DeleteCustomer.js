"use strict";
 
module.exports = (customerId, customerRepository) => {
 
	return customerRepository.delete(customerId);
 
}; 