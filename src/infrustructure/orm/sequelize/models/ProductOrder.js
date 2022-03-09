module.exports = (sequelize, DataTypes) => {
	const tableName = "Product_Order";
	var productOrder = sequelize.define(
		tableName,
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				unique: true,
			},
			orderId: {
				type: DataTypes.INTEGER,
				references: "Order",
				referencesKey: "id",
				allowNull: false,
			},
			productId: {
				type: DataTypes.INTEGER,
				references: "Product",
				referencesKey: "id",
				allowNull: false,
			},
		},
		{
			tableName: tableName,
			timestamps: false,
		}
	);
};
