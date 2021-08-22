'use strict';

const {getProducts} = require('../mock/products');

module.exports.getProductsList = async (event) => {
  const products = getProducts();

  return {
    statusCode: 200,
    body: JSON.stringify(
      products,
      null,
      2
    ),
  };
};
