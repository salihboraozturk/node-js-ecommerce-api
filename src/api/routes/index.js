"use strict";
 
const express = require("express");
const checkAuth = require("../middleware/checkauth");
const auth = require("./auth");
const customers = require("./customer");
const products = require("./product");
const orders = require("./order");
const productorder = require("./product-order");

const apiRouter = (serviceLocator) => {
	const routes = express.Router();
 
	routes.use("/auth", auth(serviceLocator));
	// Kullanıcı doğrulama işlemi burada middleware ile yapılıyor.
	routes.use("/", checkAuth);
 
	routes.use("/customers", customers(serviceLocator));
	routes.use("/products", products(serviceLocator));
  
	routes.use("/orders", orders(serviceLocator));
	routes.use("/productorders", productorder(serviceLocator));
 
	return routes;
};
module.exports = apiRouter;