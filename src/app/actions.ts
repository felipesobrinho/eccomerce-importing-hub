'use server';

import { stripe } from "@/lib/stripe";
import { ProductType } from "@/types/ProductType";

export default async function fetchProducts(query: string): Promise<ProductType[]> {
    const products = await stripe.products.list();

    const filteredProducts = products.data.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    const formatedProducts = await Promise.all(
        filteredProducts.map(async (product) => {
            const price = await stripe.prices.list({
                product: product.id,
            });
            return {
                id: product.id,
                price: price.data[0].unit_amount,
                name: product.name,
                category: product.metadata['categoria'],
                image: product.images[0],
                description: product.description,
                currency: price.data[0].currency,
            };
        })
    );

    return formatedProducts;
}
