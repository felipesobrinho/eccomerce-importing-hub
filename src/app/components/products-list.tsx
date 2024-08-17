import Product from "./product";
import { ProductType } from "@/types/ProductType";

type ProductListProps = {
    products: ProductType[];
}

export default function ProductsList({products}: ProductListProps ) {
    return (
        <div className="grid gap-10 xl:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 pt-10">
          {products.map((product) => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
    )
}