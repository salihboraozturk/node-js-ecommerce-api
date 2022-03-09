const express = require("express");
 
const CustomerController = require("../../controllers/CustomerController");
 
// api/customers
const customersRouter = ({ customerRepository }) => {
	const router = express.Router();
	const customerController = new CustomerController(customerRepository);
 
	router.route("/")
		.get(async function (req, res) {
			var result = await customerController.listCustomer();
			res.status(result.statusCode).send(result);
		})
		.post(async function (req, res) {
			var result = await customerController.createCustomer(req.body);
			res.status(result.statusCode).send(result);
		});
 
	router.route("/:customerId")
		.get(async function (req, res) {
			var result = await customerController.getCustomer(req.params.customerId);
			res.status(result.statusCode).send(result);
		})
		.delete(async function (req, res) {
			var result = await customerController.deleteCustomer(req.params.customerId);
			res.status(result.statusCode).send(result);
		})
		.put(async function (req, res) {
			var result = await customerController.updateCustomer(req.params.customerId, req.body);
			res.status(result.statusCode).send(result);
		});
	return router;
};
 
module.exports = customersRouter;