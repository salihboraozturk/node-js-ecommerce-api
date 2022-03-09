"use strict";
 
const CustomerRequestDto = require("../../dtos/requests/CustomerRequestDto");
 
module.exports = (request, customerRepository) => {
 
	return customerRepository.create(
		new CustomerRequestDto(
			request.id,
			request.firstName,
			request.lastName,
			request.email,
			request.password
		)
	);
 
};