'use client'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Cart from "./Cart";
import { CircleUser, Menu, UserPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { LogIn } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

function Navbar({title}: {title: string}) {
  return (
    <nav className="flex w-full items-center justify-center py-4 bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="w-full flex items-center justify-between mx-10">
        <div>
          <p>{title}</p>
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

export default Navbar;