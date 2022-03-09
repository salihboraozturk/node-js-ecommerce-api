"use strict";
 
const sequelize = require("../orm/sequelize/sequelize");
const OrderRepository = require("../../core/contracts/OrderRepository");
 
module.exports = class extends OrderRepository {
 
	constructor() {
		super();
		this.db = sequelize;
		this.model = this.db.model("Order");
	}
 
	async get(orderId) {
		return await this.model.findOne({
			where: {
				id: orderId
			}
		});
	}
 
	async list() {
		return await this.model.findAll();
	}
 
	async create(request) {
		return await this.model.create(request);
	}
 
	async update(orderId, request) {
		return await this.model.update(request, {
			where: { id: orderId }
		});
	}
 
	async delete(orderId) {
		return await this.model.destroy({
			where: {
				id: orderId
			}
		});
	}
 
};