"use strict";

const sequelize = require("../orm/sequelize/sequelize");
const ProductRepository = require("../../core/contracts/ProductRepository");

module.exports = class extends ProductRepository {
	constructor() {
		super();
		this.db = sequelize;
		this.model = this.db.model("Product");
	}

	async get(productId) {
		return await this.model.findOne({
			where: {
				id: productId,
			},
		});
	}
	async list() {
		return await this.model.findAll();
	}

	async create(request) {
		return await this.model.create(request);
	}

	async update(productId, request) {
		return await this.model.update(request, {
			where: { id: productId },
		});
	}

	async delete(productId) {
		return await this.model.destroy({
			where: {
				id: productId,
			},
		});
	}
};
