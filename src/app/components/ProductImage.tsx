'use client'
import { ProductType } from "@/types/ProductType";
import Image from "next/image";

type ProductImageProps = {
    product: ProductType;
    fill?: boolean;
}

export default function ProductImage({product, fill}: ProductImageProps) {

    return fill ? (
        <Image 
            src={product.image} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            alt={product.name} 
            className={`object-contain grayscale-0' }`}
        />
    ) : (
        <Image 
            src={product.image} 
            width={400}
            height={400}
            alt={product.name} 
            className={`object-contain grayscale-0' }`}
        />
    )
}