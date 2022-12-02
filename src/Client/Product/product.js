import { sellingPlanGroupConnection } from './fragments';
import { createGetProductQuery } from './queries';
import { normalizeProduct } from './helpers';

class Product {
	constructor(Client) {
		this.Client = Client;
		this.send = this.Client.Request.send.bind(this.Client.Request);
		this.useFragment(sellingPlanGroupConnection);
	}

	useFragment(fragment = sellingPlanGroupConnection) {
		this.getProductQuery = createGetProductQuery(fragment);

		return this;
	}

	async fetch(productId, vars) {
		const query = this.getProductQuery;
		const variables = { productId, ...vars };
		const { product } = await this.send({ query, variables });
		const normalizedProduct = normalizeProduct(product);

		return normalizedProduct;
	}
}

export default Product;