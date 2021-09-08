import { signIn, signOut, useSession } from 'next-auth/client'
import Image from "next/image"
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline"

function Header() {
    const [ session, loading ] = useSession()

    return (
        <header className="sticky top-0 z-50">
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image  
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="h-full p-2 w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-4" type="text" />
                    <SearchIcon className="h-12 p-4" 
                
                    />
                </div>
            
                <div className="flex text-white items-center text-xs space-x-4 mx-6 whitespace-nowrap">
                    <div onClick={signIn} className="link">

                    <p>Hello, user</p>
                    <p className="font-extrabold md:text-sm">Account & Lists</p>
                     {/* <>
                        {!session && <>
                        Not signed in <br/>
                        <button onClick={() => signIn()}>Sign in</button>
                        </>}
                        {session && <>
                        Signed in as {session.user.email} <br/>
                        <button onClick={() => signOut()}>Sign out</button>
                        <p>Hello, user</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                        </>}
                    </> */}
                        
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="relative flex items-center link">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 text-center text-black font-bold bg-yellow-400 rounded-full">0</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="lg:hidden h-5 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkits</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
                
            </div>
            
        </header>
    )
}

export default Header
