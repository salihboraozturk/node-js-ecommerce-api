"use strict";

const ResponseDto = require("../core/dtos/ResponseDto");
const GetOrder = require("../core/use-cases/Order/GetOrder");
const GetAllOrders = require("../core/use-cases/Order/GetAllOrder");
const CreateOrder = require("../core/use-cases/Order/CreateOrder");
const UpdateOrder = require("../core/use-cases/Order/UpdateOrder");
const DeleteOrder = require("../core/use-cases/Order/DeleteOrder");
module.exports = class OrderController {
 
	constructor(orderRepository) {
		this.orderRepository = orderRepository;
	}
 
	async getOrder(orderId) {
		var response = await GetOrder(orderId, this.orderRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("order", response, 200);
	}
	async listOrder() {
		var response = await GetAllOrders(this.orderRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("order list", response, 200);
	}
	async createOrder(req) {
		var response = await CreateOrder(req, this.orderRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("created", response, 201);
	}
	async updateOrder(orderId, req) {
		var response = await UpdateOrder(orderId, req, this.orderRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("updated", response, 200);
	}
	async deleteOrder(orderId) {
		var response = await DeleteOrder(orderId, this.orderRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("deleted", response, 200);
	}
};