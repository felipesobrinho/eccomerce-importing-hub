'use client'
import { useCartStore } from "@/hooks/use-store"
import { ProductType } from "@/types/ProductType"
import { Button } from "./ui/button";

export default function AddCart({product}: {product: ProductType}) {
    const {addProduct} = useCartStore();

    return (
        <Button 
            onClick={() => addProduct(product)}
            className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm text-center"
        > 
            Adicionar ao Carrinho 
        </Button>
    )
}