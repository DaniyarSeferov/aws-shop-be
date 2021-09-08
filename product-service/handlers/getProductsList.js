import {getProductsPromise} from '../mock/products.js';
import {HttpCode} from '../utils/const';
import {getErrorResponse, normalizeResponse} from '../utils/utils';

export const getProductsList = async (event) => {
  try {
    const products = await getProductsPromise();

    if (!Array.isArray(products) || products.length === 0) {
      const error = new Error('Internal Server Error');
      error.status = HttpCode.INTERNAL_SERVER_ERROR;
      throw error;
    }

    const response = {
      body: JSON.stringify(
        products,
        null,
        2
      ),
    };

    return normalizeResponse(response);
  } catch (error) {
    return getErrorResponse(error);
  }
};
