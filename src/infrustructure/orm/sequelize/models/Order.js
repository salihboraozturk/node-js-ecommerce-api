const product = require("../models/Product");
const productOrder = require("../models/ProductOrder");
module.exports = (sequelize, DataTypes) => {
	const tableName = "Order";
	var order = sequelize.define(
		tableName,
		{
			id: {
				primaryKey: true,
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			customerId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: tableName,
			timestamps: false,
		}
	);
};
