'use strict';

const {getProducts} = require('../mock/products');

module.exports.getProductsById = async (event) => {
	const pathParameters = event.pathParameters || {};
	const productId = Number(pathParameters.productId);
	const products = getProducts();
	const product = products.find((productItem) => productItem.id === productId);

	return {
		statusCode: 200,
		body: JSON.stringify(
			product,
			null,
			2
		),
	};
};
