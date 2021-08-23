'use strict';

const {getProducts} = require('../mock/products');

module.exports.getProductsList = async (event) => {
  const products = getProducts();

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
