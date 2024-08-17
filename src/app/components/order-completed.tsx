/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useCartStore } from "@/hooks/use-store"
import { useEffect } from "react"
import { Button } from "./ui/button";

export default function OrderCompleted() {
    const cartStore = useCartStore();
    useEffect(() => {
        cartStore.setPaymentIntent('');
        cartStore.clearCart();
    },[])

    return (
        <div>
            <h1> Pedido Finalizado com Sucesso </h1>
            <Button className="bg-teal-600"
                onClick={() => { cartStore.setCheckout('cart')}}>
                Voltar para a Loja
            </Button>
        </div>
    )
}''