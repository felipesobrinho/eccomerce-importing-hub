'use client'
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import { Button } from "./ui/button";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type CheckoutButtonProps = {
    totalPrice: number;
}

export default function CheckoutButton({ totalPrice }: CheckoutButtonProps) {
    const router = useRouter();
    const {user} = useUser();
    const cartStore = useCartStore();

    const handleCheckout = async () => {
        if (!user) {
            router.push(`/sign-in?redirectUrl='/'`);
            return;
        }
        cartStore.setCheckout('checkout');
    }

    return (
    <div>
    <p className="text-teal-600 font-bold"> Total: {formatPrice(totalPrice)}</p>
    <Button
        onClick={handleCheckout}
        className="rounded-md w-full text-white bg-teal-600 py-2 mt-2"
    >
        Finalizar Compra
    </Button>
    </div>
    );
}
