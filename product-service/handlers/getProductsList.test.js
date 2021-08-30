import {getProductsList} from './getProductsList';

describe('Get all products', () => {
	it('should return all books', async () => {
		const response = await getProductsList();
		const products = JSON.parse(response.body);
		expect(products).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					id: expect.any(Number),
				})
			])
		)
	});
});
