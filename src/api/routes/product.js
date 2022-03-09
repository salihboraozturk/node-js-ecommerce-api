const express = require("express");
 
const ProductController = require("../../controllers/ProductController");
 
// api/products
const productsRouter = ({ productRepository }) => {
	const router = express.Router();
	const productController = new ProductController(productRepository);
 
	router.route("/")
		.get(async function (req, res) {
			var result = await productController.listProduct();
			res.status(result.statusCode).send(result);
		})
		.post(async function (req, res) {
			var result = await productController.createProduct(req.body);
			res.status(result.statusCode).send(result);
		});
 
	router.route("/:productId")
		.get(async function (req, res) {
			var result = await productController.getProduct(req.params.productId);
			res.status(result.statusCode).send(result);
		})
		.delete(async function (req, res) {
			var result = await productController.deleteProduct(req.params.productId);
			res.status(result.statusCode).send(result);
		})
		.put(async function (req, res) {
			var result = await productController.updateProduct(req.params.productId, req.body);
			res.status(result.statusCode).send(result);
		});
	return router;
};
 
module.exports = productsRouter;