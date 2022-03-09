"use strict";

const LoginRequestDto = require("../../dtos/requests/LoginRequestDto");

module.exports = (login, customerRepository) => {
	return customerRepository.login(
		new LoginRequestDto(login.email, login.password)
	);
};
