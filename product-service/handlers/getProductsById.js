'use strict';

import {getProductsPromise} from '../mock/products.js';
import {getErrorResponse, normalizeResponse} from '../utils/utils';
import {HttpCode} from '../utils/const';

export const getProductsById = async (event) => {

	try {
		const pathParameters = event.pathParameters || {};
		const productId = Number(pathParameters.productId);
		const products = await getProductsPromise();
		const product = products.find((productItem) => productItem.id === productId);

		if (typeof product === 'undefined') {
			const error = new Error('Product not found');
			error.status = HttpCode.NOT_FOUND;
			throw error;
		}

		const response = {
			body: JSON.stringify(
				product,
				null,
				2
			),
		};

		return normalizeResponse(response);
	} catch (error) {
		return getErrorResponse(error);
	}
};
