import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Cart from "./Cart";
import { CircleUser, UserPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { LogIn } from "lucide-react";



function Navbar(){
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-black text-gray-300">
          <Link className="uppercase font-bold text-md h-12 flex items-center" href="/">
            Eccomerce
          </Link>
          <div className="flex items-center justify-center gap-8">
            <Cart />
            <div>
              <SignedIn>
                <UserButton />
              </SignedIn>

              <SignedOut>
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-5 h-5"> <CircleUser /> </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-3 bg-zinc-800 border-none shadow-lg relative top-2 right-8">
                    <DropdownMenuItem className="gap-4 text-white"> <LogIn /> <SignInButton mode="modal"> Entrar </SignInButton> </DropdownMenuItem>
                    <DropdownMenuItem className="gap-4 text-white"> <UserPlus /> <SignUpButton mode="modal"> Registrar </SignUpButton> </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SignedOut>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;