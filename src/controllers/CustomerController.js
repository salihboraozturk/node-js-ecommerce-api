"use strict";

const ResponseDto = require("../core/dtos/ResponseDto");
const GetCustomer = require("../core/use-cases/Customer/GetCustomer");
const GetAllCustomers = require("../core/use-cases/Customer/GetAllCustomer");
const CreateCustomer = require("../core/use-cases/Customer/CreateCustomer");
const UpdateCustomer = require("../core/use-cases/Customer/UpdateCustomer");
const DeleteCustomer = require("../core/use-cases/Customer/DeleteCustomer");
module.exports = class CustomerController {
	constructor(customerRepository) {
		this.customerRepository = customerRepository;
	}

	async getCustomer(customerId) {
		var response = await GetCustomer(customerId, this.customerRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("customer", response, 200);
	}
	async listCustomer() {
		var response = await GetAllCustomers(this.customerRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("customer list", response, 200);
	}
	async createCustomer(req) {
		var response = await CreateCustomer(req, this.customerRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("created", response, 201);
	}
	async updateCustomer(customerId, req) {
		var response = await UpdateCustomer(
			customerId,
			req,
			this.customerRepository
		);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("updated", response, 200);
	}
	async deleteCustomer(customerId) {
		var response = await DeleteCustomer(customerId, this.customerRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("deleted", response, 200);
	}
};
