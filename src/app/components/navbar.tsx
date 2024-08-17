'use client'
import { useRouter } from 'next/navigation'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Cart from "./cart";
import { AlignJustify, ArrowLeft, CircleUser, UserPlus, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/app/components/ui/drawer";

import { LogIn } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "./menu";

export default function Navbar({ title, goBack }: { title: string, goBack: boolean }) {
  const router = useRouter();

  return (
    <nav className="flex w-screen items-center justify-center py-4 bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary sm:w-full">
      <div className="w-full flex items-center justify-between mx-10">
        <div className="flex gap-4">
          <Drawer>
            <DrawerTrigger> <AlignJustify className="sm:hidden"/></DrawerTrigger>
            <DrawerContent >
              <DrawerHeader>
                <DrawerTitle> Menu </DrawerTitle>
                <DrawerClose> <X className="absolute top-5" width={32} height={32}/> </DrawerClose>
              </DrawerHeader>
              <Menu isOpen={true}/>
            </DrawerContent>
          </Drawer>
          {goBack && <ArrowLeft onClick={() => router.back()} />}
          <p className="sm:text-lg max-w-[200px] sm:max-w-[500px] text-sm text-nowrap truncate">{title}</p>
        </div>
        <div className="flex items-center justify-center gap-7">
          <ModeToggle />
          <Cart />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-6 h-6"> <CircleUser /> </DropdownMenuTrigger>
              <DropdownMenuContent className="p-2 border-none shadow-lg relative top-2 right-8">
                <DropdownMenuItem className="gap-3"> <LogIn /> <SignInButton mode="modal"> Entrar </SignInButton> </DropdownMenuItem>
                <DropdownMenuItem className="gap-3"> <UserPlus /> <SignUpButton mode="modal"> Registrar </SignUpButton> </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedOut>
        </div>
      </div>
    </nav>
  )
}
