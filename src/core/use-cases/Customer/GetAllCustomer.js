"use strict";
 
const CustomerDto = require("../../dtos/CustomerDto");
 
module.exports = async (customerRepository) => {
 
	var customers = await customerRepository.list();
	if (customers != null)
		return customers.map((customer) => {
			return new CustomerDto(
				customer.id,
				customer.firstName,
				customer.lastName,
				customer.email
			);
		});
	return null;
 
};