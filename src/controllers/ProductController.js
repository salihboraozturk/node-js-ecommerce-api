"use strict";

const ResponseDto = require("../core/dtos/ResponseDto");
const GetProduct = require("../core/use-cases/Product/GetProduct");
const GetAllProducts = require("../core/use-cases/Product/GetAllProduct");
const CreateProduct = require("../core/use-cases/Product/CreateProduct");
const UpdateProduct = require("../core/use-cases/Product/UpdateProduct");
const DeleteProduct = require("../core/use-cases/Product/DeleteProduct");
module.exports = class ProductController {
 
	constructor(productRepository) {
		this.productRepository = productRepository;
	}
 
	async getProduct(productId) {
		var response = await GetProduct(productId, this.productRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("product", response, 200);
	}
	async listProduct() {
		var response = await GetAllProducts(this.productRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("product list", response, 200);
	}
	async createProduct(req) {
		var response = await CreateProduct(req, this.productRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("created", response, 201);
	}
	async updateProduct(productId, req) {
		var response = await UpdateProduct(productId, req, this.productRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("updated", response, 200);
	}
	async deleteProduct(productId) {
		var response = await DeleteProduct(productId, this.productRepository);
		if (response == null) return new ResponseDto("bad request", null, 400);
		return new ResponseDto("deleted", response, 200);
	}
};