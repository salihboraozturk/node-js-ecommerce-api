const express = require("express");

const ProductOrderController = require("../../controllers/ProductOrderController");

// api/productProductOrders
const productOrdersRouter = ({ productOrderRepository }) => {
	const router = express.Router();
	const productOrderController = new ProductOrderController(
		productOrderRepository
	);

	router
		.route("/")
		.get(async function (req, res) {
			var result = await productOrderController.listProductOrder();
			res.status(result.statusCode).send(result);
		})
		.post(async function (req, res) {
			var result = await productOrderController.createProductOrder(req.body);
			res.status(result.statusCode).send(result);
		});

	router
		.route("/:Id")
		.get(async function (req, res) {
			var result = await productOrderController.getProductOrder(req.params.Id);
			res.status(result.statusCode).send(result);
		})
		.delete(async function (req, res) {
			var result = await productOrderController.deleteProductOrder(
				req.params.Id
			);
			res.status(result.statusCode).send(result);
		})
		.put(async function (req, res) {
			var result = await productOrderController.updateProductOrder(
				req.params.Id,
				req.body
			);
			res.status(result.statusCode).send(result);
		});
	router.route("/addProducts").post(async function (req, res) {
		var result = await productOrderController.addProducts(req.body);
		res.status(result.statusCode).send(result);
	});
	router.route("/getByOrderId/:orderId").get(async function (req, res) {
		var result = await productOrderController.getByOrderId(req.params.orderId);
		res.status(result.statusCode).send(result);
	});
	return router;
};

module.exports = productOrdersRouter;
