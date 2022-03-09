const order = require("../models/Order");
const productOrder = require("../models/ProductOrder");
module.exports = (sequelize, DataTypes) => {
	const tableName = "Product";
	var product = sequelize.define(
		tableName,
		{
			id: {
				primaryKey: true,
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			productName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			stock: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			price: {
				type: DataTypes.DOUBLE,
				allowNull: false,
			},
		},
		{
			tableName: tableName,
			timestamps: false,
		}
	);
};
