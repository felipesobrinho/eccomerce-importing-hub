'use client'
import { useCartStore } from "@/store";
import { ShoppingCart } from "lucide-react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/app/components/ui/drawer"

export default function Cart() {
    const useStore = useCartStore();

    return (
        <>
            <div className="flex items-center relative">
                <Drawer direction="right">
                    <DrawerTrigger> <ShoppingCart /> </DrawerTrigger>
                    <DrawerContent className='h-screen top-0 right-0 left-auto mt-0 w-[500px] rounded-none'>
                        <div className='mx-auto w-full p-5'>
                            <DrawerHeader>
                                <DrawerTitle> Meu Carrinho</DrawerTitle>
                                <DrawerDescription>
                                    {useStore.cart.map((item) => (
                                        <div key={item.id}>
                                            {item.name}
                                        </div>
                                    ))}
                                </DrawerDescription>
                            </DrawerHeader>
                        </div>
                    </DrawerContent>
                </Drawer>
                <span className="bg-teal-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-3.5 bottom-3">
                    {useStore.cart.length}
                </span>
            </div>
        </>
    )
}