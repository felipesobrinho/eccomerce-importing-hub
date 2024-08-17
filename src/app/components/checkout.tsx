'use client'
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useCartStore } from "@/hooks/use-store";
import { useEffect, useState } from "react"
import CheckoutForm from './checkout-form';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout() {
    const cartStore = useCartStore();
    const [clientSecret, setClientSecret] = useState('');

    useEffect(( )=> {
        if (cartStore.cart.length === 0 || clientSecret) return;

        fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                items: cartStore.cart,
                payment_intent_id: cartStore.paymentIntent,
            })
        }). then((res) => {return res.json() }).then((data) => {
            cartStore.setPaymentIntent(data.paymentIntent?.id);
            setClientSecret(data.paymentIntent?.client_secret)
        });

    }, [cartStore, cartStore.cart, cartStore.paymentIntent, clientSecret]);

    const options: StripeElementsOptions = {
        clientSecret,
        appearance: {
            theme: 'night',
            labels: 'floating',
        }
    }

    return (
        <div>
            {
            clientSecret ? (
                <Elements options={options} stripe={stripePromise}> 
                    <CheckoutForm clientSecret={clientSecret} />
                </Elements>
            ) : (
                <div>
                    <h1>Carregando...</h1>
                </div>
            )
            }
        </div>
    )
}
