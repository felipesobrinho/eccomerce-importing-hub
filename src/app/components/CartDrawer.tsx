import { ArrowLeft, MinusCircle, PlusCircle, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose, DrawerFooter } from "./ui/drawer";
import { Button } from "./ui/button";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog"

export default function CartDrawer() {
    const useStore = useCartStore();

    const totalPrice = useStore.cart.reduce((acc, item) => {
        return acc + item.price! * item.quantity!;
    }, 0);

    return (
        <Drawer direction="right">
            <DrawerTrigger> <ShoppingCart /> </DrawerTrigger>
            <DrawerContent className='h-screen top-0 right-0 left-auto mt-0 w-[500px] rounded-none'>
                <div className='mx-auto w-full p-5'>
                    <DrawerHeader>
                        {/* <DrawerClose className="flex items-center gap-3 pb-6"> 
                            <ArrowLeft className="bg-teal-600 text-white w-8 h-8 rounded-full" /> 
                            <p className="font-bold font-xl text-gray-500"> Voltar </p> 
                        </DrawerClose> */}
                        <DrawerTitle> Meu Carrinho </DrawerTitle>
                        <DrawerDescription>

                            {useStore.cart.map((item) => (
                                <div key={item.id} className="flex gap-5 py-4">
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
                                            <PlusCircle onClick={() => useStore.addProduct(item)} className="text-teal-600" />

                                            {item.quantity && item.quantity > 1 ? (
                                                <MinusCircle onClick={() => useStore.removeProduct(item)} className="text-red-500" />
                                            ) : (
                                                <AlertDialog>
                                                    <AlertDialogTrigger> <MinusCircle className="text-red-500" /> </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader className="flex items-center justify-center">
                                                            <AlertDialogTitle>Remover do Carrinho</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                Você tem certeza que deseja remover este item do carrinho?
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                            <AlertDialogAction className="bg-red-500 hover:bg-red-600" onClick={() => useStore.removeProduct(item)}>Remover</AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        {useStore.cart.length > 0 && (
                            <div>
                                <p className="text-teal-600 font-bold"> Total: {formatPrice(totalPrice)}</p>
                                <Button className="rounded-md w-full text-white bg-teal-600 py-2 mt-2"> Finalizar Compra </Button>
                            </div>
                        )}
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}