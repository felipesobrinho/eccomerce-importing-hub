import AddCart from "@/app/components/add-cart";
import { ContentLayout } from "@/app/components/content-layout";
import ProductImage from "@/app/components/product-image";
import { formatPrice } from "@/lib/utils";
import Stripe from "stripe";

type ProductPageProps = {
    params: {
        id: string;
    }
}

async function getProductDetails(id: string) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2024-06-20',
    })
    const product = await stripe.products.retrieve(id);
    const price = await stripe.prices.list({
        product: product.id,
    })

    return {
        id: product.id,
        price: price.data[0].unit_amount,
        name: product.name,
        category: product.metadata['category'],
        image: product.images[0],
        description: product.description,
        currency: price.data[0].currency
    }
}

export default async function ProductPage({params: {id} }: ProductPageProps) {
    const product = await getProductDetails(id);

    return (
        <ContentLayout title={product.name} goBack={true}>
            <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-8 p-10">
                <ProductImage product={product}/>
                <div className="flex flex-col">
                    <div className="pb-4"> 
                        <h1 className="text-2xl font-bold">  {product.name} </h1>
                        <h2 className="text-xl"> {formatPrice(product.price)}</h2>
                    </div>
                    <div className="pb-4">
                        <p className="text-sm "> {product.category} </p>
                        <p className="text-sm "> {product.description} </p>
                    </div>
                    <AddCart product={product}/>
                </div>
            </div>
        </ContentLayout>
    )
}