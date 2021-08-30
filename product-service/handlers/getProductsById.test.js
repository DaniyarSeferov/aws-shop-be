import {getProductsById} from './getProductsById';

describe('Get product by id', () => {
	it('should return current book', async () => {
		const response = await getProductsById({
			pathParameters: {
				productId: 1
			}
		});
		const product = JSON.parse(response.body);
		expect(product).toEqual(
			expect.objectContaining({
				id: expect.any(Number),
			})
		)
	});
});