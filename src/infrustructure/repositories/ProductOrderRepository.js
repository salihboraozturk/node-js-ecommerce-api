"use strict";

const sequelize = require("../orm/sequelize/sequelize");
const ProductOrderRepository = require("../../core/contracts/ProductOrderRepository");

module.exports = class extends ProductOrderRepository {
	constructor() {
		super();
		this.db = sequelize;
		this.model = this.db.model("Product_Order");
	}

	async get(productOrderId) {
		return await this.model.findOne({
			where: {
				id: productOrderId,
			},
		});
	}

	async list() {
		return await this.model.findAll();
	}

	async create(request) {
		return await this.model.create(request);
	}

	async update(productOrderId, request) {
		return await this.model.update(request, {
			where: { id: productOrderId },
		});
	}
	async getByOrderId(porderId) {
		var test = this.model.findAll({
			where: {
				orderId: porderId,
			},
		});
		return await test;
	}
	async delete(productOrderId) {
		return await this.model.destroy({
			where: {
				id: productOrderId,
			},
		});
	}
};
