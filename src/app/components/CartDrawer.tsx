import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose, DrawerFooter } from "./ui/drawer";
import { Button } from "./ui/button";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";


export default function CartDrawer() {
    const useStore = useCartStore();

    return (
        <Drawer direction="right">
            <DrawerTrigger> <ShoppingCart /> </DrawerTrigger>
            <DrawerContent className='h-screen top-0 right-0 left-auto mt-0 w-[500px] rounded-none'>
                <div className='mx-auto w-full p-5'>
                    <DrawerHeader>
                        <DrawerTitle> Meu Carrinho</DrawerTitle>
                        <DrawerDescription>
                            {useStore.cart.map((item) => (
                                <div key={item.id} className="flex gap-4 py-4">
                                    <Image 
                                        src={item.image}
                                        alt={item.name}
                                        width={120}
                                        height={120}
                                        className="object-cover w-24 h-24"
                                    />
                                    <div>
                                        <h2 className="w-42 truncate">{item.name}</h2>
                                        <h2>Quantidade: {item.quantity}</h2>
                                        <p className="text-teal-600 text-sm font-bold"> {formatPrice(item.price)} </p>
                                        <div className="flex gap-4 my-2">
                                            <Button onClick={() => useStore.addProduct(item)} className="bg-teal-600"> Adicionar </Button>
                                            <Button onClick={() => useStore.removeProduct(item)} variant={'destructive'}> Remover </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose> <Button className="bg-teal-600"> Voltar para a loja </Button> </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}