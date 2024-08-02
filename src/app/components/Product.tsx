import { ProductType } from "@/types/ProductType"
import ProductImage from "./ProductImage";
import { formatPrice } from "@/lib/utils";

type ProductProps = {
    product: ProductType
}
export default function Product({product} : ProductProps ) {

    return (
        <div className="flex flex-col shadow-lg h-96 p-5 bg-zinc-800 rounded-xl">
            <div className="relative max-h-72 flex-1"> <ProductImage product={product} fill /> </div>
            <div className="flex justify-between font-bold my-3"> 
                <p className="w-40 text-white truncate"> {product.name} </p> 
                <p className="text-md text-teal-600"> {formatPrice(product.price)} </p> 
            </div>
            <button className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center"> Adicionar ao Carrinho </button>
        </div>
    );
}