import { ProductType } from "@/types/ProductType"
import ProductImage from "./ProductImage";
import { formatPrice } from "@/lib/utils";
import AddCart from "./AddCart";
import Link from "next/link";

type ProductProps = {
    product: ProductType

}

export default async function Product({ product }: ProductProps) {
    return (
        <div className="flex flex-col shadow-2xl h-96 p-5 rounded-xl dark:bg-zinc-800">
                <div className="relative max-h-72 flex-1"> <Link href={`/product/${product.id}`}> 
                    <ProductImage product={product} fill /> </Link> 
                </div>
                <Link href={`/product/${product.id}`}>
                    <div className="flex justify-between font-bold my-3">
                        <p className="w-40 truncate"> {product.name} </p>
                        <p className="text-md text-teal-600"> {formatPrice(product.price)} </p>
                    </div>
                </Link>
            <AddCart product={product} />
        </div>
    );
}