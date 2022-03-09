"use strict";

module.exports = (() => {

	const environment = {
		database: {
			username: "root",
			password: "1234",
			database: "ECommerceDb",
			host: "localhost",
			dialect: "mysql"
		} 
	};

	return environment;
})();