"use strict";
 
const sequelize = require("../orm/sequelize/sequelize");
const CustomerRepository = require("../../core/contracts/CustomerRepository");
 
module.exports = class extends CustomerRepository {
 
	constructor() {
		super();
		this.db = sequelize;
		this.model = this.db.model("Customer");
	}
 
	async get(customerId) {
		return await this.model.findOne({
			where: {
				id: customerId
			}
		});
	}
 
	async list() {
		return await this.model.findAll();
	}
 
	async create(request) {
		return await this.model.create(request);
	}
 
	async update(customerId, request) {
		return await this.model.update(request, {
			where: { id: customerId }
		});
	}
 
	async delete(customerId) {
		return await this.model.destroy({
			where: {
				id: customerId
			}
		});
	}
 
	async login(request) {
		return await this.model.findOne({
			where: {
				email: request.email,
				password: request.password
			}
		});
	}
};