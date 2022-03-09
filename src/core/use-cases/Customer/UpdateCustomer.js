"use strict";
 
const CustomerRequestDto = require("../../dtos/requests/CustomerRequestDto");
 
module.exports = (customerId, request, customerRepository) => {
 
	return customerRepository.update(customerId,
		new CustomerRequestDto(
			request.id,
			request.firstName,
			request.lastName,
			request.email,
			request.password
		)
	);
};