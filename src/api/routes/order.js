const express = require("express");

const OrderController = require("../../controllers/OrderController");

// api/orders
const ordersRouter = ({ orderRepository }) => {
	const router = express.Router();
	const orderController = new OrderController(orderRepository);

	router
		.route("/")
		.get(async function (req, res) {
			var result = await orderController.listOrder();
			res.status(result.statusCode).send(result);
		})
		.post(async function (req, res) {
			var result = await orderController.createOrder(req.body);
			res.status(result.statusCode).send(result);
		});

	router
		.route("/:orderId")
		.get(async function (req, res) {
			var result = await orderController.getOrder(req.params.orderId);
			res.status(result.statusCode).send(result);
		})
		.delete(async function (req, res) {
			var result = await orderController.deleteOrder(req.params.orderId);
			res.status(result.statusCode).send(result);
		})
		.put(async function (req, res) {
			var result = await orderController.updateOrder(
				req.params.orderId,
				req.body
			);
			res.status(result.statusCode).send(result);
		});
	return router;
};

module.exports = ordersRouter;
