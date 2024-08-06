'use client'
import { useCartStore } from "@/hooks/use-store";
import CartDrawer from "./CartDrawer";

export default function Cart() {
    const useStore = useCartStore();

    return (
        <>
            <div className="flex items-center relative">
                <CartDrawer />
                <span className="bg-teal-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-3.5 bottom-3">
                    {useStore.cart.length}
                </span>
            </div>
        </>
    )
}