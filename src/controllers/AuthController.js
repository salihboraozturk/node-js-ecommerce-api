"use strict";
const constant = require("../../src/config/constants");
const ResponseDto = require("../core/dtos/ResponseDto");
const AuthDto = require("../core/dtos/AuthDto");
const LoginCustomer = require("../core/use-cases/Customer/LoginCustomer");
const jwt = require("jsonwebtoken");

module.exports = class AuthController {
	constructor(customerRepository) {
		this.customerRepository = customerRepository;
	}

	async login(req) {
		var response = await LoginCustomer(req, this.customerRepository);
		if (response != null) {
			const token = jwt.sign(
				{
					id: response.id,
					email: response.email,
				},
				constant.JWT.SECRET_KEY,
				{
					expiresIn: "2h",
				}
			);
			return new ResponseDto("ok", new AuthDto(token), 200);
		} else {
			return new ResponseDto("bad request", null, 400);
		}
	}
};
