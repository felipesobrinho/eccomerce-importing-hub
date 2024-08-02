import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Cart from "./Cart";

function Navbar(){
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-black text-gray-300">
          <Link className="uppercase font-bold text-md h-12 flex items-center" href="/">
            Eccomerce
          </Link>
          <div className="flex items-center gap-8">
            <Cart />
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