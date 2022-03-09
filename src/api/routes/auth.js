"use strict";
 
const express = require("express");
 
const AuthController = require("../../controllers/AuthController");
 
// api/auth
const authRouter = ({ customerRepository }) => {
	const router = express.Router();
     
	const authController = new AuthController(customerRepository);
 
	router.route("/")
		.post(async function (req, res) {
			var result = await authController.login(req.body);
			res.status(result.statusCode).send(result);
		});
	return router;
};
 
 
module.exports = authRouter;