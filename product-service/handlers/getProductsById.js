'use strict';

import {getProductsPromise} from '../mock/products.js';

export const getProductsById = async (event) => {
	const pathParameters = event.pathParameters || {};
	const productId = Number(pathParameters.productId);
	const products = await getProductsPromise();
	const product = products.find((productItem) => productItem.id === productId);

	return {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
		},
		body: JSON.stringify(
			product,
			null,
			2
		),
	};
};
