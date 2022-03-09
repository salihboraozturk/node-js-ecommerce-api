"use strict";
 
const CustomerDto = require("../../dtos/CustomerDto");
 
module.exports = async (customerId, customerRepository) => {
 
	var customer = await customerRepository.get(customerId);
	if (customer != null)
		return new CustomerDto(
			customer.id,
			customer.firstName,
			customer.lastName,
			customer.email
		);
	return null;
 
};