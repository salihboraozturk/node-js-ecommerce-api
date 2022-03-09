"use strict";

const CustomerRepository = require("../infrustructure/repositories/CustomerRepository");
const ProductRepository = require("../infrustructure/repositories/ProductRepository");
const OrderRepository = require("../infrustructure/repositories/OrderRepository");
const ProductOrderRepository = require("../infrustructure/repositories/ProductOrderRepository");

function services() {
	const services = {};

	services.customerRepository = new CustomerRepository();
	services.productRepository = new ProductRepository();
	services.productOrderRepository = new ProductOrderRepository();
	services.orderRepository = new OrderRepository();

	return services;
}

module.exports = services();
