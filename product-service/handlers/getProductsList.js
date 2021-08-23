'use strict';

import {getProductsPromise} from '../mock/products.js';

export const getProductsList = async (event) => {
  const products = await getProductsPromise();

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      products,
      null,
      2
    ),
  };
};
