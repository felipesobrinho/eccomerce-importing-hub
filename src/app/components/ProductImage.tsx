'use client'
import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
    product: ProductType;
    fill?: boolean;
}

export default function ProductImage({product, fill}: ProductImageProps) {
    const [loading, setLoading] = useState(true);

    return fill ? (
        <Image 
            src={product.image} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            alt={product.name} 
            className={`object-cover ${loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0' }`}
            onLoad={() => setLoading(false)}
        />
    ) : (
        <Image 
            src={product.image} 
            width={400}
            height={400}
            alt={product.name} 
            className={`object-cover ${loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0' }`}
            onLoad={() => setLoading(false)}
        />
    )
}