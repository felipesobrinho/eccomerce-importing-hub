import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/hooks/use-store";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function CheckoutForm({ clientSecret}: {clientSecret: string}) {
   const stripe = useStripe();
   const elements = useElements();
   const [isLoading, setLoading] = useState(false);
   const cartStore = useCartStore();

    const totalPrice = cartStore.cart.reduce((acc, item) => {
        return acc + item.price! * item.quantity!;
    }, 0);

    const formattedPrice = formatPrice(totalPrice);

    useEffect(() => {
        if (!stripe) return;
        if (!clientSecret) return;
    }, [clientSecret, stripe])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!stripe || !elements ) return;

        setLoading(true);
        stripe.confirmPayment({
            elements,
            redirect: "if_required"
        }).then((result) => {
            if (!result.error) {
                cartStore.setCheckout("sucess");
            }
            setLoading(false); 
        })
    }

    return(
        <form onSubmit={handleSubmit} id="payment-form">
            <PaymentElement id="payment-element" options={{layout: 'tabs' }} />
            <h1 className="py-4 font-bold"> Total: {formattedPrice} </h1>
            <Button
                type="submit"
                disabled={!stripe || isLoading }
                className="bg-teal-600"
            >
                {isLoading ? 'Carregando...' : 'Finalizar Compra'}
            </Button>
        </form>
    )
}