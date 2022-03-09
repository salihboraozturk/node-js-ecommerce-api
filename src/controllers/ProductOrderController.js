"use strict";

const ResponseDto = require("../core/dtos/ResponseDto");
const GetProductOrder = require("../core/use-cases/Product-Order/GetProductOrder");
const GetProductOrderByOrderId = require("../core/use-cases/Product-Order/GetProductOrderByOrderId");
const GetAllProductOrders = require("../core/use-cases/Product-Order/GetAllProductOrder");
const CreateProductOrder = require("../core/use-cases/Product-Order/CreateProductOrder");
const UpdateProductOrder = require("../core/use-cases/Product-Order/UpdateProductOrder");
const DeleteProductOrder = require("../core/use-cases/Product-Order/DeleteProductOrder");
const AddProducts = require("../core/use-cases/Product-Order/AddProducts");
module.exports = class ProductOrderController {
	constructor(productOrderRepository) {
		this.productOrderRepository = productOrderRepository;
	}

	async getProductOrder(productOrderOderId) {
		var response = await GetProductOrder(
			productOrderOderId,
			this.productOrderRepository
		);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("productOrder", response, 200);
	}
	async listProductOrder() {
		var response = await GetAllProductOrders(this.productOrderRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("productOrder list", response, 200);
	}
	async createProductOrder(req) {
		var response = await CreateProductOrder(req, this.productOrderRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("created", response, 201);
	}
	async updateProductOrder(productOrderOderId, req) {
		var response = await UpdateProductOrder(
			productOrderOderId,
			req,
			this.productOrderRepository
		);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("updated", response, 200);
	}
	async deleteProductOrder(productOrderOderId) {
		var response = await DeleteProductOrder(
			productOrderOderId,
			this.productOrderRepository
		);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("deleted", response, 200);
	}
	async addProducts(products) {
		var response = await AddProducts(products, this.productOrderRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("added products", response, 200);
	}
	async getByOrderId(orderId) {
		var response = await GetProductOrderByOrderId(orderId, this.productOrderRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("productOrder", response, 200);
	}
};
