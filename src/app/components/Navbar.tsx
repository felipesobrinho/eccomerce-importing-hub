import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from "@/store";

function Navbar(){
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-black text-gray-300">
          <Link className="uppercase font-bold text-md h-12 flex items-center" href="/">
            Eccomerce
          </Link>
          <div className="flex items-center gap-8">
            <div className="flex items-center relative">
              <ShoppingCart />
              <span className="bg-teal-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-3.5 bottom-3"> 2</span>
            </div>
            <div>
            <SignedIn>
              <UserButton/>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="uppercase rounded-md border-gray-100 bg-gray-200 px-3 py-2 text-black font-bold"> Login </button>
              </SignInButton>
            </SignedOut>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;