"use strict";

const { Sequelize } = require("sequelize");
const environment = require("../../../config/environment");

const sequelize = new Sequelize(
	environment.database.database,
	environment.database.username,
	environment.database.password,
	{
		host: environment.database.host,
		dialect: environment.database.dialect
	});

sequelize.import("./models/customer");
sequelize.import("./models/product");
sequelize.import("./models/order");
sequelize.import("./models/productorder");

module.exports = sequelize;